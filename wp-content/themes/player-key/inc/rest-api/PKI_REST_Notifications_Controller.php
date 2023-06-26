<?php

namespace api;

use WP_REST_Controller;
use WP_REST_Request;

class PKI_REST_Notifications_Controller extends WP_REST_Controller {


	function __construct() {
		$this->namespace = 'pki/v1';
		$this->rest_base = 'notifications';
	}

	public function register_routes(): void {

		register_rest_route( $this->namespace, "/$this->rest_base/get-notifications", [
			[
				'methods'  => 'POST',
				'callback' => [ $this, 'get_notifications' ],

			],
		] );

		register_rest_route( $this->namespace, "/$this->rest_base/mark-all-read", [
			[
				'methods'  => 'POST',
				'callback' => [ $this, 'mark_all_read' ],

			],
		] );

		register_rest_route( $this->namespace, "/$this->rest_base/remove-all", [
			[
				'methods'  => 'POST',
				'callback' => [ $this, 'remove_all' ],

			],
		] );
	}

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

	function get_notifications( WP_REST_Request $request ) {
		$data    = $request->get_params();
		$user_id = get_option( $data['token'] );

		if ( ! empty( $user_id ) ) {
			$user = get_user_by( 'ID', $user_id );

			if ( $user !== false ) {

				$notifications_data = $this->get_notifications_data( $user_id, );
				wp_send_json_success( $notifications_data );
			}
		}

		wp_send_json_error();
	}

	function mark_all_read( WP_REST_Request $request ) {
		$data    = $request->get_params();
		$user_id = get_option( $data['token'] );

		if ( ! empty( $user_id ) ) {
			$user = get_user_by( 'ID', $user_id );

			if ( $user !== false ) {
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


				$notifications_data = $this->get_notifications_data( $user_id, );
				wp_send_json_success( $notifications_data );
			}
		}

		wp_send_json_error();
	}

	function remove_all( WP_REST_Request $request ) {
		$data    = $request->get_params();
		$user_id = get_option( $data['token'] );

		if ( ! empty( $user_id ) ) {
			$user = get_user_by( 'ID', $user_id );

			if ( $user !== false ) {
				$notifications_data = $this->get_notifications_data( $user_id, );

				if ( ! empty( $notifications_data ) ) {
					foreach ( $notifications_data as $notification ) {
//						delete_post_meta( $notification['ID'], 'recipient' );
//						delete_post_meta( $notification['ID'], 'recipient_role' );
//						delete_post_meta( $notification['ID'], 'type' );
//						delete_post_meta( $notification['ID'], 'status' );

						wp_delete_post( $notification['ID'] );
					}

					wp_send_json_success();
				}
			}
		}
	}
}
