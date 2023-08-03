<?php

namespace api;

use JsonException;
use WP_Post;
use WP_REST_Controller;
use WP_REST_Request;

class PKI_REST_Athletes_Controller extends WP_REST_Controller {

	public function __construct() {
		$this->namespace = 'pki/v1';
		$this->rest_base = 'athletes';
	}

	/**
	 * @return void
	 */
	public function register_routes(): void {

		/**
		 * Create Athlete
		 */
		register_rest_route( $this->namespace, "/$this->rest_base/create-athlete", [
			[
				'callback'            => [ $this, 'create_athlete' ],
				'methods'             => 'POST',
				'permission_callback' => [ $this, 'check_permissions' ],

			],
		] );

		/**
		 * Edit Athlete
		 */
		register_rest_route( $this->namespace, "/$this->rest_base/edit-athlete", [
			[
				'callback'            => [ $this, 'edit_athlete' ],
				'methods'             => 'POST',
				'permission_callback' => [ $this, 'check_permissions' ],

			],
		] );

		/**
		 * Get Athlete by field
		 */
		register_rest_route( $this->namespace, "/$this->rest_base/get-athlete-by", [
			[
				'callback'            => [ $this, 'get_athlete_by' ],
				'methods'             => 'POST',
				'permission_callback' => [ $this, 'check_permissions' ],

			],
		] );

		/**
		 * Get Athletes list
		 */
		register_rest_route( $this->namespace, "/$this->rest_base/get-athletes", [
			[
				'callback'            => [ $this, 'get_athletes' ],
				'methods'             => 'POST',
				'permission_callback' => [ $this, 'check_permissions' ],

			],
		] );

		/**
		 * Remove Athlete
		 */
		register_rest_route( $this->namespace, "/$this->rest_base/remove-athlete", [
			[
				'callback'            => [ $this, 'remove_athlete' ],
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
		$user    = wp_get_current_user();
		$user_id = get_option( $request->get_param( 'token' ) );

		return ( $user !== null && $user->roles[0] === 'administrator' ) || ( ! empty( $user_id ) && $user !== null && $user->ID !== 0 && $user->ID === (int) $user_id );
	}

	/**
	 * @param WP_REST_Request $request
	 *
	 * @return void
	 */
	public function create_athlete( WP_REST_Request $request ): void {
		$data = $request->get_params();
		$user = wp_get_current_user();

		if ( $user === null ) {
			wp_send_json_error( 'User not found. You are not authorized to perform this action.' );
		}

		$athlete_data = [
			'post_title'  => sanitize_text_field( $data['firstName'] . ' ' . $data['lastName'] ),
			'post_status' => 'publish',
			'post_author' => $user->ID,
			'post_type'   => 'athlete'
		];

		$athlete_id = wp_insert_post( $athlete_data );

		if ( ! is_wp_error( $athlete_id ) ) {
			update_field( 'first_name', $data['firstName'], $athlete_id );
			update_field( 'last_name', $data['lastName'], $athlete_id );
			update_field( 'birthday', $data['birthday'], $athlete_id );
			update_field( 'current_grade', $data['currentGrade'], $athlete_id );
			update_field( 'parent', $data['parent'], $athlete_id );
			update_field( 'team', $data['team'], $athlete_id );
			update_field( 'social_link', $data['socialLink'], $athlete_id );
			update_field( 'payment_status', 'unpaid', $athlete_id );

			require_once( ABSPATH . 'wp-admin/includes/image.php' );
			require_once( ABSPATH . 'wp-admin/includes/file.php' );
			require_once( ABSPATH . 'wp-admin/includes/media.php' );

			$headshot_attachment_id = media_handle_upload( 'headshot', $athlete_id );
			if ( ! is_wp_error( $headshot_attachment_id ) ) {
				update_field( 'headshot', $headshot_attachment_id, $athlete_id );
				update_post_meta( $athlete_id, 'headshot_filename', $data['headshotFileName'] );
			}

			// If current Role COACH
			if ( $data['currentRole'] === 'coach' ) {
				update_field( 'coach', $user->ID, $athlete_id );
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
				$parent_coaches   = get_field( 'coaches', 'user_' . $user->ID );
				$parent_coaches[] = $coach;

				update_field( 'coaches', $parent_coaches, 'user_' . $user->ID );
				update_field( 'coach', $coach, $athlete_id );
				update_field( 'status', 'pending', $athlete_id );

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

			$athletes = $this->get_athletes_list( $data['currentRole'], $user->ID );
			if ( ! empty( $athletes ) ) {
				wp_send_json_success( $athletes );
			}
		}
	}

	/**
	 * @param WP_REST_Request $request
	 *
	 * @return void
	 */
	public function edit_athlete( WP_REST_Request $request ): void {
		$data = $request->get_params();
		$user = wp_get_current_user();

		if ( $user === null ) {
			wp_send_json_error( 'User not found. You are not authorized to perform this action.' );
		}

		$coach  = get_field( 'coach', $data['athleteId'] );
		$parent = get_field( 'parent', $data['athleteId'] );

		if ( $coach->ID === $user->ID || $parent->ID === $user->ID ) {

			$athlete_id = wp_update_post( wp_slash( [
				'ID'         => $data['athleteId'],
				'post_title' => $data['firstName'] . ' ' . $data['lastName'],
			] ) );

			if ( ! is_wp_error( $athlete_id ) ) {
				update_field( 'first_name', $data['firstName'], $athlete_id );
				update_field( 'last_name', $data['lastName'], $athlete_id );
				update_field( 'birthday', $data['birthday'], $athlete_id );
				update_field( 'current_grade', $data['currentGrade'], $athlete_id );
				update_field( 'parent', $data['parent'], $athlete_id );
				update_field( 'team', $data['team'], $athlete_id );
				update_field( 'social_link', $data['socialLink'], $athlete_id );
				update_field( 'status', 'pending', $athlete_id );

				require_once( ABSPATH . 'wp-admin/includes/image.php' );
				require_once( ABSPATH . 'wp-admin/includes/file.php' );
				require_once( ABSPATH . 'wp-admin/includes/media.php' );

				$headshot_attachment_id = media_handle_upload( 'headshot', $athlete_id );
				if ( ! is_wp_error( $headshot_attachment_id ) ) {
					update_field( 'headshot', $headshot_attachment_id, $athlete_id );
					update_post_meta( $athlete_id, 'headshot_filename', $data['headshotFileName'] );
				}

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

				$athletes = $this->get_athletes_list( $data['currentRole'], $user->ID );

				if ( ! empty( $athletes ) ) {
					wp_send_json_success( $athletes );
				}
			}
		}

		wp_send_json_error();
	}


	/**
	 * @param WP_REST_Request $request
	 *
	 * @return void
	 * @throws JsonException
	 */
	public function get_athlete_by( WP_REST_Request $request ): void {
		$data = json_decode( $request->get_body(), true, 512, JSON_THROW_ON_ERROR );
		$user = wp_get_current_user();

		if ( $user === null ) {
			wp_send_json_error( 'User not found. You are not authorized to perform this action.' );
		}

		$athlete = null;
		switch ( $data['field'] ) {
			case 'token':
				$athlete_id = get_option( $data['athlete_token'] );
				$athlete    = get_post( $athlete_id );
				break;
			case 'slug':
				$athlete = get_posts( [
					'numberposts' => 1,
					'post_type'   => 'athlete',
					'name'        => $data['slug'],
				] )[0];
				break;
		}

		if ( $athlete && ! is_wp_error( $athlete ) ) {
			$athlete_data = self::get_athlete_data( $athlete );
			delete_option( $data['athlete_token'] );
			wp_send_json_success( $athlete_data );
		}

		wp_send_json_error( 'Athlete not found!' );
	}

	/**
	 * @param WP_Post $athlete
	 *
	 * @return array
	 */
	public static function get_athlete_data( WP_Post $athlete ): array {
		$parent = get_field( 'parent', $athlete->ID );
		$coach  = get_field( 'coach', $athlete->ID );

		return [
			'ID'                    => $athlete->ID,
			'first_name'            => get_field( 'first_name', $athlete->ID ),
			'last_name'             => get_field( 'last_name', $athlete->ID ),
			'birthday'              => get_field( 'birthday', $athlete->ID ),
			'current_grade'         => get_field( 'current_grade', $athlete->ID ),
			'team'                  => get_field( 'team', $athlete->ID ),
			'parent'                => $parent,
			'coach'                 => $coach,
			'parent_name'           => $parent->first_name . ' ' . $parent->last_name,
			'coach_name'            => $coach->first_name . ' ' . $coach->last_name,
			'parent_id'             => $parent->ID,
			'coach_id'              => $coach->ID,
			'social_link'           => get_field( 'social_link', $athlete->ID ),
			'status'                => get_field( 'status', $athlete->ID ),
			'payment_status'        => get_field( 'payment_status', $athlete->ID ),
			'headshot_file_name'    => get_post_meta( $athlete->ID, 'headshot_filename', true ),
			'headshot_file'         => get_field( 'headshot', $athlete->ID ),
			'card_file_name'        => get_post_meta( $athlete->ID, 'card_filename', true ),
			'card_file'             => get_field( 'card', $athlete->ID ),
			'certificate_file_name' => get_post_meta( $athlete->ID, 'certificate_filename', true ),
			'certificate_file'      => get_field( 'certificate', $athlete->ID ),
			'photo_file_name'       => get_post_meta( $athlete->ID, 'photo_filename', true ),
			'slug'                  => $athlete->post_name,
		];
	}


	/**
	 * @return void
	 */
	public function get_athletes(): void {
		$user = wp_get_current_user();

		if ( $user === null ) {
			wp_send_json_error( 'User not found. You are not authorized to perform this action.' );
		}

		$athletes = $this->get_athletes_list( get_user_meta( $user->ID, 'current-role', true ), $user->ID );
		if ( ! empty( $athletes ) ) {
			wp_send_json_success( $athletes );
		}

		wp_send_json_error( 'Athletes not found' );
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
				$athletes_data[] = self::get_athlete_data( $athlete );
			}
		}

		return $athletes_data;
	}

	/**
	 * @param WP_REST_Request $request
	 *
	 * @return void
	 * @throws JsonException
	 */
	public function remove_athlete( WP_REST_Request $request ): void {
		$data = json_decode( $request->get_body(), true, 512, JSON_THROW_ON_ERROR );
		$user = wp_get_current_user();

		if ( $user === null ) {
			wp_send_json_error( 'User not found. You are not authorized to perform this action.' );
		}

		$coach  = get_field( 'coach', $data['athleteId'] );
		$parent = get_field( 'parent', $data['athleteId'] );

		if ( $coach->ID === $user->ID || $parent->ID === $user->ID ) {
			$attachments = get_attached_media( '', $data['athleteId'] );

			if ( ! empty( $attachments ) ) {
				foreach ( $attachments as $attachment ) {
					wp_delete_attachment( $attachment->ID, true );
				}
			}

			wp_delete_post( $data['athleteId'] );
			wp_send_json_success();
		}

		wp_send_json_error();
	}
}
