<?php
/**
 * Create Admin role
 * @return void
 */
function player_key_create_admin_role(): void {
	$coach_role = get_role( 'admin' );
	if ( $coach_role === null ) {
		$coach_role = add_role( 'admin', __( 'Admin', 'player-key' ), [] );

		$coach_role->add_cap( 'create_team' );
		$coach_role->add_cap( 'create_athlete' );
		$coach_role->add_cap( 'create_coach' );
	}
}

add_action( 'init', 'player_key_create_admin_role' );

/**
 * @param int $user_id
 * @param string $role
 * @param string[] $old_roles
 *
 * @return void
 */
function player_key_on_admin_validated( int $user_id, string $role, array $old_roles ): void {
	if ( $old_roles[0] === 'admin' && $role === 'administrator' ) {
		$user    = get_user_by( 'ID', $user_id );
		$url     = get_site_url() . '/wp-admin/';
		$message = file_get_contents( TEMPLATE_DIR . '/inc/templates/emails/administrator-validated.php' );
		$message = str_replace( [
			'{{url}}',
		], [
			$url,
		], $message );

		wp_mail( $user->user_email, 'You have been verified as an admin!', $message, [
			'content-type: text/html',
		] );

		update_field( 'is_valid', true, 'user_' . $user_id );
	}
}

add_action( 'set_user_role', 'player_key_on_admin_validated', 10, 3 );

