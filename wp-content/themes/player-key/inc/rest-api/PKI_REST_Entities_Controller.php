<?php

namespace api;

use WP_REST_Controller;
use WP_REST_Request;

class PKI_REST_Entities_Controller extends WP_REST_Controller {
	const WEEK_IN_SECONDS = 604800;
	const DAY_IN_SECONDS = 86400;

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

		register_rest_route( $this->namespace, "/$this->rest_base/get-athlete", [
			[
				'methods'  => 'POST',
				'callback' => [ $this, 'get_athlete' ],

			],
		] );

		register_rest_route( $this->namespace, "/$this->rest_base/get-role-statistics", [
			[
				'methods'  => 'POST',
				'callback' => [ $this, 'get_role_statistics' ],

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
		$data     = json_decode( $request->get_body(), true );
		$coach_id = get_option( $data['token'] );

		if ( ! empty( $coach_id ) ) {
			$coach = get_user_by( 'ID', $coach_id );

			if ( ! is_wp_error( $coach ) && $coach !== false && user_can( $coach_id, 'create_team' ) ) {

				$parent_id = wp_update_user( [
					'ID'         => $data['parentId'],
					'user_login' => $data['form']['login'],
					'user_email' => $data['form']['email'],
					'first_name' => $data['form']['firstName'],
					'last_name'  => $data['form']['lastName'],
				] );

				if ( ! is_wp_error( $parent_id ) ) {
					$parents = $this->get_parents_list( $coach_id );

					if ( ! empty( $parents ) ) {
						wp_send_json_success( $parents );
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
				if ( get_field( 'coach', $data['teamId'] )->ID == $user_id ) {
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
		$data    = $request->get_params();
		$user_id = get_option( $data['token'] );

		if ( ! empty( $user_id ) ) {
			$user = get_user_by( 'ID', $user_id );

			if ( ! is_wp_error( $user ) && $user !== false && user_can( $user_id, 'create_athlete' ) ) {
				$coach  = get_field( 'coach', $data['athleteId'] );
				$parent = get_field( 'parent', $data['athleteId'] );
				if ( $coach->ID == $user_id || $parent->ID == $user_id ) {

					$athlete_id = wp_update_post( wp_slash( [
						'ID'         => $data['athleteId'],
						'post_title' => $data['firstName'] . ' ' . $data['lastName'],
					] ) );

					if ( ! is_wp_error( $athlete_id ) ) {
						update_field( 'first_name', $data['firstName'], $athlete_id );
						update_field( 'last_name', $data['lastName'], $athlete_id );
						update_field( 'birthday', $data['birthday'], $athlete_id );
						update_field( 'parent', $data['parent'], $athlete_id );
						update_field( 'team', $data['team'], $athlete_id );
						update_field( 'status', 'pending', $athlete_id );

						require_once( ABSPATH . 'wp-admin/includes/image.php' );
						require_once( ABSPATH . 'wp-admin/includes/file.php' );
						require_once( ABSPATH . 'wp-admin/includes/media.php' );

						$card_attachment_id = media_handle_upload( 'card', $athlete_id );
						if ( ! is_wp_error( $card_attachment_id ) ) {
							update_field( 'card', $card_attachment_id, $athlete_id );
							update_post_meta( $athlete_id, 'card_filename', $data['cardFileName'] );
						}

						$certificate_attachment_id = media_handle_upload( 'certificate', $athlete_id );
						if ( ! is_wp_error( $certificate_attachment_id ) ) {
							update_field( 'certificate', $certificate_attachment_id, $athlete_id );
							update_post_meta( $athlete_id, 'certificate_filename', $data['certificateFileName'] );
						}

						if ( $data['currentRole'] === 'parent' ) {
							$team_id = $data['team'];
							$coach   = get_field( 'coach', $team_id );
							update_field( 'coach', $coach, $athlete_id );
						}

						$athletes = $this->get_athletes_list( $data['currentRole'], $user_id );

						if ( ! empty( $athletes ) ) {
							wp_send_json_success( $athletes );
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

				if ( get_field( 'coach', $data['teamId'] )->ID == $user_id ) {

					$athletes = $this->get_athletes_list( 'coach', $user_id );
					if ( count( $athletes ) === 0 ) {
						wp_delete_post( $data['teamId'] );
						wp_send_json_success();
					} else {
						wp_send_json_error( 'You cannot delete a team while it has athletes.' );
					}
				}
			}
		}
		wp_send_json_error();
	}

	function remove_parent( WP_REST_Request $request ) {
		$data      = json_decode( $request->get_body(), true );
		$coach_id  = get_option( $data['token'] );
		$parent_id = $data['parentId'];

		if ( ! empty( $coach_id ) ) {
			$coach = get_user_by( 'ID', $coach_id );

			if ( ! is_wp_error( $coach ) && $coach !== false && user_can( $coach_id, 'create_team' ) ) {

				$parent_coaches = get_field( 'coaches', 'user_' . $parent_id );
				$parent_coaches = array_map( function ( $coach ) {
					return $coach->ID;
				}, $parent_coaches );

				if ( in_array( $coach_id, $parent_coaches ) ) {

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
								'value' => $parent_id,
							]
						]
					] );

					if ( ! empty( $athletes ) ) {
						foreach ( $athletes as $athlete ) {
							wp_delete_post( $athlete->ID );
						}
					}

					$key = array_search( $coach_id, $parent_coaches );
					unset( $parent_coaches[ $key ] );
					update_field( 'coaches', $parent_coaches, 'user_' . $parent_id );
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

				$coach  = get_field( 'coach', $data['athleteId'] );
				$parent = get_field( 'parent', $data['athleteId'] );
				if ( $coach->ID == $user_id || $parent->ID == $user_id ) {
					$attachments = get_attached_media( '', $data['athleteId'] );
					if ( ! empty( $attachments ) ) {
						foreach ( $attachments as $attachment ) {
							wp_delete_attachment( $attachment->ID, true );
						}
					}
					wp_delete_post( $data['athleteId'] );
					wp_send_json_success();
				}
			}
		}
		wp_send_json_error();
	}

	function create_parent( WP_REST_Request $request ) {
		$data     = json_decode( $request->get_body(), true );
		$coach_id = get_option( $data['token'] );

		if ( ! empty( $coach_id ) ) {
			$coach = get_user_by( 'ID', $coach_id );

			if ( ! is_wp_error( $coach ) && $coach !== false && user_can( $coach_id, 'create_team' ) ) {

				$parent_id = wp_insert_user( [
					'user_login' => $data['form']['login'],
					'user_pass'  => wp_generate_password(),
					'user_email' => $data['form']['email'],
					'first_name' => $data['form']['firstName'],
					'last_name'  => $data['form']['lastName'],
					'role'       => 'parent',
				] );

				if ( ! is_wp_error( $parent_id ) ) {
					add_user_meta( $parent_id, 'initial_coach', $coach_id );
					update_field( 'coaches', [ $coach_id ], 'user_' . $parent_id );
					update_field( 'is_activated', 'no', 'user_' . $parent_id );

					$activation_token = wp_hash( $parent_id . $data['form']['firstName'] . $data['form']['lastName'] . $data['form']['email'] );
					$url              = get_site_url() . '/complete/parent/' . '?id=' . $parent_id . '&token=' . $activation_token;
					$message          = file_get_contents( TEMPLATE_DIR . '/inc/templates/emails/complete-parent-information.php' );
					$message          = str_replace( [ '{{url}}', '{{coach}}' ], [
						$url,
						$coach->first_name . ' ' . $coach->last_name
					], $message );

					wp_mail( $data['form']['email'], 'Activate your account on PlayerKey ID', $message, [
						'content-type: text/html',
					] );

					add_user_meta( $parent_id, 'activation_token', $activation_token, true );
					add_option( $activation_token, time() );

					$parents = $this->get_parents_list( $coach_id );

					if ( ! empty( $parents ) ) {
						wp_send_json_success( $parents );
					}
				}

				wp_send_json_error( $parent_id->get_error_message() );
			}
		}
	}

	function create_athlete( WP_REST_Request $request ) {
		$data    = $request->get_params();
		$user_id = get_option( $data['token'] );

		if ( ! empty( $user_id ) ) {
			$user = get_user_by( 'ID', $user_id );

			if ( ! is_wp_error( $user ) && $user !== false && user_can( $user_id, 'create_athlete' ) ) {
				$athlete_data = [
					'post_title'  => sanitize_text_field( $data['firstName'] . ' ' . $data['lastName'] ),
					'post_status' => 'publish',
					'post_author' => $user_id,
					'post_type'   => 'athlete'
				];

				$athlete_id = wp_insert_post( $athlete_data );

				if ( ! is_wp_error( $athlete_id ) ) {
					update_field( 'first_name', $data['firstName'], $athlete_id );
					update_field( 'last_name', $data['lastName'], $athlete_id );
					update_field( 'birthday', $data['birthday'], $athlete_id );
					update_field( 'parent', $data['parent'], $athlete_id );
					update_field( 'team', $data['team'], $athlete_id );

					// If current Role COACH
					if ( $data['currentRole'] === 'coach' ) {
						update_field( 'coach', $user_id, $athlete_id );
						update_field( 'status', 'incomplete', $athlete_id );

						$athlete_token = wp_hash( $athlete_id . $data['firstName'] . $data['lastName'] . time() );
						add_option( $athlete_token, $athlete_id );

						$parent  = get_user_by( 'ID', $data['parent'] );
						$url     = get_site_url() . '/complete/athlete/' . '?id=' . $parent->ID . '&token=' . $athlete_token;
						$message = file_get_contents( TEMPLATE_DIR . '/inc/templates/emails/complete-athlete-information.php' );
						$message = str_replace( [
							'{{url}}',
							'{{coach}}',
							'{{athlete}}',
						], [
							$url,
							$user->first_name . ' ' . $user->last_name,
							$data['firstName'] . ' ' . $data['lastName']
						], $message );

						wp_mail( $parent->user_email, 'Complete Athlete data on PlayerKey ID', $message, [
							'content-type: text/html',
						] );

						// If current Role PARENT
					} else if ( $data['currentRole'] === 'parent' ) {
						$team_id = $data['team'];
						// Team coach
						$coach = get_field( 'coach', $team_id );

						//Parent coaches (can be multiple)
						$parent_coaches   = get_field( 'coaches', 'user_' . $user->ID, true );
						$parent_coaches[] = $coach;

						update_field( 'coaches', $parent_coaches, 'user_' . $user->ID );
						update_field( 'coach', $coach, $athlete_id );
						update_field( 'status', 'pending', $athlete_id );
						update_field( 'payment_status', 'unpaid', $athlete_id );

						require_once( ABSPATH . 'wp-admin/includes/image.php' );
						require_once( ABSPATH . 'wp-admin/includes/file.php' );
						require_once( ABSPATH . 'wp-admin/includes/media.php' );

						$card_attachment_id = media_handle_upload( 'card', $athlete_id );
						if ( ! is_wp_error( $card_attachment_id ) ) {
							update_field( 'card', $card_attachment_id, $athlete_id );
							update_post_meta( $athlete_id, 'card_filename', $data['cardFileName'] );
						}

						$certificate_attachment_id = media_handle_upload( 'certificate', $athlete_id );
						if ( ! is_wp_error( $certificate_attachment_id ) ) {
							update_field( 'certificate', $certificate_attachment_id, $athlete_id );
							update_post_meta( $athlete_id, 'certificate_filename', $data['certificateFileName'] );
						}
					}

					$athletes = $this->get_athletes_list( $data['currentRole'], $user_id );
					if ( ! empty( $athletes ) ) {
						wp_send_json_success( $athletes );
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
		$data     = json_decode( $request->get_body(), true );
		$coach_id = get_option( $data['token'] );

		if ( ! empty( $coach_id ) ) {
			$coach = get_user_by( 'ID', $coach_id );

			if ( ! is_wp_error( $coach ) && $coach !== false && user_can( $coach_id, 'create_team' ) ) {

				$parents = $this->get_parents_list( $coach_id );

				if ( ! empty( $parents ) ) {
					wp_send_json_success( $parents );
				}

				wp_send_json_error( 'Parents not found' );
			}

			wp_send_json_error( 'There are not enough permissions to perform this action' );
		}
	}

	/**
	 * @param int $coach_id
	 *
	 * @return array
	 */
	private function get_parents_list( int $coach_id ): array {
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
				$is_activated = get_field( 'is_activated', 'user_' . $parent->ID );
				if ( $is_activated === 'no' ) {
					$activation_token = get_user_meta( $parent->ID, 'activation_token', true );

					if ( ! empty( $activation_token ) && time() - (int) get_option( $activation_token, true ) > self::DAY_IN_SECONDS ) {
						$is_activated = 'expired';
						update_field( 'is_activated', $is_activated, 'user_' . $parent->ID );
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
				];
			}
		}

		return $parents_data;
	}

	function get_teams( WP_REST_Request $request ) {
		$data    = json_decode( $request->get_body(), true );
		$user_id = get_option( $data['token'] );

		if ( ! empty( $user_id ) ) {
			$user = get_user_by( 'ID', $user_id );

			if ( $user !== false && ! is_wp_error( $user ) && ( user_can( $user_id, 'create_team' ) || user_can( $user_id, 'create_athlete' ) ) ) {
				$args = [
					'numberposts' => - 1,
					'post_type'   => 'team',
				];

				if ( isset( $data['currentRole'] ) && $data['currentRole'] === 'coach' ) {
					$args['meta_query'] = [
						[
							'key'   => 'coach',
							'value' => $user_id,
						]
					];
				}

				$teams = get_posts( $args );
				if ( ! empty( $teams ) ) {
					$teams_data = [];
					foreach ( $teams as $team ) {
						$athletes     = $this->get_athletes_list( 'coach', $user_id );
						$teams_data[] = [
							'ID'         => $team->ID,
							'post_title' => $team->post_title,
							'athletes'   => count( $athletes ),
						];
					}
					wp_send_json_success( $teams_data );
				}

				wp_send_json_error( 'Teams not found' );
			}

			wp_send_json_error( 'There are not enough permissions to perform this action' );
		}
	}

	/**
	 * @param string $role
	 * @param int $id
	 *
	 * @return array
	 */
	private function get_athletes_list( string $role, int $id ): array {
		$athletes_data = [];
		$athletes      = get_posts( [
			'numberposts' => - 1,
			'post_type'   => 'athlete',
			'meta_query'  => [
				[
					'key'   => $role,
					'value' => $id,
				]
			],
		] );

		if ( ! empty( $athletes ) ) {

			foreach ( $athletes as $athlete ) {
				$parent          = get_field( 'parent', $athlete->ID );
				$athletes_data[] = [
					'ID'                    => $athlete->ID,
					'first_name'            => get_field( 'first_name', $athlete->ID ),
					'last_name'             => get_field( 'last_name', $athlete->ID ),
					'birthday'              => get_field( 'birthday', $athlete->ID ),
					'team'                  => get_field( 'team', $athlete->ID ),
					'parent'                => $parent,
					'parent_name'           => $parent->first_name . ' ' . $parent->last_name,
					'parent_id'             => $parent->ID,
					'status'                => get_field( 'status', $athlete->ID ),
					'payment_status'        => get_field( 'payment_status', $athlete->ID ),
					'card_file_name'        => get_post_meta( $athlete->ID, 'card_filename', true ),
					'certificate_file_name' => get_post_meta( $athlete->ID, 'certificate_filename', true ),
					'photo_file_name'       => get_post_meta( $athlete->ID, 'photo_filename', true ),
				];
			}
		}

		return $athletes_data;
	}

	function get_athletes( WP_REST_Request $request ) {
		$data    = json_decode( $request->get_body(), true );
		$user_id = get_option( $data['token'] );

		if ( ! empty( $user_id ) ) {
			$user = get_user_by( 'ID', $user_id );

			if ( ! is_wp_error( $user ) && $user !== false && ( user_can( $user_id, 'create_team' ) || user_can( $user_id, 'create_athlete' ) ) ) {

				$athletes = $this->get_athletes_list( $user->roles[0], $user_id );
				if ( ! empty( $athletes ) ) {
					wp_send_json_success( $athletes );
				}

				wp_send_json_error( 'Athletes not found' );
			}

			wp_send_json_error( 'There are not enough permissions to perform this action' );
		}
	}

	function get_athlete( WP_REST_Request $request ) {
		$data    = json_decode( $request->get_body(), true );
		$user_id = get_option( $data['token'] );

		if ( ! empty( $user_id ) ) {
			$user = get_user_by( 'ID', $user_id );

			if ( ! is_wp_error( $user ) && $user !== false && user_can( $user_id, 'create_athlete' ) ) {
				$athlete_id = get_option( $data['athlete_token'] );
				$athlete    = get_post( $athlete_id );

				if ( $athlete && ! is_wp_error( $athlete ) ) {
					$parent       = get_field( 'parent', $athlete->ID );
					$athlete_data = [
						'ID'                    => $athlete->ID,
						'first_name'            => get_field( 'first_name', $athlete->ID ),
						'last_name'             => get_field( 'last_name', $athlete->ID ),
						'birthday'              => get_field( 'birthday', $athlete->ID ),
						'team'                  => get_field( 'team', $athlete->ID ),
						'parent'                => $parent,
						'parent_name'           => $parent->first_name . ' ' . $parent->last_name,
						'parent_id'             => $parent->ID,
						'status'                => get_field( 'status', $athlete->ID ),
						'payment_status'        => get_field( 'payment_status', $athlete->ID ),
						'card_file_name'        => get_post_meta( $athlete->ID, 'card_filename', true ),
						'certificate_file_name' => get_post_meta( $athlete->ID, 'certificate_filename', true ),
						'photo_file_name'       => get_post_meta( $athlete->ID, 'photo_filename', true ),
					];

					delete_option( $data['athlete_token'] );
					wp_send_json_success( $athlete_data );
				}

				wp_send_json_error( 'Athletes not found' );
			}
		}
		wp_send_json_error( 'There are not enough permissions to perform this action' );
	}

	function get_role_statistics( WP_REST_Request $request ) {
		$data    = json_decode( $request->get_body(), true );
		$user_id = get_option( $data['token'] );

		if ( ! empty( $user_id ) ) {
			$user = get_user_by( 'ID', $user_id );

			if ( ! is_wp_error( $user ) && $user !== false && user_can( $user_id, 'create_athlete' ) ) {
				$athletes = get_posts( [
					'numberposts' => - 1,
					'post_type'   => 'athlete',
					'meta_query'  => [
						[
							'key'   => $user->roles[0],
							'value' => $user_id,
						]
					],
				] );

				if ( $user->roles[0] === 'coach' ) {
					$parents = get_users( [
						'role'       => 'parent',
						'orderby'    => 'display_name',
						'meta_query' => [
							[
								'key'     => 'coaches',
								'value'   => $user_id,
								'compare' => 'LIKE'
							]
						],
					] );

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

					wp_send_json_success( [
						'teams'    => count( $teams ),
						'parents'  => count( $parents ),
						'athletes' => count( $athletes ),
					] );
				}

				wp_send_json_success( [
					'athletes' => count( $athletes ),
				] );
			}
		}

		wp_send_json_error( 'There are not enough permissions to perform this action' );
	}
}
