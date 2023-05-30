<?php

namespace api;

use Couchbase\User;
use WP_REST_Controller;
use WP_REST_Request;

class PKI_REST_Entities_Controller extends WP_REST_Controller {
	function __construct() {
		$this->namespace = 'pki/v1';
		$this->rest_base = 'entities';
	}

	public function register_routes(): void {

		register_rest_route( $this->namespace, "/$this->rest_base/teams", [
			[
				'methods'  => 'POST',
				'callback' => [ $this, 'get_teams' ],

			],
		] );

		register_rest_route( $this->namespace, "/$this->rest_base/parents", [
			[
				'methods'  => 'POST',
				'callback' => [ $this, 'get_parents' ],

			],
		] );

		register_rest_route( $this->namespace, "/$this->rest_base/create-team", [
			[
				'methods'  => 'POST',
				'callback' => [ $this, 'create_team' ],

			],
		] );

		register_rest_route( $this->namespace, "/$this->rest_base/create-parent", [
			[
				'methods'  => 'POST',
				'callback' => [ $this, 'create_parent' ],

			],
		] );

		register_rest_route( $this->namespace, "/$this->rest_base/remove-team", [
			[
				'methods'  => 'POST',
				'callback' => [ $this, 'remove_team' ],

			],
		] );

		register_rest_route( $this->namespace, "/$this->rest_base/remove-parent", [
			[
				'methods'  => 'POST',
				'callback' => [ $this, 'remove_parent' ],

			],
		] );

		register_rest_route( $this->namespace, "/$this->rest_base/edit-team", [
			[
				'methods'  => 'POST',
				'callback' => [ $this, 'edit_team' ],

			],
		] );

		register_rest_route( $this->namespace, "/$this->rest_base/edit-parent", [
			[
				'methods'  => 'POST',
				'callback' => [ $this, 'edit_parent' ],

			],
		] );
	}

	function edit_parent( WP_REST_Request $request ) {
		$data    = json_decode( $request->get_body(), true );
		$user_id = get_option( $data['token'] );

		if ( ! empty( $user_id ) ) {
			$user = get_user_by( 'ID', $user_id );

			if ( ! is_wp_error( $user ) && $user !== false && user_can( $user_id, 'create_team' ) ) {

				$parent_id = wp_update_user( [
					'ID'         => $data['parentId'],
					'user_login' => $data['form']['login'],
					'user_email' => $data['form']['email'],
					'first_name' => $data['form']['firstName'],
					'last_name'  => $data['form']['lastName'],
				] );

				if ( ! is_wp_error( $parent_id ) ) {
					$parents = get_users( [
						'role'       => 'parent',
						'meta_query' => [
							[
								'key'   => 'coach',
								'value' => $user_id,
							]
						],
					] );

					if ( ! empty( $parents ) ) {
						$parents_data = [];
						foreach ( $parents as $parent ) {
							$parents_data[] = [
								'ID'         => $parent->ID,
								'first_name' => $parent->first_name,
								'last_name'  => $parent->last_name,
								'email'      => $parent->user_email,
								'login'      => $parent->user_login,
							];
						}

						wp_send_json_success( $parents_data );
					}
				}

				wp_send_json_error( $parent_id->get_error_message() );
			}
		}
	}

	function edit_team( WP_REST_Request $request ) {
		$data    = json_decode( $request->get_body(), true );
		$user_id = get_option( $data['token'] );

		if ( ! empty( $user_id ) ) {
			$user = get_user_by( 'ID', $user_id );

			if ( ! is_wp_error( $user ) && $user !== false && user_can( $user_id, 'create_team' ) ) {
				if ( get_field( 'coach', $data['teamId'] ) == $user_id ) {
					$team_id = wp_update_post( wp_slash( [
						'ID'         => $data['teamId'],
						'post_title' => $data['form']['team']
					] ) );

					if ( ! is_wp_error( $team_id ) ) {
						$teams = get_posts( [
							'numberposts' => - 1,
							'post_type'   => 'team',
							'meta_query'  => [
								[
									'key'   => 'coach',
									'value' => $user_id,
								]
							],
						] );
						if ( ! empty( $teams ) ) {
							wp_send_json_success( $teams );
						}
					}
				}
			}
		}

		wp_send_json_error();
	}

	function remove_team( WP_REST_Request $request ) {
		$data    = json_decode( $request->get_body(), true );
		$user_id = get_option( $data['token'] );

		if ( ! empty( $user_id ) ) {
			$user = get_user_by( 'ID', $user_id );

			if ( ! is_wp_error( $user ) && $user !== false && user_can( $user_id, 'create_team' ) ) {

				if ( get_field( 'coach', $data['teamId'] ) == $user_id ) {
					wp_delete_post( $data['teamId'] );
					wp_send_json_success();
				}
			}
		}
		wp_send_json_error();
	}

