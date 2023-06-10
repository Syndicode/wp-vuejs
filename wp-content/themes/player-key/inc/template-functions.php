<?php
function player_key_admin_scripts() {
	$theme_version = wp_get_theme()->get( 'Version' );

	wp_enqueue_style( 'admin-styles', TEMPLATE_DIR_URI . '/src/assets/styles/admin-panel.css', [], $theme_version, 'all' );

}

add_action( 'admin_enqueue_scripts', 'player_key_admin_scripts' );
