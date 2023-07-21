<?php

use StoutLogic\AcfBuilder\FieldsBuilder;

function acf_add_post_type_athlete_fields(): void {
	$fields = new FieldsBuilder( 'athlete' );

	$fields->addImage( 'headshot', [
		'label'    => __( 'Headshot', 'player-key' ),
		'required' => 1,
	] );

	$fields->addText( 'first_name', [
		'label'    => __( 'First Name', 'player-key' ),
		'required' => 1,
	] );

	$fields->addText( 'last_name', [
		'label'    => __( 'Last Name', 'player-key' ),
		'required' => 1,
	] );

	$fields->addDatePicker( 'birthday', [
		'label'          => __( 'Birthday', 'player-key' ),
		'display_format' => 'm/d/Y',
		'return_format'  => 'm/d/Y',
		'first_day'      => 1,
	] );

	$fields->addText( 'current_grade', [
		'label'    => __( 'Current grade', 'player-key' ),
		'required' => 1,
	] );

	$fields->addUser( 'coach', [
		'label'         => __( 'Coach', 'player-key' ),
		'required'      => 1,
		'role'          => 'coach',
		'allow_null'    => 0,
		'multiple'      => 0,
		'return_format' => 'object',
	] );

	$fields->addUser( 'parent', [
		'label'         => __( 'Parent', 'player-key' ),
		'required'      => 1,
		'role'          => 'parent',
		'allow_null'    => 0,
		'multiple'      => 0,
		'return_format' => 'object',
	] );

	$fields->addPostObject( 'team', [
		'label'         => __( 'Team', 'player-key' ),
		'required'      => 1,
		'post_type'     => [ 'team' ],
		'return_format' => 'object',
		'ui'            => 1,
	] );

	$fields->addFile( 'card', [
		'label'    => __( 'Report card', 'player-key' ),
		'required' => 1,
	] );

	$fields->addFile( 'certificate', [
		'label'    => __( 'Birth certificate/ID', 'player-key' ),
		'required' => 1,
	] );

	$fields->addUrl( 'social_link', [
		'label' => __( 'Social link', 'player-key' ),
	] );

	$fields->addSelect( 'status', [
		'label'         => __( 'Status', 'player-key' ),
		'required'      => 1,
		'choices'       => [
			'incomplete' => __( 'Incomplete', 'player-key' ),
			'pending'    => __( 'Pending', 'player-key' ),
			'verified'   => __( 'Verified', 'player-key' ),
			'rejected'   => __( 'Rejected', 'player-key' ),
		],
		'default_value' => 'incomplete',
	] );

	$fields->addSelect( 'payment_status', [
		'label'         => __( 'Payment status', 'player-key' ),
		'required'      => 1,
		'choices'       => [
			'paid'   => __( 'Paid', 'player-key' ),
			'unpaid' => __( 'Unpaid', 'player-key' ),
		],
		'default_value' => 'unpaid',
	] );

	$fields->setLocation( 'post_type', '==', 'athlete' );

	acf_add_local_field_group( $fields->build() );
}

add_action( 'acf/init', 'acf_add_post_type_athlete_fields' );

/**
 * @param mixed $value
 * @param string $post_id
 * @param array $field
 *
 * @return mixed
 */
function acf_update_status_field( mixed $value, string $post_id, array $field ): mixed {

	$previous_value = get_field( 'status', $post_id );

	if ( $value === 'verified' && $previous_value !== 'verified' ) {
		$athlete_first_name = get_field( 'first_name', $post_id );
		$athlete_last_name  = get_field( 'last_name', $post_id );

		$coach  = get_field( 'coach', $post_id );
		$parent = get_field( 'parent', $post_id );

		$url = get_site_url() . '/sign-in';

		// Email for Coach
		$message = file_get_contents( TEMPLATE_DIR . '/inc/templates/emails/athlete-verified.php' );
		$message = str_replace( [
			'{{url}}',
			'{{user}}',
			'{{athlete}}',
		], [
			$url,
			$coach->first_name . ' ' . $coach->last_name,
			$athlete_first_name . ' ' . $athlete_last_name,

		], $message );

		wp_mail( $coach->user_email, 'Your account has been successfully validated!', $message, [
			'content-type: text/html',
		] );

		// Email for PArent
		$message = file_get_contents( TEMPLATE_DIR . '/inc/templates/emails/athlete-verified.php' );
		$message = str_replace( [
			'{{url}}',
			'{{user}}',
			'{{athlete}}',
		], [
			$url,
			$parent->first_name . ' ' . $parent->last_name,
			$athlete_first_name . ' ' . $athlete_last_name,

		], $message );

		wp_mail( $parent->user_email, 'Your athlete has been verified!', $message, [
			'content-type: text/html',
		] );
	}

	return $value;
}

add_filter( 'acf/update_value/key=field_athlete_status', 'acf_update_status_field', 10, 3 );
