<?php

use StoutLogic\AcfBuilder\FieldsBuilder;

function acf_add_post_type_team_fields(): void {
	$fields = new FieldsBuilder( 'team' );

	$fields->addUser( 'coach', [
		'label'         => __( 'Coach', 'player-key' ),
		'required'      => 1,
		'role'          => 'coach',
		'allow_null'    => 0,
		'multiple'      => 0,
		'return_format' => 'id',
	] );

	$fields->setLocation( 'post_type', '==', 'team' );

	acf_add_local_field_group( $fields->build() );
}

add_action( 'acf/init', 'acf_add_post_type_team_fields' );
