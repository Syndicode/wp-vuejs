<?php

require_once TEMPLATE_DIR . '/inc/utils/admin.php';
require_once TEMPLATE_DIR . '/inc/utils/athlete.php';
require_once TEMPLATE_DIR . '/inc/utils/coach.php';
require_once TEMPLATE_DIR . '/inc/utils/parent.php';
require_once TEMPLATE_DIR . '/inc/utils/payment.php';
require_once TEMPLATE_DIR . '/inc/utils/team.php';
require_once TEMPLATE_DIR . '/inc/utils/notification.php';

/**
 * Vite manifest parser which returns a path to the entry file
 *
 * @param string $entry
 *
 * @return string
 * @throws JsonException
 */
function player_key_vite_asset( string $entry ): string {
	static $manifest;
	static $manifest_path;

	if ( ! $manifest_path ) {
		$manifest_path = get_theme_file_path( '/dist/manifest.json' );
	}

	if ( ! file_exists( $manifest_path ) ) {
		player_key_show_error( "Error locating <code{$manifest_path}</code>.", 'File not found' );
	}

	if ( ! $manifest ) {
		// @codingStandardsIgnoreLine
		$manifest = json_decode( file_get_contents( $manifest_path ), true, 512, JSON_THROW_ON_ERROR );
	}

	return isset( $manifest[ $entry ] )
		? TEMPLATE_DIR_URI . '/dist/' . $manifest[ $entry ]['file']
		: TEMPLATE_DIR_URI . '/dist/' . $entry;
}

/**
 * Renders the error
 *
 * @param $message
 * @param string $subtitle
 * @param string $title
 *
 * @return void
 */
function player_key_show_error( $message, string $subtitle = '', string $title = '' ): void {
	$error_title   = $title ?: __( 'Error', 'magnite-rebuild' );
	$error_message = "<h1>{$error_title}<br><small>{$subtitle}</small></h1><p>{$message}</p>";

	if ( ! is_admin() ) {
		wp_die( wp_kses_post( $error_message ) );
	}

	add_action( 'admin_notices', static function () use ( $error_message ) {
		echo '<div class="notice notice-error"><p>' . wp_kses_post( $error_message ) . '</p></div>';
	} );
}
