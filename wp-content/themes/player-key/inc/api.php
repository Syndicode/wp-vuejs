<?php
require_once TEMPLATE_DIR . '/inc/api/PKI_REST_Users_Controller.php';
require_once TEMPLATE_DIR . '/inc/api/PKI_REST_Entities_Controller.php';
require_once TEMPLATE_DIR . '/inc/api/PKI_REST_Payments_Controller.php';

use api\PKI_REST_Users_Controller;
use api\PKI_REST_Entities_Controller;
use api\PKI_REST_Payments_Controller;

/**
 * @return void
 */
function player_key_register_custom_rest_routes(): void {
	$users_controller = new PKI_REST_Users_Controller();
	$users_controller->register_routes();

	$entities_controller = new PKI_REST_Entities_Controller();
	$entities_controller->register_routes();

	$payments_controller = new PKI_REST_Payments_Controller();
	$payments_controller->register_routes();
}

add_action( 'rest_api_init', 'player_key_register_custom_rest_routes' );
