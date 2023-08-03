<?php

namespace api;

use JsonException;
use WP_REST_Controller;
use WP_REST_Request;

class PKI_REST_Parents_Controller extends WP_REST_Controller {
	public const WEEK_IN_SECONDS = 604800;
	public const DAY_IN_SECONDS = 86400;

	public function __construct() {
		$this->namespace = 'pki/v1';
		$this->rest_base = 'parents';
	}

	/**
	 * @return void
	 */
	public function register_routes(): void {

		/**
		 * Create Parent
		 */
		register_rest_route( $this->namespace, "/$this->rest_base/create-parent", [
			[
				'args'                => [
					'form'  => [
						'required' => true,
						'type'     => 'object',
					],
					'token' => [
						'required' => true,
						'type'     => 'string',
					],
				],
				'callback'            => [ $this, 'create_parent' ],
				'methods'             => 'POST',
				'permission_callback' => [ $this, 'check_permissions' ],

			],
		] );

		register_rest_route( $this->namespace, "/$this->rest_base/edit-parent", [
			[
				'args'                => [
					'form'     => [
						'required' => true,
						'type'     => 'object',
					],
					'parentId' => [
						'required' => true,
						'type'     => 'number',
					],
					'token'    => [
						'required' => true,
						'type'     => 'string',
					],
				],
				'callback'            => [ $this, 'edit_parent' ],
				'methods'             => 'POST',
				'permission_callback' => [ $this, 'check_permissions' ],

			],
		] );

		register_rest_route( $this->namespace, "/$this->rest_base/get-parents", [
			[
				'args'                => [
					'token' => [
						'required' => true,
						'type'     => 'string',
					],
				],
				'callback'            => [ $this, 'get_parents' ],
				'methods'             => 'POST',
				'permission_callback' => [ $this, 'check_permissions' ],

			],
		] );

		register_rest_route( $this->namespace, "/$this->rest_base/remove-parent", [
			[
				'args'                => [
					'parentId' => [
						'required' => true,
						'type'     => 'number',
					],
					'token'    => [
						'required' => true,
						'type'     => 'string',
					],
				],
				'callback'            => [ $this, 'remove_parent' ],
				'methods'             => 'POST',
				'permission_callback' => [ $this, 'check_permissions' ],

			],
		] );
	}

	/*
	*
	 * @param WP_REST_Request $request
	 *
	 * @return bool
	 */
	public function check_permissions( WP_REST_Request $request ): bool {
		$user    = wp_get_current_user();
		$user_id = get_option( $request->get_param( 'token' ) );

		return ! empty( $user_id ) && $user !== null && $user->ID !== 0 && $user->ID === (int) $user_id;
	}

	/**
	 * @param WP_REST_Request $request
	 *
	 * @return void
	 * @throws JsonException
	 */
	public function create_parent( WP_REST_Request $request ): void {
		$data = json_decode( $request->get_body(), true, 512, JSON_THROW_ON_ERROR );
		$user = wp_get_current_user();

		if ( $user === null ) {
			wp_send_json_error( 'User not found. You are not authorized to perform this action.' );
		}

		$parent_id = wp_insert_user( [
			'user_login' => $data['form']['email'],
			'user_pass'  => wp_generate_password(),
			'user_email' => $data['form']['email'],
			'first_name' => $data['form']['firstName'],
			'last_name'  => $data['form']['lastName'],
			'role'       => 'parent',
		] );

		if ( ! is_wp_error( $parent_id ) ) {
			add_user_meta( $parent_id, 'initial_coach', $user->ID );
			update_field( 'coaches', [ $user->ID ], 'user_' . $parent_id );
			update_field( 'is_activated', 'no', 'user_' . $parent_id );
			update_field( 'social_link', $data['form']['socialLink'], 'user_' . $parent_id );

			$activation_token = wp_hash( $parent_id . $data['form']['firstName'] . $data['form']['lastName'] . $data['form']['email'] );
			$url              = get_site_url() . '/complete/parent/' . '?id=' . $parent_id . '&token=' . $activation_token;
			$message          = file_get_contents( TEMPLATE_DIR . '/inc/templates/emails/complete-parent-information.php' );
			$message          = str_replace( [ '{{url}}', '{{coach}}' ], [
				$url,
				$user->first_name . ' ' . $user->last_name
			], $message );

			wp_mail( $data['form']['email'], 'Activate your account on PlayerKey ID', $message, [
				'content-type: text/html',
			] );

			add_user_meta( $parent_id, 'activation_token', $activation_token, true );
			add_option( $activation_token, time() );

			wp_send_json_success( self::get_parents_list_by_coach( $user->ID ) );
		}

		wp_send_json_error( $parent_id->get_error_message() );
	}

