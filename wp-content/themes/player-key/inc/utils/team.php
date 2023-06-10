<?php

/**
 * @param array $columns
 *
 * @return array
 */
function player_key_add_custom_team_columns( array $columns ): array {
	$columns['coach']    = __( 'Coach', 'player-key' );
	$columns['athletes'] = __( 'Athletes', 'player-key' );

	unset( $columns['date'] );

	return $columns;
}

add_filter( 'manage_team_posts_columns', 'player_key_add_custom_team_columns' );

/**
 * @param $column_name
 * @param $post_id
 */
function player_key_fill_custom_team_columns( string $column_name, int $post_id ) {
	switch ( $column_name ) {
		case 'coach':
			$coach = get_field( 'coach', $post_id );
			if ( $coach && $coach instanceof WP_User ) {
				echo $coach->first_name . ' ' . $coach->last_name;
			}
			break;
		case 'athletes':
			$athletes = get_posts( [
				'numberposts' => - 1,
				'post_type'   => 'athlete',
				'meta_query'  => [
					[
						'key'   => 'team',
						'value' => $post_id
					]
				],
			] );

			echo ! empty( $athletes ) ? count( $athletes ) : 0;

			break;
	}
}

add_action( 'manage_team_posts_custom_column', 'player_key_fill_custom_team_columns', 10, 2 );
