<?php

use StoutLogic\AcfBuilder\FieldsBuilder;

function acf_add_options_page_payment_fields(): void {
	$fields = new FieldsBuilder( 'payment-settings', [
		'title' => __( 'Payment', 'player-key' ),
	] );

	$fields->addNumber( 'cost', [
		'label'         => __( 'The cost of registration of the athlete (USD)', 'player-key' ),
		'required'      => 1,
	] );

	$fields->setLocation( 'options_page', '==', 'payment-settings' );

	acf_add_local_field_group( $fields->build() );
}

add_action( 'acf/init', 'acf_add_options_page_payment_fields' );
