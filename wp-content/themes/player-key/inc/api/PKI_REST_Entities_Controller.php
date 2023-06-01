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

		register_rest_route( $this->namespace, "/$this->rest_base/athletes", [
			[
				'methods'  => 'POST',
				'callback' => [ $this, 'get_athletes' ],

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

		register_rest_route( $this->namespace, "/$this->rest_base/create-athlete", [
			[
				'methods'  => 'POST',
				'callback' => [ $this, 'create_athlete' ],

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

		register_rest_route( $this->namespace, "/$this->rest_base/remove-athlete", [
			[
				'methods'  => 'POST',
				'callback' => [ $this, 'remove_athlete' ],

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

		register_rest_route( $this->namespace, "/$this->rest_base/edit-athlete", [
			[
				'methods'  => 'POST',
				'callback' => [ $this, 'edit_athlete' ],

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

	function edit_athlete( WP_REST_Request $request ) {
		$data    = json_decode( $request->get_body(), true );
		$user_id = get_option( $data['token'] );

		if ( ! empty( $user_id ) ) {
			$user = get_user_by( 'ID', $user_id );

			if ( ! is_wp_error( $user ) && $user !== false && user_can( $user_id, 'create_athlete' ) ) {
				if ( get_field( 'coach', $data['athleteId'] )->ID == $user_id ) {
					$athlete_id = wp_update_post( wp_slash( [
						'ID'         => $data['athleteId'],
						'post_title' => $data['form']['firstName'] . ' ' . $data['form']['lastName'],
					] ) );

					if ( ! is_wp_error( $athlete_id ) ) {
						update_field( 'first_name', $data['form']['firstName'], $athlete_id );
						update_field( 'last_name', $data['form']['lastName'], $athlete_id );
						update_field( 'birthday', $data['form']['birthday'], $athlete_id );
						update_field( 'parent', $data['form']['parent']['code'], $athlete_id );
						update_field( 'team', $data['form']['team']['code'], $athlete_id );

						$athletes = get_posts( [
							'numberposts' => - 1,
							'post_type'   => 'athlete',
							'meta_query'  => [
								[
									'key'   => 'coach',
									'value' => $user_id,
								]
							],
						] );
						if ( ! empty( $athletes ) ) {
							$athletes_data = [];
							foreach ( $athletes as $athlete ) {
								$parent          = get_field( 'parent', $athlete->ID );
								$athletes_data[] = [
									'ID'              => $athlete->ID,
									'first_name'      => get_field( 'first_name', $athlete->ID ),
									'last_name'       => get_field( 'last_name', $athlete->ID ),
									'birthday'        => get_field( 'birthday', $athlete->ID ),
									'team'            => get_field( 'team', $athlete->ID ),
									'parent'          => $parent,
									'parent_name'     => $parent->first_name . ' ' . $parent->last_name,
									'parent_id'       => $parent->ID,
									'verified_status' => '',
								];
							}


							wp_send_json_success( $athletes_data );
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

	function remove_athlete( WP_REST_Request $request ) {
		$data    = json_decode( $request->get_body(), true );
		$user_id = get_option( $data['token'] );

		if ( ! empty( $user_id ) ) {
			$user = get_user_by( 'ID', $user_id );
			if ( ! is_wp_error( $user ) && $user !== false && user_can( $user_id, 'create_athlete' ) ) {

				if ( get_field( 'coach', $data['athleteId'] )->ID == $user_id ) {
					wp_delete_post( $data['athleteId']  );
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
					update_field( 'is_activated', 'no', 'user_' . $parent_id );

					$token = wp_hash( $parent_id . $data['form']['firstName'] . $data['form']['lastName'] . $data['form']['email'] );
					add_user_meta( $parent_id, 'activation_token', $token, true );

					$url     = get_site_url() . '/activation/parent/' . '?id=' . $parent_id . '&token=' . $token;
					$message = file_get_contents( TEMPLATE_DIR . '/inc/templates/emails/parent-activation-email.php' );
					$message = str_replace( array( '{{url}}', '{{coach}}' ), array(
						$url,
						$user->first_name . ' ' . $user->last_name
					), $message );

					$is_mail_sent = wp_mail( $data['form']['email'], 'Activate your account on PlayerKey ID', $message, [
						'content-type: text/html',
					] );

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

	function create_athlete( WP_REST_Request $request ) {
		$data    = json_decode( $request->get_body(), true );
		$user_id = get_option( $data['token'] );

		if ( ! empty( $user_id ) ) {
			$user = get_user_by( 'ID', $user_id );

			if ( ! is_wp_error( $user ) && $user !== false && user_can( $user_id, 'create_athlete' ) ) {
				$athlete_data = [
					'post_title'  => sanitize_text_field( $data['form']['firstName'] . ' ' . $data['form']['lastName'] ),
					'post_status' => 'publish',
					'post_author' => $user_id,
					'post_type'   => 'athlete'
				];

				$athlete_id = wp_insert_post( $athlete_data );

				if ( ! is_wp_error( $athlete_id ) ) {
					update_field( 'first_name', $data['form']['firstName'], $athlete_id );
					update_field( 'last_name', $data['form']['lastName'], $athlete_id );
					update_field( 'birthday', $data['form']['birthday'], $athlete_id );
					update_field( 'coach', $user_id, $athlete_id );
					update_field( 'parent', $data['form']['parent']['code'], $athlete_id );
					update_field( 'team', $data['form']['team']['code'], $athlete_id );

					$athletes = get_posts( [
						'numberposts' => - 1,
						'post_type'   => 'athlete',
						'meta_query'  => [
							[
								'key'   => 'coach',
								'value' => $user_id,
							]
						],
					] );
					if ( ! empty( $athletes ) ) {
						$athletes_data = [];
						foreach ( $athletes as $athlete ) {
							$parent          = get_field( 'parent', $athlete->ID );
							$athletes_data[] = [
								'ID'     => $athlete->ID,
								'name'   => get_field( 'first_name', $athlete->ID ) . ' ' . get_field( 'last_name', $athlete->ID ),
								'team'   => get_field( 'team', $athlete->ID )->post_title,
								'parent' => $parent->first_name . ' ' . $parent->last_name,
							];
						}

						wp_send_json_success( $athletes_data );
					}
				}
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
							'ID'           => $parent->ID,
							'first_name'   => $parent->first_name,
							'last_name'    => $parent->last_name,
							'email'        => $parent->user_email,
							'login'        => $parent->user_login,
							'is_activated' => get_field( 'is_activated', 'user_' . $parent->ID ),
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

	function get_athletes( WP_REST_Request $request ) {
		$data    = json_decode( $request->get_body(), true );
		$user_id = get_option( $data['token'] );

		if ( ! empty( $user_id ) ) {
			$user = get_user_by( 'ID', $user_id );

			if ( ! is_wp_error( $user ) && $user !== false && user_can( $user_id, 'create_team' ) ) {
				$athletes = get_posts( [
					'numberposts' => - 1,
					'post_type'   => 'athlete',
					'meta_query'  => [
						[
							'key'   => 'coach',
							'value' => $user_id,
						]
					],
				] );
				if ( ! empty( $athletes ) ) {
					$athletes_data = [];

					foreach ( $athletes as $athlete ) {
						$parent          = get_field( 'parent', $athlete->ID );
						$athletes_data[] = [
							'ID'              => $athlete->ID,
							'first_name'      => get_field( 'first_name', $athlete->ID ),
							'last_name'       => get_field( 'last_name', $athlete->ID ),
							'birthday'        => get_field( 'birthday', $athlete->ID ),
							'team'            => get_field( 'team', $athlete->ID ),
							'parent'          => $parent,
							'parent_name'     => $parent->first_name . ' ' . $parent->last_name,
							'parent_id'       => $parent->ID,
							'verified_status' => '',
						];
					}


					wp_send_json_success( $athletes_data );
				}

				wp_send_json_error( 'Athletes not found' );
			}

			wp_send_json_error( 'There are not enough permissions to perform this action' );
		}
	}
}
