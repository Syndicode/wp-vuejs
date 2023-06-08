<?php
if ( function_exists( 'acf_add_options_page' ) ) {

	acf_add_options_page( array(
		'page_title' => 'Payment settings',
		'menu_title' => 'Settings',
		'menu_slug'  => 'payment-settings',
		'capability' => 'edit_posts',
		'redirect'   => false,
		'parent_slug' => 'edit.php?post_type=payment',
	) );
}