	/**
	 * @param WP_REST_Request $request
	 *
	 * @return void
	 * @throws JsonException
	 */
	public function edit_parent( WP_REST_Request $request ): void {
		$data = json_decode( $request->get_body(), true, 512, JSON_THROW_ON_ERROR );
		$user = wp_get_current_user();

		if ( $user === null ) {
			wp_send_json_error( 'User not found. You are not authorized to perform this action.' );
		}

		$parent_id = wp_update_user( [
			'ID'         => $data['parentId'],
			'user_email' => $data['form']['email'],
			'first_name' => $data['form']['firstName'],
			'last_name'  => $data['form']['lastName'],
		] );

		if ( ! is_wp_error( $parent_id ) ) {
			update_field( 'social_link', $data['form']['socialLink'], 'user_' . $parent_id );

			wp_send_json_success( self::get_parents_list_by_coach( $user->ID ) );
		}

		wp_send_json_error( $parent_id->get_error_message() );
	}

	/**
	 * @return void
	 */
	public function get_parents(): void {
		$user = wp_get_current_user();

		if ( $user === null ) {
			wp_send_json_error( 'User not found. You are not authorized to perform this action.' );
		}

		wp_send_json_success( self::get_parents_list_by_coach( $user->ID ) );
	}

	/**
	 * @param int $coach_id
	 *
	 * @return array
	 */
	public static function get_parents_list_by_coach( int $coach_id ): array {
		$parents_data = [];
		$parents      = get_users( [
			'role'       => 'parent',
			'orderby'    => 'display_name',
			'meta_query' => [
				[
					'key'     => 'coaches',
					'value'   => $coach_id,
					'compare' => 'LIKE'
				]
			],
		] );

		if ( ! empty( $parents ) ) {
			foreach ( $parents as $parent ) {
				if ( $parent->ID !== $coach_id ) {
					$is_activated = get_field( 'is_activated', 'user_' . $parent->ID );
					if ( $is_activated === 'no' ) {
						$activation_token = get_user_meta( $parent->ID, 'activation_token', true );

						if ( ! empty( $activation_token ) && time() - (int) get_option( $activation_token, true ) > self::DAY_IN_SECONDS ) {
							$is_activated = 'expired';
							update_field( 'is_activated', $is_activated, 'user_' . $parent->ID );
							delete_user_meta( $parent->ID, 'activation_token' );
							delete_option( $activation_token );
						}
					}

					$athletes = get_posts( [
						'numberposts' => - 1,
						'post_type'   => 'athlete',
						'meta_query'  => [
							'relation' => 'AND',
							[
								'key'   => 'coach',
								'value' => $coach_id,
							],
							[
								'key'   => 'parent',
								'value' => $parent->ID,
							]
						]
					] );

					$parents_data[] = [
						'ID'           => $parent->ID,
						'first_name'   => $parent->first_name,
						'last_name'    => $parent->last_name,
						'email'        => $parent->user_email,
						'login'        => $parent->user_login,
						'is_activated' => $is_activated,
						'athletes'     => count( $athletes ),
						'social_link'  => get_field( 'social_link', 'user_' . $parent->ID ),
					];
				}
			}
		}

		return $parents_data;
	}

	/**
	 * @param WP_REST_Request $request
	 *
	 * @return void
	 * @throws JsonException
	 */
	public function remove_parent( WP_REST_Request $request ): void {
		$data      = json_decode( $request->get_body(), true, 512, JSON_THROW_ON_ERROR );
		$user      = wp_get_current_user();
		$parent_id = $data['parentId'];

		if ( $user === null ) {
			wp_send_json_error( 'User not found. You are not authorized to perform this action.' );
		}

		$parent_coaches = get_field( 'coaches', 'user_' . $parent_id );
		$parent_coaches = array_map( static function ( $user ) {
			return $user->ID;
		}, $parent_coaches );

		if ( in_array( $user->ID, $parent_coaches, true ) ) {

			$athletes = get_posts( [
				'numberposts' => - 1,
				'post_type'   => 'athlete',
				'meta_query'  => [
					'relation' => 'AND',
					[
						'key'   => 'coach',
						'value' => $user->ID,
					],
					[
						'key'   => 'parent',
						'value' => $parent_id,
					]
				]
			] );

			if ( ! empty( $athletes ) ) {
				foreach ( $athletes as $athlete ) {
					wp_delete_post( $athlete->ID );
				}
			}

			$key = array_search( $user->ID, $parent_coaches, true );
			unset( $parent_coaches[ $key ] );
			update_field( 'coaches', $parent_coaches, 'user_' . $parent_id );

			wp_send_json_success();
		}

		wp_send_json_error();
	}
}
