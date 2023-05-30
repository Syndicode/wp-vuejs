<?php
/**
 *
 */
function acf_init_block_accordion(): void {

	$fields = require_once __DIR__ . '/fields.php';
	acf_add_local_field_group( $fields->build() );

	acf_register_block_type( [
		'name'            => 'accordion',
		'title'           => __( 'Accordion', 'sesac' ),
		'description'     => __( 'Accordion Block', 'sesac' ),
		'render_template' => 'inc/acf/blocks/accordion/template.php',
		'category'        => 'player-key',
		'mode'            => 'edit',
		'align'           => 'full',
		'icon'            => 'editor-kitchensink',
		'keywords'        => [ 'accordion' ],
	] );
}

add_action( 'acf/init', 'acf_init_block_accordion' );
