<?php

namespace api;

use WP_REST_Controller;
use WP_REST_Request;

class PKI_REST_Payments_Controller extends WP_REST_Controller {


	function __construct() {
		$this->namespace = 'pki/v1';
		$this->rest_base = 'payments';
	}

	public function register_routes(): void {

		register_rest_route( $this->namespace, "/$this->rest_base/get-cost", [
			[
				'methods'  => 'GET',
				'callback' => [ $this, 'get_cost' ],

			],
		] );

		register_rest_route( $this->namespace, "/$this->rest_base/get-payment-token", [
			[
				'methods'  => 'POST',
				'callback' => [ $this, 'get_payment_token' ],

			],
		] );

		register_rest_route( $this->namespace, "/$this->rest_base/get-payments", [
			[
				'methods'  => 'POST',
				'callback' => [ $this, 'get_payments' ],

			],
		] );

		register_rest_route( $this->namespace, "/$this->rest_base/check-payment", [
			[
				'methods'  => 'POST',
				'callback' => [ $this, 'check_payment' ],

			],
		] );

		register_rest_route( $this->namespace, "/$this->rest_base/cancel-payment", [
			[
				'methods'  => 'POST',
				'callback' => [ $this, 'cancel_payment' ],

			],
		] );

		register_rest_route( $this->namespace, "/$this->rest_base/use-coupon", [
			[
				'methods'  => 'POST',
				'callback' => [ $this, 'use_coupon' ],

			],
		] );
	}

	function get_cost( WP_REST_Request $request ) {
		wp_send_json_success( get_field( 'cost', 'option' ) );
	}

	function cancel_payment( WP_REST_Request $request ) {
		$data    = json_decode( $request->get_body(), true );
		$user_id = get_option( $data['token'] );
		if ( ! empty( $user_id ) ) {
			$user = get_user_by( 'ID', $user_id );

			if ( $user !== false && ! is_wp_error( $user ) && user_can( $user_id, 'create_athlete' ) ) {
				if ( $data['cancellationToken'] === 'aB03Eckqbnwdfqwe233214mwAMomfMewe332' ) {
					$payment_id = $data['payment_id'];

					update_field( 'payment_status', 'canceled', $payment_id );
					player_key_add_notification( $user_id, get_user_meta( $user_id, 'current-role', true ), 'Payment #' . $payment_id . ' canceled', 'notice' );


					delete_post_meta( $payment_id, 'payment_token' );
					delete_post_meta( $payment_id, 'token_timestamp' );
				}

				wp_send_json_error( '' );
			}
		}
	}

	function check_payment( WP_REST_Request $request ) {
		$data    = json_decode( $request->get_body(), true );
		$user_id = get_option( $data['token'] );
		if ( ! empty( $user_id ) ) {
			$user = get_user_by( 'ID', $user_id );

			if ( $user !== false && ! is_wp_error( $user ) && user_can( $user_id, 'create_athlete' ) ) {
				$payment_token = $data['payment_token'];
				$payment_id    = $data['payment_id'];

				$payment_token_timestamp = get_post_meta( $payment_id, 'token_timestamp', true );

				if ( wp_hash( $payment_id . $user_id . $payment_token_timestamp ) === $payment_token ) {
					update_field( 'payment_status', 'paid', $payment_id );

					$athlete = get_field( 'athlete', $payment_id );
					update_field( 'payment_status', 'paid', $athlete->ID );
					player_key_add_notification( $user_id, get_user_meta( $user_id, 'current-role', true ), 'Payment #' . $payment_id . ' for ' . $athlete->post_title . ' successfully paid', 'info' );

					delete_post_meta( $payment_id, 'payment_token' );
					delete_post_meta( $payment_id, 'token_timestamp' );


					wp_send_json_success();
				}
			}
		}

		wp_send_json_error();
	}

