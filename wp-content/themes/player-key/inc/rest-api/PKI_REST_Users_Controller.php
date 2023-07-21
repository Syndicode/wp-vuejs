<?php

namespace api;

use JsonException;
use WP_REST_Controller;
use WP_REST_Request;
use api\PKI_REST_Parents_Controller;

class PKI_REST_Users_Controller extends WP_REST_Controller {

	const WEEK_IN_SECONDS = 604800;
	const DAY_IN_SECONDS = 86400;

	function __construct() {
		$this->namespace = 'pki/v1';
		$this->rest_base = 'users';
	}

	public function register_routes(): void {

		register_rest_route( $this->namespace, "/$this->rest_base/edit-user", [
			[
				'methods'  => 'POST',
				'callback' => [ $this, 'edit_user' ],
			],
		] );

		register_rest_route( $this->namespace, "/$this->rest_base/resend-activation-link", [
			[
				'methods'  => 'POST',
				'callback' => [ $this, 'resend_activation_link' ],
			],
		] );

		/**
		 * Register new User (Coach, Parent or Admin)
		 */
		register_rest_route( $this->namespace, "/$this->rest_base/register-user", [
			[
				'callback'            => [ $this, 'register_user' ],
				'methods'             => 'POST',
				'permission_callback' => [ $this, 'check_permissions' ],
			],
		] );

		register_rest_route( $this->namespace, "/$this->rest_base/login-user", [
			[
				'methods'  => 'POST',
				'callback' => [ $this, 'login_user' ],
			],
		] );

		register_rest_route( $this->namespace, "/$this->rest_base/change-user-role", [
			[
				'methods'  => 'POST',
				'callback' => [ $this, 'change_user_role' ],
			],
		] );

		register_rest_route( $this->namespace, "/$this->rest_base/check", [
			[
				'methods'  => 'POST',
				'callback' => [ $this, 'check_user' ],
			],
		] );

		register_rest_route( $this->namespace, "/$this->rest_base/logout-user", [
			[
				'methods'  => 'POST',
				'callback' => [ $this, 'logout_user' ],
			],
		] );

		register_rest_route( $this->namespace, "/$this->rest_base/activation-check", [
			[
				'methods'  => 'POST',
				'callback' => [ $this, 'activation_check' ],
			],
		] );

		register_rest_route( $this->namespace, "/$this->rest_base/activation", [
			[
				'methods'  => 'POST',
				'callback' => [ $this, 'activation_user' ],
			],
		] );

		register_rest_route( $this->namespace, "/$this->rest_base/reset-password-request", [
			[
				'methods'  => 'POST',
				'callback' => [ $this, 'reset_password_request' ],
			],
		] );

		register_rest_route( $this->namespace, "/$this->rest_base/reset-password", [
			[
				'methods'  => 'POST',
				'callback' => [ $this, 'reset_password' ],
			],
		] );

		register_rest_route( $this->namespace, "/$this->rest_base/get-role-statistics", [
			[
				'methods'  => 'POST',
				'callback' => [ $this, 'get_role_statistics' ],

			],
		] );
	}

	/**
	 * @param WP_REST_Request $request
	 *
	 * @return bool
	 */
	public function check_permissions( WP_REST_Request $request ): bool {
		$nonce = $request->get_header( 'X-WP-Nonce' );

		return $nonce !== null && wp_verify_nonce( $nonce, 'wp_rest' );
	}

	function change_user_role( WP_REST_Request $request ) {
		$data    = json_decode( $request->get_body(), true );
		$user_id = get_option( $data['token'] );

		if ( ! empty( $user_id ) ) {
			$user = get_user_by( 'ID', $user_id );

			if ( $user !== false ) {

				if ( ! in_array( $data['role'], $user->roles ) ) {
					wp_send_json_error( 'You can not use this role!' );
				}

				if ( $data['role'] === 'parent' && get_field( 'is_activated', 'user_' . $user_id ) === null ) {
					add_user_meta( $user_id, 'initial_coach', $user_id );
					update_field( 'coaches', [ $user_id ], 'user_' . $user_id );
					update_field( 'is_activated', 'yes', 'user_' . $user_id );
				}

				update_user_meta( $user->ID, 'current-role', $data['role'] );
				wp_send_json_success( $this->get_user_data( $user->ID ) );
			}
		}
		wp_send_json_error( 'User not found!' );
	}

