<?php

use StoutLogic\AcfBuilder\FieldsBuilder;

function acf_add_post_type_post_fields(): void {
	$fields = new FieldsBuilder( 'post' );

	$fields->addImage( 'cover', [
		'label'    => __( 'Cover', 'player-key' ),
		'required' => 1,
	] );

	$fields->addTextarea( 'description', [
		'label'    => __( 'Description', 'player-key' ),
		'required' => 1,
	] );

	$fields->setLocation( 'post_type', '==', 'post' );

	acf_add_local_field_group( $fields->build() );
}

add_action( 'acf/init', 'acf_add_post_type_post_fields' );
