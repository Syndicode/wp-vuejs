<?php

namespace api;

use WP_REST_Controller;
use WP_REST_Request;

class PKI_REST_Users_Controller extends WP_REST_Controller {
	function __construct() {
		$this->namespace = 'pki/v1';
		$this->rest_base = 'users';
	}

	public function register_routes(): void {

		register_rest_route( $this->namespace, "/$this->rest_base/register", [
			[
				'methods'  => 'POST',
				'callback' => [ $this, 'register_user' ],
			],
		] );

		register_rest_route( $this->namespace, "/$this->rest_base/login", [
			[
				'methods'  => 'POST',
				'callback' => [ $this, 'login_user' ],
			],
		] );

		register_rest_route( $this->namespace, "/$this->rest_base/check", [
			[
				'methods'  => 'POST',
				'callback' => [ $this, 'check_user' ],
			],
		] );

		register_rest_route( $this->namespace, "/$this->rest_base/logout", [
			[
				'methods'  => 'POST',
				'callback' => [ $this, 'logout_user' ],
			],
		] );

		register_rest_route( $this->namespace, "/$this->rest_base/activation-check", [
			[
				'methods'  => 'POST',
				'callback' => [ $this, 'activation_check_user' ],
			],
		] );

		register_rest_route( $this->namespace, "/$this->rest_base/activation", [
			[
				'methods'  => 'POST',
				'callback' => [ $this, 'activation_user' ],
			],
		] );
	}

	function activation_user( WP_REST_Request $request ) {
		$data = json_decode( $request->get_body(), true );
		if ( $data['activation_token'] === get_user_meta( $data['parentId'], 'activation_token', true ) ) {
			$parent_id = wp_update_user( [
				'ID'         => $data['parentId'],
				'user_login' => $data['form']['login'],
				'user_email' => $data['form']['email'],
				'first_name' => $data['form']['firstName'],
				'last_name'  => $data['form']['lastName'],
				'user_pass'  => $data['form']['password']
			] );

			if ( ! is_wp_error( $parent_id ) ) {
				update_field( 'is_activated', 'yes', 'user_' . $parent_id );
				wp_send_json_success();
			}
		}
		wp_send_json_error();
	}

	function activation_check_user( WP_REST_Request $request ) {
		$data = json_decode( $request->get_body(), true );
		if ( $data['token'] === get_user_meta( $data['id'], 'activation_token', true ) ) {
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

		wp_send_json_error();
	}

	function logout_user( WP_REST_Request $request ) {
		$token = $request->get_body();
		if ( delete_option( $token ) ) {
			wp_send_json_success();
		}

		wp_send_json_error();
	}

	function check_user( WP_REST_Request $request ) {
		$token = $request->get_body();
		if ( $token ) {
			$user_id = get_option( $token );

			if ( ! empty( $user_id ) ) {
				$user = get_user_by( 'ID', $user_id );

				if ( ! is_wp_error( $user ) && $user !== false ) {
					wp_send_json_success( $user );
				}

				wp_send_json_error( 'User not found' );
			}
		}

		wp_send_json_error();
	}

	function login_user( WP_REST_Request $request ) {
		$data = json_decode( $request->get_body(), true );
		$user = wp_authenticate( $data['login'], $data['password'] );

		if ( ! is_wp_error( $user ) ) {
			$token = wp_hash( $user->ID . $user->user_login . date( 'now' ) );
			add_option( $token, $user->ID );
			wp_send_json_success( [
				'token' => $token,
				'user'  => $user,
			] );
		}

		wp_send_json_error( $user->get_error_message() );
	}

	function register_user( WP_REST_Request $request ) {
		$data = json_decode( $request->get_body(), true );
		if ( isset( $data['role'] )
		     && ! empty( $data['role'] )
		     && in_array( $data['role'], [ 'coach', 'parent', 'admin' ] ) ) {

			if ( apply_filters( 'pre_user_email', $data['email'] ) === '' ) {
				wp_send_json_error( 'Please use valid email address!' );
			}

			$user_id = wp_insert_user( [
				'user_login' => $data['login'],
				'user_pass'  => $data['password'],
				'user_email' => $data['email'],
				'first_name' => $data['firstName'] ?? '',
				'last_name'  => $data['lastName'] ?? '',
				'role'       => $data['role'],
			] );

			if ( ! is_wp_error( $user_id ) ) {
				if ( $data['role'] === 'coach' ) {
					update_field( 'birthday', $data['birthday'], 'user_' . $user_id );
					update_field( 'address', $data['address'], 'user_' . $user_id );
					update_field( 'town', $data['town'], 'user_' . $user_id );
					update_field( 'state', $data['state'], 'user_' . $user_id );
					update_field( 'zip-code', $data['zipCode'], 'user_' . $user_id );
				} else if ( $data['role'] === 'parent' ) {
					update_field( 'is_activated', 'no', 'user_' . $user_id );
				}

				wp_send_json_success( $user_id );
			}

			wp_send_json_error( $user_id->get_error_message() );
		}
	}
}
