<?php

function player_key_add_notification( int $user_id, string $current_user_role, string $message, string $type ): int|false {
	$existing_notification = get_posts( [
		'numberposts' => 1,
		'post_type'   => 'notification',
		's'           => $message,
		'exact'       => true,
		'sentence'    => true,
		'meta_query'  => [
			'relation' => 'AND',
			[
				'key'   => 'recipient',
				'value' => $user_id,
			],
			[
				'key'   => 'recipient_role',
				'value' => get_user_meta( $user_id, 'current-role', true ),
			],
		],
	] );

	if ( empty( $existing_notification ) ) {
		$notification_data = [
			'post_title'  => sanitize_text_field( $message ),
			'post_status' => 'publish',
			'post_type'   => 'notification',
		];

		$notification_id = wp_insert_post( $notification_data );

		if ( ! is_wp_error( $notification_id ) ) {
			update_post_meta( $notification_id, 'recipient', $user_id );
			update_post_meta( $notification_id, 'recipient_role', $current_user_role );
			update_post_meta( $notification_id, 'type', $type );
			update_post_meta( $notification_id, 'status', 'new' );

			return $notification_id;
		}
	}

	return false;
}
