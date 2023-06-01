<?php

use StoutLogic\AcfBuilder\FieldsBuilder;

function acf_add_user_role_parent_fields(): void {
	$fields = new FieldsBuilder( 'parent', [
		'title' => __( 'Associated Coach', 'player-key' ),
	] );

	$fields->addUser( 'coach', [
		'label'         => __( 'Coach', 'player-key' ),
		'required'      => 0,
		'role'          => 'coach',
		'allow_null'    => 0,
		'multiple'      => 1,
		'return_format' => 'object',
	] );

	$fields
		->addSelect( 'is_activated', [
			'label'         => __( 'Is account activated?', 'player-key' ),
			'required'      => 0,
			'choices'       => [
				'yes' => __( 'Yes', 'player-key' ),
				'no'  => __( 'No', 'player-key' ),
			],
			'default_value' => [ 'no' ],
			'allow_null'    => 0,
		] );

	$fields->setLocation( 'user_role', '==', 'parent' );

	acf_add_local_field_group( $fields->build() );
}

add_action( 'acf/init', 'acf_add_user_role_parent_fields' );