	function remove_parent( WP_REST_Request $request ) {
		$data    = json_decode( $request->get_body(), true );
		$user_id = get_option( $data['token'] );

		if ( ! empty( $user_id ) ) {
			$user = get_user_by( 'ID', $user_id );

			if ( ! is_wp_error( $user ) && $user !== false && user_can( $user_id, 'create_team' ) ) {

				if ( get_field( 'coach', 'user_' . $data['parentId'] ) == $user_id ) {
					require_once( ABSPATH . 'wp-admin/includes/user.php' );
					wp_delete_user( $data['parentId'] );
					wp_send_json_success();
				}
			}
		}
		wp_send_json_error();
	}

	function create_parent( WP_REST_Request $request ) {
		$data    = json_decode( $request->get_body(), true );
		$user_id = get_option( $data['token'] );

		if ( ! empty( $user_id ) ) {
			$user = get_user_by( 'ID', $user_id );

			if ( ! is_wp_error( $user ) && $user !== false && user_can( $user_id, 'create_team' ) ) {

				$parent_id = wp_insert_user( [
					'user_login' => $data['form']['login'],
					'user_pass'  => wp_generate_password(),
					'user_email' => $data['form']['email'],
					'first_name' => $data['form']['firstName'],
					'last_name'  => $data['form']['lastName'],
					'role'       => 'parent',
				] );

				if ( ! is_wp_error( $parent_id ) ) {
					update_field( 'coach', $user_id, 'user_' . $parent_id );
					$parents = get_users( [
						'role'       => 'parent',
						'meta_query' => [
							[
								'key'   => 'coach',
								'value' => $user_id,
							]
						],
					] );

					if ( ! empty( $parents ) ) {
						$parents_data = [];
						foreach ( $parents as $parent ) {
							$parents_data[] = [
								'ID'         => $parent->ID,
								'first_name' => $parent->first_name,
								'last_name'  => $parent->last_name,
								'email'      => $parent->user_email,
								'login'      => $parent->user_login,
							];
						}

						wp_send_json_success( $parents_data );
					}
				}

				wp_send_json_error( $parent_id->get_error_message() );
			}
		}
	}

	function create_team( WP_REST_Request $request ) {
		$data    = json_decode( $request->get_body(), true );
		$user_id = get_option( $data['token'] );

		if ( ! empty( $user_id ) ) {
			$user = get_user_by( 'ID', $user_id );

			if ( ! is_wp_error( $user ) && $user !== false && user_can( $user_id, 'create_team' ) ) {
				$team_data = [
					'post_title'  => sanitize_text_field( $data['form']['team'] ),
					'post_status' => 'publish',
					'post_author' => $user_id,
					'post_type'   => 'team'
				];

				$team_id = wp_insert_post( $team_data );

				if ( ! is_wp_error( $team_id ) ) {
					update_field( 'coach', $user_id, $team_id );
					$teams = get_posts( [
						'numberposts' => - 1,
						'post_type'   => 'team',
						'meta_query'  => [
							[
								'key'   => 'coach',
								'value' => $user_id,
							]
						],
					] );
					if ( ! empty( $teams ) ) {
						wp_send_json_success( $teams );
					}
				}
			}
		}
	}

	function get_parents( WP_REST_Request $request ) {
		$data    = json_decode( $request->get_body(), true );
		$user_id = get_option( $data['token'] );

		if ( ! empty( $user_id ) ) {
			$user = get_user_by( 'ID', $user_id );

			if ( ! is_wp_error( $user ) && $user !== false && user_can( $user_id, 'create_team' ) ) {
				$parents = get_users( [
					'role'       => 'parent',
					'meta_query' => [
						[
							'key'   => 'coach',
							'value' => $user_id,
						]
					],
				] );

				if ( ! empty( $parents ) ) {
					$parents_data = [];
					foreach ( $parents as $parent ) {
						$parents_data[] = [
							'ID'         => $parent->ID,
							'first_name' => $parent->first_name,
							'last_name'  => $parent->last_name,
							'email'      => $parent->user_email,
							'login'      => $parent->user_login,
						];
					}

					wp_send_json_success( $parents_data );
				}

				wp_send_json_error( 'Teams not found' );
			}

			wp_send_json_error( 'There are not enough permissions to perform this action' );
		}
	}

	function get_teams( WP_REST_Request $request ) {
		$data    = json_decode( $request->get_body(), true );
		$user_id = get_option( $data['token'] );

		if ( ! empty( $user_id ) ) {
			$user = get_user_by( 'ID', $user_id );

			if ( ! is_wp_error( $user ) && $user !== false && user_can( $user_id, 'create_team' ) ) {
				$teams = get_posts( [
					'numberposts' => - 1,
					'post_type'   => 'team',
					'meta_query'  => [
						[
							'key'   => 'coach',
							'value' => $user_id,
						]
					],
				] );
				if ( ! empty( $teams ) ) {
					wp_send_json_success( $teams );
				}

				wp_send_json_error( 'Teams not found' );
			}

			wp_send_json_error( 'There are not enough permissions to perform this action' );
		}
	}
}
