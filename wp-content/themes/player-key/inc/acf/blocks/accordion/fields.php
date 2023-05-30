<?php

use StoutLogic\AcfBuilder\FieldsBuilder;

$fields = new FieldsBuilder( 'accordion' );

$fields->addText( 'heading', [
	'label' => __( 'Heading', 'player-key' ),
] );

$fields
	->addRepeater( 'accordion', [
		'label'        => __( 'Accordion', 'player-key' ),
		'button_label' => __( 'Add Accordion item', 'player-key' ),
		'layout'       => 'table',
	] )
	->addText( 'title', [
		'label' => __( 'Title', 'player-key' ),
	] )
	->addTextarea( 'content', [
		'label' => __( 'Content', 'player-key' ),
		'rows'  => 4,
		'new_lines' => 'br',
	] )
	->setLocation( 'block', '==', 'acf/accordion' );

return $fields;
