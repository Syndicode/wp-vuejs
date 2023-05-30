<?php
/**
 * Create Coach role
 * @return void
 */
function player_key_create_coach_role(): void {
	$coach_role = get_role( 'coach' );
	if ( $coach_role === null ) {
		$coach_role = add_role( 'coach', __( 'Coach', 'player-key' ), [] );

		$coach_role->add_cap( 'create_team' );
		$coach_role->add_cap( 'create_parent' );
		$coach_role->add_cap( 'create_athlete' );
	}
}

add_action( 'init', 'player_key_create_coach_role' );

