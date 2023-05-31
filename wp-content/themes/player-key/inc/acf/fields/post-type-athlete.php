<?php

use StoutLogic\AcfBuilder\FieldsBuilder;

function acf_add_post_type_athlete_fields(): void {
	$fields = new FieldsBuilder( 'athlete' );

	$fields->addText( 'first_name', [
		'label'    => __( 'First Name', 'player-key' ),
		'required' => 1,
	] );

	$fields->addText( 'last_name', [
		'label'    => __( 'Last Name', 'player-key' ),
		'required' => 1,
	] );

	$fields->addUser( 'coach', [
		'label'         => __( 'Coach', 'player-key' ),
		'required'      => 1,
		'role'          => 'coach',
		'allow_null'    => 0,
		'multiple'      => 0,
		'return_format' => 'id',
	] );

	$fields->addUser( 'parent', [
		'label'         => __( 'Parent', 'player-key' ),
		'required'      => 1,
		'role'          => 'coach',
		'allow_null'    => 0,
		'multiple'      => 0,
		'return_format' => 'id',
	] );

	$fields->addPostObject( 'team', [
		'label'         => __( 'Team', 'player-key' ),
		'required'      => 1,
		'post_type'     => [ 'team' ],
		'return_format' => 'object',
		'ui'            => 1,
	] );

	$fields->setLocation( 'post_type', '==', 'athlete' );

	acf_add_local_field_group( $fields->build() );
}

add_action( 'acf/init', 'acf_add_post_type_athlete_fields' );
