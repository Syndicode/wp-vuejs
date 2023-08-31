<?php

namespace api;

use JsonException;
use WP_REST_Controller;
use WP_REST_Request;

class PKI_REST_Teams_Controller extends WP_REST_Controller {

	public function __construct() {
		$this->namespace = 'pki/v1';
		$this->rest_base = 'teams';
	}

	/**
	 * @return void
	 */
	public function register_routes(): void {

		/**
		 * Create Team
		 */
		register_rest_route( $this->namespace, "/$this->rest_base/create-team", [
			[
				'args'                => [
					'token' => [
						'required' => true,
						'type'     => 'string',
					],
					'form'  => [
						'required' => true,
						'type'     => 'object',
					],
				],
				'callback'            => [ $this, 'create_team' ],
				'methods'             => 'POST',
				'permission_callback' => [ $this, 'check_permissions' ],

			],
		] );

		/**
		 * Edit Team
		 */
		register_rest_route( $this->namespace, "/$this->rest_base/edit-team", [
			[
				'args'                => [
					'token'  => [
						'required' => true,
						'type'     => 'string',
					],
					'teamId' => [
						'required' => true,
						'type'     => 'number',
					],
					'form'   => [
						'required' => true,
						'type'     => 'object',
					],
				],
				'callback'            => [ $this, 'edit_team' ],
				'methods'             => 'POST',
				'permission_callback' => [ $this, 'check_permissions' ],
			],
		] );

		/**
		 * Get all Teams list
		 */
		register_rest_route( $this->namespace, "/$this->rest_base/get-teams", [
			[
				'args'                => [
					'token'       => [
						'required' => true,
						'type'     => 'string',
					],
					'currentRole' => [
						'required' => true,
						'type'     => 'string',
					],
				],
				'callback'            => [ $this, 'get_teams' ],
				'methods'             => 'POST',
				'permission_callback' => [ $this, 'check_permissions' ],

			],
		] );

		/**
		 * Get Team data
		 */
		register_rest_route( $this->namespace, "/$this->rest_base/get-team-data", [
			[
				'args'                => [
					'slug'  => [
						'required' => true,
						'type'     => 'string',
					],
					'token' => [
						'required' => true,
						'type'     => 'string',
					],
				],
				'callback'            => [ $this, 'get_team_data' ],
				'methods'             => 'POST',
				'permission_callback' => [ $this, 'check_permissions' ],

			],
		] );

		/**
		 * Remove Team
		 */
		register_rest_route( $this->namespace, "/$this->rest_base/remove-team", [
			[
				'args'                => [
					'teamId' => [
						'required' => true,
						'type'     => 'number',
					],
					'token'  => [
						'required' => true,
						'type'     => 'string',
					],
				],
				'callback'            => [ $this, 'remove_team' ],
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
	 * @param WP_REST_Request $request
	 *
	 * @return void
	 * @throws JsonException
	 */
	public function create_team( WP_REST_Request $request ): void {
		$data    = json_decode( $request->get_body(), true, 512, JSON_THROW_ON_ERROR );
		$user_id = get_option( $data['token'] );
		$user    = get_user_by( 'ID', $user_id );

		if ( $user === null ) {
			wp_send_json_error( 'User not found. You are not authorized to perform this action.' );
		}

		$team_data = [
			'post_title'  => sanitize_text_field( $data['form']['team'] ),
			'post_status' => 'publish',
			'post_author' => $user->ID,
			'post_type'   => 'team'
		];

		$team_id = wp_insert_post( $team_data );

		if ( ! is_wp_error( $team_id ) ) {
			update_field( 'coach', $user->ID, $team_id );
			update_field( 'sport', $data['form']['sport'], $team_id );
			update_field( 'grade', $data['form']['grade'], $team_id );
			update_field( 'gender', $data['form']['gender'], $team_id );
			update_field( 'social_link', $data['form']['socialLink'], $team_id );

			$teams = get_posts( [
				'numberposts' => - 1,
				'post_type'   => 'team',
				'meta_query'  => [
					[
						'key'   => 'coach',
						'value' => $user->ID,
					]
				],
			] );

			wp_send_json_success( $this->get_teams_data( $teams ) );
		}

		wp_send_json_error( 'An error occurred while creating the Team' );
	}

	/**
	 * @param WP_REST_Request $request
	 *
	 * @return void
	 * @throws JsonException
	 */
	public function edit_team( WP_REST_Request $request ): void {
		$data    = json_decode( $request->get_body(), true, 512, JSON_THROW_ON_ERROR );
		$user_id = get_option( $data['token'] );
		$user    = get_user_by( 'ID', $user_id );

		if ( $user === null ) {
			wp_send_json_error( 'User not found. You are not authorized to perform this action.' );
		}

		$team_id = wp_update_post( wp_slash( [
			'ID'         => $data['teamId'],
			'post_title' => $data['form']['team'],
		] ) );

		if ( ! is_wp_error( $team_id ) ) {
			update_field( 'sport', $data['form']['sport'], $team_id );
			update_field( 'grade', $data['form']['grade'], $team_id );
			update_field( 'gender', $data['form']['gender'], $team_id );
			update_field( 'social_link', $data['form']['socialLink'], $team_id );

			$teams = get_posts( [
				'numberposts' => - 1,
				'post_type'   => 'team',
				'meta_query'  => [
					[
						'key'   => 'coach',
						'value' => $user->ID,
					]
				],
			] );

			wp_send_json_success( $this->get_teams_data( $teams ) );
		}

		wp_send_json_error( 'Team not found' );
	}

	/**
	 * @param int $team_id
	 *
	 * @return int
	 */
	private function get_athletes_count_by_team( int $team_id ): int {
		$athletes = get_posts( [
			'numberposts' => - 1,
			'post_type'   => 'athlete',
			'meta_query'  => [
				[
					[
						'key'   => 'team',
						'value' => $team_id
					]
				],
			],
		] );

		return count( $athletes );
	}

	/**
	 * @param WP_REST_Request $request
	 *
	 * @return void
	 * @throws JsonException
	 */
	public function get_team_data( WP_REST_Request $request ): void {
		$data    = json_decode( $request->get_body(), true, 512, JSON_THROW_ON_ERROR );
		$user_id = get_option( $data['token'] );
		$user    = get_user_by( 'ID', $user_id );

		if ( $user === null ) {
			wp_send_json_error( 'User not found. You are not authorized to perform this action.' );
		}

		$team = get_posts( [
			'numberposts' => 1,
			'post_type'   => 'team',
			'name'        => $data['slug'],
		] );

		if ( ! empty( $team ) ) {
			$team          = $team[0];
			$athletes_data = [];
			$athletes      = get_posts( [
				'numberposts' => - 1,
				'post_type'   => 'athlete',
				'meta_query'  => [
					[
						'key'   => 'team',
						'value' => $team->ID
					],
				],
			] );

			if ( ! empty( $athletes ) ) {
				foreach ( $athletes as $athlete ) {
					$athletes_data[] = PKI_REST_Athletes_Controller::get_athlete_data( $athlete );
				}
			}

			wp_send_json_success( [
				'title'       => $team->post_title,
				'athletes'    => $athletes_data,
				'slug'        => $team->post_name,
				'sport'       => get_field( 'sport', $team->ID ),
				'grade'       => get_field( 'grade', $team->ID ),
				'gender'      => get_field( 'gender', $team->ID ),
				'social_link' => get_field( 'social_link', $team->ID ),
			] );
		}

		wp_send_json_error( 'Team not found' );
	}

	/**
	 * @param array $teams
	 *
	 * @return array
	 */
	private function get_teams_data( array $teams ): array {
		$teams_data = [];

		foreach ( $teams as $team ) {
			$athletes_count = $this->get_athletes_count_by_team( $team->ID );

			$teams_data[] = [
				'ID'             => $team->ID,
				'title'          => $team->post_title,
				'athletes_count' => $athletes_count,
				'slug'           => $team->post_name,
				'sport'          => get_field( 'sport', $team->ID ),
				'grade'          => get_field( 'grade', $team->ID ),
				'gender'         => get_field( 'gender', $team->ID ),
				'social_link'    => get_field( 'social_link', $team->ID ),
			];
		}

		return $teams_data;
	}

	/**
	 * @param WP_REST_Request $request
	 *
	 * @return void
	 * @throws JsonException
	 */
	public function get_teams( WP_REST_Request $request ): void {
		$data    = json_decode( $request->get_body(), true, 512, JSON_THROW_ON_ERROR );
		$user_id = get_option( $data['token'] );
		$user    = get_user_by( 'ID', $user_id );

		if ( $user === null || $user->ID === 0 ) {
			wp_send_json_error( 'User not found. You are not authorized to perform this action.' );
		}

		$args = [
			'numberposts' => - 1,
			'post_type'   => 'team',
		];

		if ( isset( $data['currentRole'] ) && $data['currentRole'] === 'coach' ) {
			$args['meta_query'] = [
				[
					'key'   => 'coach',
					'value' => $user->ID,
				]
			];
		}

		$teams = get_posts( $args );

		if ( ! empty( $teams ) ) {
			wp_send_json_success( $this->get_teams_data( $teams ) );
		}

		wp_send_json_error( 'Teams not found' );
	}

	/**
	 * @param WP_REST_Request $request
	 *
	 * @return void
	 * @throws JsonException
	 */
	public function remove_team( WP_REST_Request $request ): void {
		$data    = json_decode( $request->get_body(), true, 512, JSON_THROW_ON_ERROR );
		$user_id = get_option( $data['token'] );

		if ( (int) get_field( 'coach', $data['teamId'] )->ID === (int) $user_id ) {

			if ( $this->get_athletes_count_by_team( $data['teamId'] ) === 0 ) {
				wp_delete_post( $data['teamId'] );
				wp_send_json_success();
			}

			wp_send_json_error( 'You cannot delete a team while it has athletes.' );
		}

		wp_send_json_error();
	}
}
