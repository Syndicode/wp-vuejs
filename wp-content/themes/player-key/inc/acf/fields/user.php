<?php

use StoutLogic\AcfBuilder\FieldsBuilder;

function acf_add_user_fields(): void {
	$fields = new FieldsBuilder( 'user', [
		'title' => __( 'Additional information', 'player-key' ),
	] );

	$fields->addDatePicker('birthday', [
		'label'    => __( 'Birthday', 'player-key' ),
		'display_format' => 'm/d/Y',
		'return_format' => 'm/d/Y',
		'first_day' => 1,
	]);

	$fields->addText('address', [
		'label'    => __( 'Address', 'player-key' ),
	]);

	$fields->addText('town', [
		'label'    => __( 'Town', 'player-key' ),
	]);

	$fields->addText('state', [
		'label'    => __( 'State', 'player-key' ),
	]);

	$fields->addText('zip-code', [
		'label'    => __( 'ZIP Code', 'player-key' ),
	]);

	$fields->setLocation( 'user_role', '==', 'all' );

	acf_add_local_field_group( $fields->build() );
}

add_action( 'acf/init', 'acf_add_user_fields' );
