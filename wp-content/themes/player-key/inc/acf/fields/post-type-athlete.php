<?php

use StoutLogic\AcfBuilder\FieldsBuilder;

function acf_add_post_type_athlete_fields(): void {
	$fields = new FieldsBuilder( 'athlete' );

	$fields->addImage( 'photo', [
		'label' => __( 'Photo', 'player-key' ),
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
		'label' => __( 'Report card', 'player-key' ),
	] );

	$fields->addFile( 'certificate', [
		'label' => __( 'Birth certificate/ID', 'player-key' ),
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

	$fields->setLocation( 'post_type', '==', 'athlete' );

	acf_add_local_field_group( $fields->build() );
}

add_action( 'acf/init', 'acf_add_post_type_athlete_fields' );
