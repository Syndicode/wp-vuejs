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

