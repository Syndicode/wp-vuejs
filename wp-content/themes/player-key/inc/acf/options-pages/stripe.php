<?php
if ( function_exists( 'acf_add_options_page' ) ) {

	acf_add_options_page( array(
		'page_title' => 'Stripe settings',
		'menu_title' => 'Stripe',
		'menu_slug'  => 'stripe-settings',
		'capability' => 'edit_posts',
		'redirect'   => false,
		'parent_slug' => 'edit.php?post_type=payment',
	) );
}