	function get_payments( WP_REST_Request $request ) {
		$data    = json_decode( $request->get_body(), true );
		$user_id = get_option( $data['token'] );

		if ( ! empty( $user_id ) ) {
			$user = get_user_by( 'ID', $user_id );

			if ( $user !== false && ! is_wp_error( $user ) && user_can( $user_id, 'create_athlete' ) ) {
				$payments = get_posts( [
					'numberposts' => - 1,
					'post_type'   => 'payment',
					'meta_query'  => [
						[
							'key'   => 'payer',
							'value' => $user_id,
						]
					]
				] );

				if ( ! empty( $payments ) ) {
					$payments_data = [];
					foreach ( $payments as $payment ) {
						$athlete         = get_field( 'athlete', $payment->ID );
						$payments_data[] = [
							'ID'      => $payment->post_title,
							'athlete' => $athlete->first_name . ' ' . $athlete->last_name,
							'date'    => $payment->post_date,
							'status'  => get_field( 'payment_status', $payment->ID )
						];
					}

					wp_send_json_success( $payments_data );
				}
			}
		}

		wp_send_json_error();
	}

	function get_payment_token( WP_REST_Request $request ) {
		$data    = json_decode( $request->get_body(), true );
		$user_id = get_option( $data['token'] );
		if ( ! empty( $user_id ) ) {
			$user = get_user_by( 'ID', $user_id );

			if ( $user !== false && ! is_wp_error( $user ) && user_can( $user_id, 'create_athlete' ) ) {
				$payment_id = wp_insert_post( [
					'post_title'  => $data['athleteId'],
					'post_type'   => 'payment',
					'post_author' => $user_id,
					'post_status' => 'publish',
				] );

				if ( ! is_wp_error( $payment_id ) ) {
					wp_update_post( [
						'ID'         => $payment_id,
						'post_title' => $payment_id . $data['athleteId'] . '.' . $user_id
					] );

					update_field( 'athlete', $data['athleteId'], $payment_id );
					update_field( 'payer', $user_id, $payment_id );
					update_field( 'payment_status', 'pending', $payment_id );

					$token_timestamp = time();
					$payment_token   = wp_hash( $payment_id . $user_id . $token_timestamp );
					add_post_meta( $payment_id, 'payment_token', $payment_token );
					add_post_meta( $payment_id, 'token_timestamp', $token_timestamp );

					$secret_key = get_field( 'secret_key', 'option' );
					$cost       = get_field( 'cost', 'option' );

					if ( ! empty( $secret_key ) ) {
						wp_send_json_success( [
							'payment_token' => $payment_token,
							'payment_id'    => $payment_id,
							'secret_key'    => $secret_key,
						] );
					}

					wp_send_json_error( 'The Public key is not specified!' );
				}
			}
		}

		wp_send_json_error();
	}

	function use_coupon( WP_REST_Request $request ) {
		$data    = json_decode( $request->get_body(), true );
		$user_id = get_option( $data['token'] );
		if ( ! empty( $user_id ) ) {
			$user = get_user_by( 'ID', $user_id );

			if ( $user !== false && ! is_wp_error( $user ) && user_can( $user_id, 'create_athlete' ) ) {
				$coupon = get_posts( [
					'numberposts' => - 1,
					'post_type'   => 'coupon',
					'title'       => $data['coupon'],
				] );

				if ( ! empty( $coupon ) ) {
					if ( count( $coupon ) > 1 ) {
						wp_send_json_error( 'An error has occurred, contact your administrator' );
					}

					$coupon = $coupon[0];

					$cost               = get_field( 'cost', 'option' );
					$coupon_type        = get_field( 'type', $coupon->ID );
					$coupon_discount    = get_field( 'discount', $coupon->ID );
					$is_coupon_reusable = get_field( 'reusable', $coupon->ID );
					$coupon_destination = get_field( 'destination', $coupon->ID );

					if ( ! empty( $coupon_destination ) && $user->ID !== $coupon_destination->ID ) {
						wp_send_json_error( 'You cannot use this coupon' );
					}

					if ( $is_coupon_reusable === 'no' && get_post_meta( $coupon->ID, 'uses_number', true ) ) {
						wp_send_json_error( 'You cannot use this coupon more than once' );
					}

					if ( $coupon_type === 'fixed' ) {
						wp_send_json_success( $cost - $coupon_discount );
					}

					if ( $coupon_type === 'percentage' ) {
						wp_send_json_success( $cost - ( ( $coupon_discount / 100 ) * $cost ) );
					}
				}

				wp_send_json_error( 'Coupon not found' );
			}
		}
	}
}
