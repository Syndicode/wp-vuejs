<?php

use StoutLogic\AcfBuilder\FieldsBuilder;

function acf_add_post_type_coupon_fields(): void {
	$fields = new FieldsBuilder( 'coupon' );

	$fields->addRadio( 'type', [
		'label'         => __( 'Type', 'player-key' ),
		'required'      => 1,
		'choices'       => [
			'fixed'      => __( 'Fixed discount', 'player-key' ),
			'percentage' => __( 'Percentage of cost', 'player-key' ),
		],
		'instructions'  => __( 'The value of the fixed discount should not exceed the cost', 'player-key' ),
		'default_value' => 'fixed',
	] );

	$fields->addNumber( 'discount', [
		'label'    => __( 'Discount', 'player-key' ),
		'required' => 1,
	] );

	$fields->addRadio( 'reusable', [
		'label'         => __( 'Reusable?', 'player-key' ),
		'required'      => 1,
		'choices'       => [
			'yes' => __( 'Yes', 'player-key' ),
			'no'  => __( 'No', 'player-key' ),
		],
		'default_value' => 'yes',
		'instructions'  => __( 'If the option is "no", the coupon can only be used once', 'player-key' ),
	] );

	$fields->addUser( 'destination', [
		'label'         => __( 'Who can use', 'player-key' ),
		'role'          => [ 'coach', 'parent' ],
		'allow_null'    => 1,
		'multiple'      => 0,
		'return_format' => 'object',
	] );

	$fields->setLocation( 'post_type', '==', 'coupon' );

	acf_add_local_field_group( $fields->build() );
}

add_action( 'acf/init', 'acf_add_post_type_coupon_fields' );
