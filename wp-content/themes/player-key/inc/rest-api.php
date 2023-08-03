<?php
require_once TEMPLATE_DIR . '/inc/rest-api/PKI_REST_Athletes_Controller.php';
//require_once TEMPLATE_DIR . '/inc/rest-api/PKI_REST_Entities_Controller.php';
require_once TEMPLATE_DIR . '/inc/rest-api/PKI_REST_Notifications_Controller.php';
require_once TEMPLATE_DIR . '/inc/rest-api/PKI_REST_Parents_Controller.php';
require_once TEMPLATE_DIR . '/inc/rest-api/PKI_REST_Payments_Controller.php';
require_once TEMPLATE_DIR . '/inc/rest-api/PKI_REST_Teams_Controller.php';
require_once TEMPLATE_DIR . '/inc/rest-api/PKI_REST_Users_Controller.php';
require_once TEMPLATE_DIR . '/inc/rest-api/PKI_REST_Wordpress_Controller.php';

use \api\PKI_REST_Athletes_Controller;
//use api\PKI_REST_Entities_Controller;
use api\PKI_REST_Notifications_Controller;
use api\PKI_REST_Parents_Controller;
use api\PKI_REST_Payments_Controller;
use api\PKI_REST_Teams_Controller;
use api\PKI_REST_Users_Controller;
use api\PKI_REST_Wordpress_Controller;

/**
 * @return void
 */
function player_key_register_custom_rest_routes(): void {
	$athletes_controller = new PKI_REST_Athletes_Controller();
	$athletes_controller->register_routes();

//	$entities_controller = new PKI_REST_Entities_Controller();
//	$entities_controller->register_routes();

	$notification_controller = new PKI_REST_Notifications_Controller();
	$notification_controller->register_routes();

	$parents_controller = new PKI_REST_Parents_Controller();
	$parents_controller->register_routes();

	$payments_controller = new PKI_REST_Payments_Controller();
	$payments_controller->register_routes();

	$teams_controller = new PKI_REST_Teams_Controller();
	$teams_controller->register_routes();

	$users_controller = new PKI_REST_Users_Controller();
	$users_controller->register_routes();

	$wordpress_controller = new PKI_REST_Wordpress_Controller();
	$wordpress_controller->register_routes();
}

add_action( 'rest_api_init', 'player_key_register_custom_rest_routes' );