	function edit_user( WP_REST_Request $request ) {
		$data    = json_decode( $request->get_body(), true );
		$user_id = get_option( $data['token'] );

		if ( ! empty( $user_id ) ) {
			$user = get_user_by( 'ID', $user_id );

			if ( $user !== false && ! is_wp_error( $user ) && ( user_can( $user_id, 'create_team' ) || user_can( $user_id, 'create_athlete' ) ) ) {

				$user_data = [
					'ID'           => $user_id,
					'first_name'   => $data['form']['firstName'],
					'last_name'    => $data['form']['lastName'],
					'display_name' => $data['form']['firstName'] . ' ' . $data['form']['lastName'],
					'user_email'   => $data['form']['email'],
				];

				if ( isset( $data['form']['password'] )
				     && ! empty( $data['form']['password'] )
				     && isset( $data['form']['passwordRepeat'] )
				     && $data['form']['password'] === $data['form']['passwordRepeat'] ) {
					$user_data['user_pass'] = $data['form']['password'];
				}

				$user_id = wp_update_user( $user_data );

				if ( ! is_wp_error( $user_id ) ) {

					if ( isset( $data['form']['multipleRoles'] )
					     && $data['form']['multipleRoles']
					     && isset( $data['form']['roles'] )
					     && count( $data['form']['roles'] ) > 1 ) {
						$new_roles = array_diff( $data['form']['roles'], $user->roles );
						foreach ( $new_roles as $new_role ) {
							$user->add_role( $new_role );
						}
					} else if ( isset( $data['form']['multipleRoles'] ) && ! $data['form']['multipleRoles'] ) {
						$initial_role = get_user_meta( $user_id, 'initial-role', true );
						$user->set_role( $initial_role );
						update_user_meta( $user->ID, 'current-role', $initial_role );
					}

					if ( $data['currentRole'] === 'coach' ) {
						update_field( 'birthday', $data['form']['birthday'], 'user_' . $user_id );
						update_field( 'address', $data['form']['address'], 'user_' . $user_id );
						update_field( 'town', $data['form']['town'], 'user_' . $user_id );
						update_field( 'state', $data['form']['state'], 'user_' . $user_id );
						update_field( 'zip-code', $data['form']['zipCode'], 'user_' . $user_id );
					}

					wp_send_json_success( $this->get_user_data( $user_id ) );
				}

				wp_send_json_error();
			}
		}
	}

	/**
	 * @param int $user_id
	 *
	 * @return array
	 */
	private function get_user_data( int $user_id ): array {
		$user_data = [];
		$user      = get_user_by( 'ID', $user_id );

		if ( $user !== false && ! is_wp_error( $user ) && ( user_can( $user_id, 'create_team' ) || user_can( $user_id, 'create_athlete' ) ) ) {
			$user_data = [
				'ID'           => $user->ID,
				'first_name'   => $user->first_name,
				'last_name'    => $user->last_name,
				'display_name' => $user->display_name,
				'email'        => $user->user_email,
				'user_login'   => $user->user_login,
				'initial_role' => get_user_meta( $user->ID, 'initial-role', true ),
				'current_role' => get_user_meta( $user->ID, 'current-role', true ),
				'roles'        => $user->roles,
				'birthday'     => get_field( 'birthday', 'user_' . $user->ID ),
				'address'      => get_field( 'address', 'user_' . $user->ID ),
				'town'         => get_field( 'town', 'user_' . $user->ID ),
				'state'        => get_field( 'state', 'user_' . $user->ID ),
				'zip_code'     => get_field( 'zip-code', 'user_' . $user->ID ),
			];
		}

		return $user_data;
	}

	function reset_password( WP_REST_Request $request ) {
		$data = json_decode( $request->get_body(), true );
		if ( isset( $data['login'] ) && ! empty( $data['login'] )
		     && isset( $data['token'] ) && ! empty( $data['token'] )
		     && isset( $data['password'] ) && ! empty( $data['password'] )
		     && isset( $data['passwordRepeat'] ) && ! empty( $data['passwordRepeat'] )
		     && $data['password'] === $data['passwordRepeat'] ) {

			$user_id = is_email( $data['login'] ) ? email_exists( $data['login'] ) : username_exists( $data['login'] );
			if ( $user_id ) {
				$token_timestamp      = get_user_meta( $user_id, 'token_timestamp', true );
				$reset_password_token = get_user_meta( $user_id, 'reset_password_token', true );

				if ( $data['token'] === $reset_password_token ) {
					wp_set_password( $data['password'], $user_id );
					delete_user_meta( $user_id, 'token_timestamp' );
					delete_user_meta( $user_id, 'reset_password_token' );
					wp_send_json_success( 'Your password has been successfully changed! <a href="/sign-in/">Sign in</a>' );
				}

				wp_send_json_error( 'Your link is expired or you are not authorized to perform this action. Try requesting a <a href="/password-reset/">password reset</a> again.' );
			}

			wp_send_json_error( 'User <strong>' . $data['login'] . '</strong> not found!' );
		}
	}

