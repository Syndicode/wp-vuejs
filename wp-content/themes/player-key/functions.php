<?php
define( 'TEMPLATE_DIR', get_template_directory() );
define( 'TEMPLATE_DIR_URI', get_template_directory_uri() );

/**
 * Enable Autoload
 */
require_once TEMPLATE_DIR . '/vendor/autoload.php';

$dotenv = Dotenv\Dotenv::createImmutable( TEMPLATE_DIR );
$dotenv->safeLoad();

$URL = get_home_url();

define( 'VITE_SERVER', ! empty( $_ENV ) && ! empty( $_ENV['VITE_SERVER_PORT'] ) ? "{$URL}:{$_ENV['VITE_SERVER_PORT']}" : "{$URL}:3002" );
define( 'VITE_ENTRY_POINT', ! empty( $_ENV ) && ! empty( $_ENV['VITE_ENTRY_POINT'] ) ? $_ENV['VITE_ENTRY_POINT'] : '/src/main.js' );
define( 'WP_ENVIRONMENT_TYPE', ! empty( $_ENV ) && ! empty( $_ENV['WP_ENVIRONMENT_TYPE'] ) ? $_ENV['WP_ENVIRONMENT_TYPE'] : 'production' );

/**
 * Template function.
 */
require TEMPLATE_DIR . '/inc/template-functions.php';

/**
 * Register new custom taxonomies
 */
require_once TEMPLATE_DIR . '/inc/register-taxonomies.php';

/**
 * Register new custom post types
 */
require_once TEMPLATE_DIR . '/inc/register-post-types.php';

/**
 * Advanced Custom Fields
 */
require_once TEMPLATE_DIR . '/inc/acf.php';

/**
 * Utils
 */
require_once TEMPLATE_DIR . '/inc/utils.php';

/**
 * API
 */
require_once TEMPLATE_DIR . '/inc/rest-api.php';

$style_src  = WP_ENVIRONMENT_TYPE !== 'development' ? player_key_vite_asset( 'src/main.css' ) : null;
$script_src = WP_ENVIRONMENT_TYPE === 'development' ? VITE_SERVER . VITE_ENTRY_POINT : player_key_vite_asset( 'src/main.js' );

define( 'STYLE_URL', $style_src );
define( 'SCRIPT_URL', $script_src );
