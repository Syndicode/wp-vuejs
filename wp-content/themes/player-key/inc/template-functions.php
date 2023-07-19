<?php
function player_key_admin_scripts(): void {
	$theme_version = wp_get_theme()->get( 'Version' );

	wp_enqueue_style( 'admin-styles', TEMPLATE_DIR_URI . '/src/assets/styles/admin-panel.css', [], $theme_version, 'all' );

	wp_enqueue_script( 'admin-scripts', TEMPLATE_DIR_URI . '/dist/js/admin.js', [], $theme_version );

}

add_action( 'admin_enqueue_scripts', 'player_key_admin_scripts' );

function player_key_theme_setup_setup(): void {
	register_nav_menus(
		[
			'header_nav_menu' => esc_html__( 'Header menu', 'bazooka' ),
			'footer_nav_menu' => esc_html__( 'Footer menu', 'bazooka' ),
		]
	);
}

add_action( 'after_setup_theme', 'player_key_theme_setup_setup' );
