<?php

namespace api;

use WP_REST_Controller;
use WP_REST_Request;

class PKI_REST_Wordpress_Controller extends WP_REST_Controller {

	public function __construct() {
		$this->namespace = 'wp/v2';
	}

	public function register_routes(): void {

		register_rest_route( $this->namespace, "/menus/get-menu", [
			[
				'callback' => [ $this, 'get_menu' ],
				'methods'  => 'GET',
				'args'     => [
					'menu-id' => [
						'required' => true,
					]
				],
			],
		] );
	}

	/**
	 * @param WP_REST_Request $request
	 *
	 * @return void
	 */
	public function get_menu( WP_REST_Request $request ): void {
		$menu_id         = $request->get_param( 'menu-id' );
		$menu_items      = wp_get_nav_menu_items( $menu_id );
		$menu_items_data = [];

		if ( ! empty( $menu_items ) ) {
			foreach ( $menu_items as $menu_item ) {
				$menu_items_data[] = [
					'title' => $menu_item->title,
					'url'   => str_replace( home_url(), '', $menu_item->url ),
				];
			}

			wp_send_json_success( $menu_items_data );
		}

		wp_send_json_error();
	}
}
