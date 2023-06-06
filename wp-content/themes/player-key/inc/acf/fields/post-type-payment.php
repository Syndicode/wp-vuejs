<?php

use StoutLogic\AcfBuilder\FieldsBuilder;

function acf_add_post_type_payment_fields(): void {
	$fields = new FieldsBuilder( 'payment' );

	$fields->addPostObject( 'athlete', [
		'label'         => __( 'Athlete', 'player-key' ),
		'required'      => 1,
		'post_type'     => [ 'athlete' ],
		'allow_null'    => 0,
		'multiple'      => 0,
		'return_format' => 'object',
	] );

	$fields->addUser( 'payer', [
		'label'         => __( 'Payer', 'player-key' ),
		'required'      => 1,
		'role'          => [
			0 => 'coach',
			1 => 'parent',
		],
		'allow_null'    => 0,
		'multiple'      => 0,
		'return_format' => 'object',
	] );

	$fields->addSelect( 'payment_status', [
		'label'         => __( 'Status', 'player-key' ),
		'required'      => 1,
		'choices'       => [
			'paid'     => __( 'Paid', 'player-key' ),
			'unpaid'   => __( 'Unpaid', 'player-key' ),
			'canceled' => __( 'Canceled', 'player-key' ),
			'pending'  => __( 'Pending', 'player-key' ),
			'error'    => __( 'Error', 'player-key' ),
		],
		'default_value' => 'unpaid',
	] );

	$fields->setLocation( 'post_type', '==', 'payment' );

	acf_add_local_field_group( $fields->build() );
}

add_action( 'acf/init', 'acf_add_post_type_payment_fields' );
