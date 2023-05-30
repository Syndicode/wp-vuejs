<?php
define( 'TEMPLATE_DIR', get_template_directory() );
define( 'TEMPLATE_DIR_URI', get_template_directory_uri() );

/**
 * Enable Autoload
 */
require_once TEMPLATE_DIR . '/vendor/autoload.php';

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
require_once TEMPLATE_DIR . '/inc/api.php';