	function reset_password_request( WP_REST_Request $request ) {
		$data = json_decode( $request->get_body(), true );
		if ( isset( $data['login'] ) && ! empty( $data['login'] ) && validate_username( $data['login'] ) ) {
			$user_id = is_email( $data['login'] ) ? email_exists( $data['login'] ) : username_exists( $data['login'] );

			if ( $user_id ) {
				$user = get_user_by( 'ID', $user_id );

				$token_timestamp      = time();
				$reset_password_token = wp_hash( $user->first_name . $user->last_name . $token_timestamp );
				$url                  = get_site_url() . '/password-reset/' . '?login=' . urlencode( $data['login'] ) . '&token=' . $reset_password_token;
				$message              = file_get_contents( TEMPLATE_DIR . '/inc/templates/emails/reset-password-request.php' );
				$message              = str_replace( [ '{{url}}', '{{account}}' ], [
					$url,
					$data['login']
				], $message );

				wp_mail( $data['login'], 'Password Reset on PlayerKey ID', $message, [
					'content-type: text/html',
				] );

				update_user_meta( $user_id, 'reset_password_token', $reset_password_token );
				update_user_meta( $user_id, 'token_timestamp', $token_timestamp );

				wp_send_json_success( 'Check your email for the confirmation link!' );
			}

			wp_send_json_error( 'User <strong>' . $data['login'] . '</strong> not found!' );
		}

		wp_send_json_error( 'There are not enough permissions to perform this action' );
	}

	function resend_activation_link( WP_REST_Request $request ) {
		$data    = json_decode( $request->get_body(), true );
		$user_id = get_option( $data['token'] );

		if ( ! empty( $user_id ) ) {
			$user = get_user_by( 'ID', $user_id );

			if ( ! is_wp_error( $user ) && $user !== false && user_can( $user_id, 'create_team' ) ) {

				$parent = get_user_by( 'ID', $data['parentId'] );
				$token  = wp_hash( $parent->ID . $parent->first_name . $parent->last_name . $parent->user_email );

				$url     = get_site_url() . '/complete/parent/' . '?id=' . $parent->ID . '&token=' . $token;
				$message = file_get_contents( TEMPLATE_DIR . '/inc/templates/emails/complete-parent-information.php' );
				$message = str_replace( [
					'{{url}}',
					'{{coach}}'
				], [
					$url,
					$user->first_name . ' ' . $user->last_name
				], $message );

				$is_mail_sent = wp_mail( $parent->user_email, 'Activate your account on PlayerKey ID', $message, [
					'content-type: text/html',
				] );

				if ( $is_mail_sent ) {
					update_user_meta( $parent->ID, 'activation_token', $token, true );
					update_option( $token, time() );
					update_field( 'is_activated', 'no', 'user_' . $parent->ID );
					wp_send_json_success( PKI_REST_Parents_Controller::get_parents_list_by_coach( $user->ID ) );
				}
			}
		}

		wp_send_json_error();
	}

	function activation_user( WP_REST_Request $request ) {
		$data = json_decode( $request->get_body(), true );
		if ( $data['activation_token'] === get_user_meta( $data['parentId'], 'activation_token', true ) ) {
			$parent_id = wp_update_user( [
				'ID'         => $data['parentId'],
				'user_login' => $data['form']['email'],
				'user_email' => $data['form']['email'],
				'first_name' => $data['form']['firstName'],
				'last_name'  => $data['form']['lastName'],
				'user_pass'  => $data['form']['password']
			] );

			if ( ! is_wp_error( $parent_id ) ) {
				update_field( 'is_activated', 'yes', 'user_' . $parent_id );
				delete_user_meta( $parent_id, 'activation_token' );
				delete_option( $data['activation_token'] );
				wp_send_json_success();
			}
		}
		wp_send_json_error();
	}

	function activation_check( WP_REST_Request $request ) {
		$data = json_decode( $request->get_body(), true );
		if ( $data['token'] === get_user_meta( $data['id'], 'activation_token', true ) ) {

			if ( get_field( 'is_activated', 'user_' . $data['id'] ) === 'no' ) {

				if ( ( time() - (int) get_option( $data['token'], true ) ) < self::DAY_IN_SECONDS ) {
					$user = get_user_by( 'ID', $data['id'] );
					if ( ! is_wp_error( $user ) && $user !== false ) {
						$user_data = [
							'ID'         => $user->ID,
							'user_login' => $user->user_login,
							'first_name' => $user->first_name,
							'last_name'  => $user->last_name,
							'email'      => $user->user_email,
							'role'       => 'parent',
						];

						wp_send_json_success( $user_data );
					}
				}
				update_field( 'is_activated', 'expired', 'user_' . $data['id'] );
				$coaches = get_field( 'coaches', $user->ID );
				player_key_add_notification( $coaches[0]->ID, 'coach', 'Activation link for ' . $user->display_name . ' has expired!', 'notice' );
				wp_send_json_error( 'Activation link has expired!' );
			}
			wp_send_json_error( 'Your account is already activated!' );
		}

		wp_send_json_error( 'You do not have permissions to perform this action!' );
	}

