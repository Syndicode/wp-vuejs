<?php
/**
 * Create Parent role
 * @return void
 */
function player_key_create_parent_role(): void {
	$coach_role = get_role( 'parent' );
	if ( $coach_role === null ) {
		$coach_role = add_role( 'parent', __( 'Parent', 'player-key' ), [] );

		$coach_role->add_cap( 'create_athlete' );
	}
}

add_action( 'init', 'player_key_create_parent_role' );
