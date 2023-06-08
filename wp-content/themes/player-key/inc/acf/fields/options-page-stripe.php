<?php

use StoutLogic\AcfBuilder\FieldsBuilder;

function acf_add_options_page_stripe_fields(): void {
	$fields = new FieldsBuilder( 'stripe' );

	$fields->addText( 'public_key', [
		'label'         => __( 'Public key', 'player-key' ),
		'required'      => 1,
	] );

	$fields->addText( 'secret_key', [
		'label'         => __( 'Secret key', 'player-key' ),
		'required'      => 1,
	] );

	$fields->setLocation( 'options_page', '==', 'stripe-settings' );

	acf_add_local_field_group( $fields->build() );
}

add_action( 'acf/init', 'acf_add_options_page_stripe_fields' );
