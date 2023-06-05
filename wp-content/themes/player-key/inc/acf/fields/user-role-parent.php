<?php

use StoutLogic\AcfBuilder\FieldsBuilder;

function acf_add_user_role_parent_fields(): void {
	$fields = new FieldsBuilder( 'parent', [
		'title' => __( 'Associated Coaches', 'player-key' ),
	] );

	$fields->addUser( 'coaches', [
		'label'         => __( 'Coaches', 'player-key' ),
		'role'          => 'coach',
		'return_format' => 'object',
		'multiple'      => 1,
		'allow_null' => 0,
	] );

	$fields
		->addSelect( 'is_activated', [
			'label'         => __( 'Is account activated?', 'player-key' ),
			'required'      => 0,
			'choices'       => [
				'yes'     => __( 'Yes', 'player-key' ),
				'no'      => __( 'No', 'player-key' ),
				'expired' => __( 'Expired', 'player-key' ),
			],
			'default_value' => [ 'no' ],
			'allow_null'    => 0,
		] );

	$fields->setLocation( 'user_role', '==', 'parent' );

	acf_add_local_field_group( $fields->build() );
}

add_action( 'acf/init', 'acf_add_user_role_parent_fields' );