	function logout_user( WP_REST_Request $request ) {
		$token = $request->get_body();
		if ( delete_option( $token ) ) {
			wp_logout();
			wp_send_json_success();
		}

		wp_send_json_error();
	}

	function check_user( WP_REST_Request $request ) {
		$token = $request->get_body();
		if ( $token ) {
			$user_id = get_option( $token );

			if ( ! empty( $user_id ) ) {
				$user_data = $this->get_user_data( $user_id );

				if ( ! empty( $user_data ) ) {
					wp_send_json_success( $user_data );
				}

				wp_send_json_error( 'User not found' );
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
	public function login_user( WP_REST_Request $request ): void {
		$data = json_decode( $request->get_body(), true, 512, JSON_THROW_ON_ERROR );
		$user = wp_authenticate( $data['email'], $data['password'] );

		if ( ! is_wp_error( $user ) ) {

			if ( ! get_field( 'is_valid', 'user_' . $user->ID ) ) {
				wp_send_json_error( 'Your account has not been validated yet. We will validate your account and get back to you when you are set up.' );
			}

			if ( ! get_user_meta( $user->ID, 'initial-role', true ) ) {
				update_user_meta( $user->ID, 'initial-role', $user->roles[0] );
			}

			if ( in_array( $user->roles[0], [ 'coach', 'parent' ] ) ) {
				$token = wp_hash( $user->ID . $user->user_login . time() );
				add_option( $token, $user->ID );

				if ( ! get_user_meta( $user->ID, 'current-role', true ) ) {
					add_user_meta( $user->ID, 'current-role', $user->roles[0] );
				}

				wp_set_current_user( $user->ID );
				wp_set_auth_cookie( $user->ID );

				$user_data = $this->get_user_data( $user->ID );
				wp_send_json_success( [
					'token' => $token,
					'user'  => $user_data,
				] );
			} else if ( $user->roles[0] === 'admin' ) {
				wp_send_json_error( 'Your account has not been activated yet. Please wait for the account to be activated. You will be notified about this to the email you specified.' );
			} else if ( $user->roles[0] === 'administrator' ) {
				wp_send_json_error( 'Please use this <a href="/wp-admin/">link</a> to access the Admin panel' );
			}
		}

		if ( isset( $user->errors['incorrect_password'] ) ) {
			wp_send_json_error( '<strong>Error:</strong> The password you entered for the User <strong>' . $data['login'] . '</strong> is incorrect.' );
		}

		wp_send_json_error( $user->get_error_message() );
	}

	/**
	 * @param WP_REST_Request $request
	 *
	 * @return void
	 * @throws JsonException
	 */
	public function register_user( WP_REST_Request $request ): void {
		$data = json_decode( $request->get_body(), true, 512, JSON_THROW_ON_ERROR );

		if ( ! empty( $data['role'] ) && in_array( $data['role'], [ 'coach', 'parent', 'admin' ] ) ) {

			if ( apply_filters( 'pre_user_email', $data['email'] ) === '' ) {
				wp_send_json_error( 'Please use valid email address!' );
			}

			$user_id = wp_insert_user( [
				'user_login' => $data['email'],
				'user_pass'  => $data['password'],
				'user_email' => $data['email'],
				'first_name' => $data['firstName'] ?? '',
				'last_name'  => $data['lastName'] ?? '',
				'role'       => $data['role'],
			] );

			if ( ! is_wp_error( $user_id ) ) {
				update_user_meta( $user_id, 'initial-role', $data['role'] );
				update_field( 'is_valid', 0, 'user_' . $user_id );

				if ( $data['role'] === 'coach' ) {
					update_field( 'birthday', $data['birthday'], 'user_' . $user_id );
					update_field( 'address', $data['address'], 'user_' . $user_id );
					update_field( 'town', $data['town'], 'user_' . $user_id );
					update_field( 'state', $data['state'], 'user_' . $user_id );
					update_field( 'zip-code', $data['zipCode'], 'user_' . $user_id );
				} else if ( $data['role'] === 'parent' ) {
					update_field( 'is_activated', 'yes', 'user_' . $user_id );
				}

				$url     = get_site_url();
				$message = file_get_contents( TEMPLATE_DIR . '/inc/templates/emails/register-user.php' );
				$message = str_replace( [
					'{{url}}',
					'{{user}}',
				], [
					$url,
					$data['firstName'] . ' ' . $data['lastName']
				], $message );

				wp_mail( $data['email'], 'Thank you for signing up with Player Key!', $message, [
					'content-type: text/html',
				] );

				wp_send_json_success( $user_id );
			}

			wp_send_json_error( $user_id->get_error_message() );
		}
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
