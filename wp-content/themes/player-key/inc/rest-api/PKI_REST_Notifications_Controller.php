<?php

namespace api;

use WP_REST_Controller;
use WP_REST_Request;

class PKI_REST_Notifications_Controller extends WP_REST_Controller {

	public function __construct() {
		$this->namespace = 'pki/v1';
		$this->rest_base = 'notifications';
	}

	public function register_routes(): void {

		register_rest_route( $this->namespace, "/$this->rest_base/get-notifications", [
			[
				'callback'            => [ $this, 'get_notifications' ],
				'methods'             => 'POST',
				'permission_callback' => [ $this, 'check_permissions' ],

			],
		] );

		register_rest_route( $this->namespace, "/$this->rest_base/mark-all-notifications-read", [
			[
				'callback'            => [ $this, 'mark_all_notifications_read' ],
				'methods'             => 'POST',
				'permission_callback' => [ $this, 'check_permissions' ],

			],
		] );

		register_rest_route( $this->namespace, "/$this->rest_base/remove-all-notifications", [
			[
				'callback'            => [ $this, 'remove_all_notifications' ],
				'methods'             => 'POST',
				'permission_callback' => [ $this, 'check_permissions' ],

			],
		] );
	}

	/**
	 * @param WP_REST_Request $request
	 *
	 * @return bool
	 */
	public function check_permissions( WP_REST_Request $request ): bool {
		$user_id = get_option( $request->get_param( 'token' ) );
		$user    = get_user_by( 'ID', $user_id );

		return ! empty( $user_id ) && $user !== null && $user->ID !== 0;
	}

	/**
	 * @param int $user_id
	 *
	 * @return array
	 */
	private function get_notifications_data( int $user_id ): array {
		$notifications_data = [];
		$notifications      = get_posts( [
			'numberposts' => - 1,
			'post_type'   => 'notification',
			'meta_query'  => [
				'relation' => 'AND',
				[
					'key'   => 'recipient',
					'value' => $user_id,
				],
				[
					'key'   => 'recipient_role',
					'value' => get_user_meta( $user_id, 'current-role', true ),
				],
			],
		] );

		if ( ! empty( $notifications ) ) {
			foreach ( $notifications as $notification ) {
				$notifications_data[] = [
					'ID'      => $notification->ID,
					'message' => $notification->post_title,
					'date'    => $notification->post_date,
					'type'    => get_post_meta( $notification->ID, 'type', true ),
					'status'  => get_post_meta( $notification->ID, 'status', true ),
				];
			}
		}

		return $notifications_data;
	}

	/**
	 * @param WP_REST_Request $request
	 *
	 * @return void
	 */
	public function get_notifications( WP_REST_Request $request ): void {
		$data    = $request->get_params();
		$user_id = get_option( $data['token'] );

		$notifications_data = $this->get_notifications_data( $user_id );
		wp_send_json_success( $notifications_data );
	}

	/**
	 * @param WP_REST_Request $request
	 *
	 * @return void
	 */
	public function mark_all_notifications_read( WP_REST_Request $request ): void {
		$data    = $request->get_params();
		$user_id = get_option( $data['token'] );

		$new_notifications = get_posts( [
			'numberposts' => - 1,
			'post_type'   => 'notification',
			'meta_query'  => [
				'relation' => 'AND',
				[
					'key'   => 'recipient',
					'value' => $user_id,
				],
				[
					'key'   => 'recipient_role',
					'value' => get_user_meta( $user_id, 'current-role', true ),
				],
				[
					'key'   => 'status',
					'value' => 'new',
				]
			],
		] );

		if ( ! empty( $new_notifications ) ) {
			foreach ( $new_notifications as $notification ) {
				update_post_meta( $notification->ID, 'status', 'read' );
			}
		}

		$notifications_data = $this->get_notifications_data( $user_id );
		wp_send_json_success( $notifications_data );

	}

	/**
	 * @param WP_REST_Request $request
	 *
	 * @return void
	 */
	public function remove_all_notifications( WP_REST_Request $request ): void {
		$data    = $request->get_params();
		$user_id = get_option( $data['token'] );

		$notifications_data = $this->get_notifications_data( $user_id );

		if ( ! empty( $notifications_data ) ) {
			foreach ( $notifications_data as $notification ) {
				wp_delete_post( $notification['ID'] );
			}

			wp_send_json_success();
		}

		wp_send_json_error();
	}
}
