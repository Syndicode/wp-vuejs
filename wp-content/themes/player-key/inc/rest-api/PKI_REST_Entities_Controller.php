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

		register_rest_route( $this->namespace, "/$this->rest_base/get-athlete-by-slug", [
			[
				'methods'  => 'POST',
				'callback' => [ $this, 'get_athlete_by_slug' ],

			],
		] );

		register_rest_route( $this->namespace, "/$this->rest_base/get-role-statistics", [
			[
				'methods'  => 'POST',
				'callback' => [ $this, 'get_role_statistics' ],

			],
		] );

		register_rest_route( $this->namespace, "/$this->rest_base/create-athlete", [
			[
				'methods'  => 'POST',
				'callback' => [ $this, 'create_athlete' ],

			],
		] );

		register_rest_route( $this->namespace, "/$this->rest_base/remove-athlete", [
			[
				'methods'  => 'POST',
				'callback' => [ $this, 'remove_athlete' ],

			],
		] );

		register_rest_route( $this->namespace, "/$this->rest_base/edit-athlete", [
			[
				'methods'  => 'POST',
				'callback' => [ $this, 'edit_athlete' ],

			],
		] );
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
					update_field( 'payment_status', 'unpaid', $athlete_id );

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

						player_key_add_notification( $coach->ID, 'coach', 'New Athlete (' . $data['firstName'] . ' ' . $data['lastName'] . ') was created', 'info' );


						//Parent coaches (can be multiple)
						$parent_coaches   = get_field( 'coaches', 'user_' . $user->ID, true );
						$parent_coaches[] = $coach;

						update_field( 'coaches', $parent_coaches, 'user_' . $user->ID );
						update_field( 'coach', $coach, $athlete_id );
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
					}

					$athletes = $this->get_athletes_list( $data['currentRole'], $user_id );
					if ( ! empty( $athletes ) ) {
						wp_send_json_success( $athletes );
					}
				}
			}
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
					'slug'                  => $athlete->post_name,
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

				$athletes = $this->get_athletes_list( get_user_meta( $user_id, 'current-role', true ), $user_id );
				if ( ! empty( $athletes ) ) {
					wp_send_json_success( $athletes );
				}

				wp_send_json_error( 'Athletes not found' );
			}

			wp_send_json_error( 'There are not enough permissions to perform this action' );
		}
	}

	function get_athlete_by_slug( WP_REST_Request $request ) {
		$data    = json_decode( $request->get_body(), true );
		$user_id = get_option( $data['token'] );

		if ( ! empty( $user_id ) ) {
			$user = get_user_by( 'ID', $user_id );

			if ( ! is_wp_error( $user ) && $user !== false && user_can( $user_id, 'create_athlete' ) ) {
				$athlete = get_posts( [
					'numberposts' => 1,
					'post_type'   => 'athlete',
					'name'        => $data['slug'],
					'meta_query'  => [
						[
							'key'   => get_user_meta( $user_id, 'current-role', true ),
							'value' => $user_id
						]
					],
				] );

				if ( ! empty( $athlete ) ) {
					wp_send_json_success( self::get_athlete_data( $athlete[0] ) );
				}

				wp_send_json_error( 'Athlete not found or You are not allowed to view this Athlete!' );
			}
		}

		wp_send_json_error( 'You are not allowed to view this page!' );
	}

	public static function get_athlete_data( \WP_Post $athlete ): array {
		$parent = get_field( 'parent', $athlete->ID );
		$coach  = get_field( 'coach', $athlete->ID );

		return [
			'ID'                    => $athlete->ID,
			'first_name'            => get_field( 'first_name', $athlete->ID ),
			'last_name'             => get_field( 'last_name', $athlete->ID ),
			'birthday'              => get_field( 'birthday', $athlete->ID ),
			'team'                  => get_field( 'team', $athlete->ID ),
			'parent'                => $parent,
			'coach'                 => $coach,
			'parent_name'           => $parent->first_name . ' ' . $parent->last_name,
			'coach_name'            => $coach->first_name . ' ' . $coach->last_name,
			'parent_id'             => $parent->ID,
			'coach_id'              => $coach->ID,
			'status'                => get_field( 'status', $athlete->ID ),
			'payment_status'        => get_field( 'payment_status', $athlete->ID ),
			'card_file_name'        => get_post_meta( $athlete->ID, 'card_filename', true ),
			'card_file'             => get_field( 'card', $athlete->ID ),
			'certificate_file_name' => get_post_meta( $athlete->ID, 'certificate_filename', true ),
			'certificate_file'      => get_field( 'certificate', $athlete->ID ),
			'photo_file_name'       => get_post_meta( $athlete->ID, 'photo_filename', true ),
			'slug'                  => $athlete->post_name,
		];
	}

	function get_athlete( WP_REST_Request $request ) {
		$data    = json_decode( $request->get_body(), true );
		$user_id = get_option( $data['token'] );

		if ( ! empty( $user_id ) ) {
			$user = get_user_by( 'ID', $user_id );

			if ( $user !== false && ! is_wp_error( $user ) && user_can( $user_id, 'create_athlete' ) ) {
				$athlete_id = get_option( $data['athlete_token'] );
				$athlete    = get_post( $athlete_id );

				if ( $athlete && ! is_wp_error( $athlete ) ) {
					$athlete_data = self::get_athlete_data( $athlete );
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
							'key'   => $data['currentRole'],
							'value' => $user_id,
						]
					],
				] );

				if ( $data['currentRole'] === 'coach' ) {
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
