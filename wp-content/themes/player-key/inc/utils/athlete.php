<?php


/**
 * @param array $columns
 *
 * @return array
 */
function player_key_add_custom_athlete_columns( array $columns ): array {
	$columns['parent']         = __( 'Parent', 'player-key' );
	$columns['team']           = __( 'Team', 'player-key' );
	$columns['coach']          = __( 'Coach', 'player-key' );
	$columns['status']         = __( 'Status', 'player-key' );
	$columns['payment_status'] = __( 'Payment status', 'player-key' );


	return $columns;
}

add_filter( 'manage_athlete_posts_columns', 'player_key_add_custom_athlete_columns' );

/**
 * @param $column_name
 * @param $post_id
 */
function player_key_fill_custom_athlete_columns( string $column_name, int $post_id ): void {
	switch ( $column_name ) {
		case 'parent':
			$parent = get_field( 'parent', $post_id );
			if ( $parent && $parent instanceof WP_User ) {
				echo $parent->first_name . ' ' . $parent->last_name;
			}
			break;
		case 'team':
			$team = get_field( 'team', $post_id );
			if ( $team ) {
				echo $team->post_title;
			}
			break;
		case 'coach':
			$coach = get_field( 'coach', $post_id );
			if ( $coach && $coach instanceof WP_User ) {
				echo $coach->first_name . ' ' . $coach->last_name;
			}
			break;
		case 'status':
			$status = get_field( 'status', $post_id );
			echo "<span class='entity-status entity-status--status {$status}'>{$status}</span>";
			break;
		case 'payment_status':
			$payment_status = get_field( 'payment_status', $post_id );
			$payment_status = empty( $payment_status ) ? 'unpaid' : $payment_status;
			echo "<span class='entity-status entity-status--payment-status {$payment_status}'>{$payment_status}</span>";
			break;
		case 'date':
			$status = get_field( 'status', $post_id );
			echo "<span class='entity-status entity-status--status {$status}'>{$status}</span>";
			break;
	}
}

add_action( 'manage_athlete_posts_custom_column', 'player_key_fill_custom_athlete_columns', 10, 2 );


/**
 * @param string $post_type
 *
 * @return void
 */
function player_key_add_athlete_list_filter_by_status( string $post_type ): void {
	if ( $post_type === 'athlete' ) {

		$selected_status = 'all';

		if ( isset( $_GET['status'] ) && ! empty( $_GET['status'] ) ) {
			$selected_status = $_GET['status'];
		}

		$options = [
			'incomplete',
			'pending',
			'verified',
			'rejected',
		];

		$select   = "<select name='status'>";
		$selected = selected( $selected_status, 'all', false );
		$select   .= "<option {$selected} value='all'>" . __( 'All Statuses', 'player-key' ) . "</option>";

		foreach ( $options as $option ) {
			$selected = selected( $selected_status, $option, false );
			$select   .= "<option {$selected} value='{$option}'>" . ucfirst( $option ) . "</option>";
		}

		$select .= "</select>";

		echo $select;
	}
}

add_action( 'restrict_manage_posts', 'player_key_add_athlete_list_filter_by_status' );

/**
 * @param string $post_type
 *
 * @return void
 */
function player_key_add_athlete_list_filter_by_payment_status( string $post_type ): void {
	if ( $post_type === 'athlete' ) {

		$selected_status = 'all';

		if ( isset( $_GET['payment_status'] ) && ! empty( $_GET['payment_status'] ) ) {
			$selected_status = $_GET['payment_status'];
		}

		$options = [
			'paid',
			'unpaid',
		];

		$select   = "<select name='payment_status'>";
		$selected = selected( $selected_status, 'all', false );
		$select   .= "<option {$selected} value='all'>" . __( 'All Payment statuses', 'player-key' ) . "</option>";

		foreach ( $options as $option ) {
			$selected = selected( $selected_status, $option, false );
			$select   .= "<option {$selected} value='{$option}'>" . ucfirst( $option ) . "</option>";
		}

		$select .= "</select>";

		echo $select;
	}
}

add_action( 'restrict_manage_posts', 'player_key_add_athlete_list_filter_by_payment_status' );

/**
 * @param string $post_type
 *
 * @return void
 */
function player_key_add_athlete_list_filter_by_coach( string $post_type ): void {
	if ( $post_type === 'athlete' ) {

		$selected_coach = 'all';

		$coaches = get_users( [
			'role' => 'coach',
		] );

		if ( isset( $_GET['coach'] ) && ! empty( $_GET['coach'] ) ) {
			$selected_coach = $_GET['coach'];
		}

		if ( ! empty( $coaches ) ) {

			$options = [];
			foreach ( $coaches as $coach ) {
				$options[] = [
					'name' => $coach->first_name . ' ' . $coach->last_name,
					'id'   => $coach->ID,
				];
			}


			$select   = "<select name='coach'>";
			$selected = selected( $selected_coach, 'all', false );
			$select   .= "<option {$selected} value='all'>" . __( 'All Coaches', 'player-key' ) . "</option>";

			foreach ( $options as $option ) {
				$selected = selected( $selected_coach, $option['id'], false );
				$select   .= "<option {$selected} value='{$option['id']}'>{$option['name']}</option>";
			}

			$select .= "</select>";

			echo $select;
		}
	}
}

add_action( 'restrict_manage_posts', 'player_key_add_athlete_list_filter_by_coach' );

/**
 * @param WP_Query $query
 *
 * @return void
 */
function player_key_add_athlete_list_filter_handler( WP_Query $query ): void {
	$current_screen = function_exists( 'get_current_screen' ) ? get_current_screen() : null;

	if ( ! is_admin() || empty( $current_screen->post_type ) || $current_screen->post_type !== 'athlete' || $current_screen->id !== 'edit-athlete' ) {
		return;
	}

	if ( $query->is_main_query( $query ) ) {

		$filter_fields = [];

		if ( isset( $_GET['status'] ) && ! empty( $_GET['status'] ) && $_GET['status'] !== 'all' ) {
			$filter_fields['status'] = [
				'value'   => $_GET['status'],
				'compare' => '=',
			];
		}

		if ( isset( $_GET['payment_status'] ) && ! empty( $_GET['payment_status'] ) && $_GET['payment_status'] !== 'all' ) {
			$filter_fields['payment_status'] = [
				'value'   => $_GET['payment_status'],
				'compare' => '=',
			];
		}

		if ( isset( $_GET['coach'] ) && ! empty( $_GET['coach'] ) && $_GET['coach'] !== 'all' ) {
			$filter_fields['coach'] = [
				'value'   => $_GET['coach'],
				'compare' => '=',
			];
		}

		if ( ! empty( $filter_fields ) ) {
			$meta_query = [];

			if ( count( $filter_fields ) > 1 ) {
				$meta_query['relation'] = 'AND';
			}

			foreach ( $filter_fields as $field => $field_data ) {

				$meta_query[] = [
					'key'     => $field,
					'value'   => $field_data['value'],
					'compare' => $field_data['compare'],
				];
			}

			$query->set( 'meta_query', $meta_query );
		}
	}
}

add_action( 'pre_get_posts', 'player_key_add_athlete_list_filter_handler' );

add_filter( 'months_dropdown_results', '__return_empty_array' );
