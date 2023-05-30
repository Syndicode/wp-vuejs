<?php

use StoutLogic\AcfBuilder\FieldsBuilder;

function acf_add_user_role_parent_fields(): void {
	$fields = new FieldsBuilder( 'parent', [
		'title' => __( 'Associated Coach', 'player-key' ),
	] );

	$fields->addUser( 'coach', [
		'label'         => __( 'Coach', 'player-key' ),
		'required'      => 1,
		'role'          => 'coach',
		'allow_null'    => 0,
		'multiple'      => 0,
		'return_format' => 'id',
	] );

	$fields->setLocation( 'user_role', '==', 'parent' );

	acf_add_local_field_group( $fields->build() );
}

add_action( 'acf/init', 'acf_add_user_role_parent_fields' );
