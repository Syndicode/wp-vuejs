<?php

/**
 * @param array $columns
 *
 * @return array
 */
function player_key_add_custom_payment_columns( array $columns ): array {
	$columns['athlete']        = __( 'Athlete', 'player-key' );
	$columns['payer']          = __( 'Payer', 'player-key' );
	$columns['payment_status'] = __( 'Status', 'player-key' );
	$columns['datetime'] = __( 'Date Time', 'player-key' );

	unset( $columns['date'] );

	return $columns;
}

add_filter( 'manage_payment_posts_columns', 'player_key_add_custom_payment_columns' );

/**
 * @param $column_name
 * @param $post_id
 */
function player_key_fill_custom_payment_columns( string $column_name, int $post_id ) {
	switch ( $column_name ) {
		case 'athlete':
			$athlete = get_field( 'athlete', $post_id );
			if ( $athlete instanceof WP_Post ) {
				echo $athlete->post_title;
			}
			break;
		case 'payer':
			$payer = get_field( 'payer', $post_id );
			if ( $payer && $payer instanceof WP_User ) {
				echo $payer->first_name . ' ' . $payer->last_name;
			}
			break;
		case 'payment_status':
			$payment_status = get_field( 'payment_status', $post_id );
			if ( ! empty( $payment_status ) ) {
				echo "<span class='entity-status entity-status--payment-status {$payment_status}'>{$payment_status}</span>";
			}
			break;

		case 'datetime':
			echo get_the_date( "Y-m-d H:i:s", $post_id );
			break;

	}
}

add_action( 'manage_payment_posts_custom_column', 'player_key_fill_custom_payment_columns', 10, 2 );
