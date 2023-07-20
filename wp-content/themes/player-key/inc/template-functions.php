<?php
/**
 * @return void
 */
function player_key_admin_scripts(): void {
	$theme_version = wp_get_theme()->get( 'Version' );

	wp_enqueue_style( 'admin-styles', TEMPLATE_DIR_URI . '/src/assets/styles/admin-panel.css', [], $theme_version, 'all' );

	wp_enqueue_script( 'admin-scripts', TEMPLATE_DIR_URI . '/dist/js/admin.js', [], $theme_version );

}

add_action( 'admin_enqueue_scripts', 'player_key_admin_scripts' );

/**
 * @return void
 */
function player_key_theme_setup_setup(): void {

	// Initialize Navigation menus
	register_nav_menus(
		[
			'header_nav_menu' => esc_html__( 'Header menu', 'bazooka' ),
			'footer_nav_menu' => esc_html__( 'Footer menu', 'bazooka' ),
		]
	);

	// Added new image size
	add_image_size( 'athlete-headshot', 400, 400, true );
}

add_action( 'after_setup_theme', 'player_key_theme_setup_setup' );

/**
 * @param array $sizes
 *
 * @return array
 */
function player_key_delete_intermediate_image_sizes( array $sizes ): array {

	return array_diff( $sizes, [
		'medium',
		'medium_large',
		'large',
		'1536x1536',
		'2048x2048',
	] );
}

add_filter( 'intermediate_image_sizes', 'player_key_delete_intermediate_image_sizes' );
