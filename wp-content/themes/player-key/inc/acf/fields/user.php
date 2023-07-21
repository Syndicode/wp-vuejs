<?php

use StoutLogic\AcfBuilder\FieldsBuilder;

function acf_add_user_fields(): void {
	$fields = new FieldsBuilder( 'user', [
		'title'    => __( 'Additional information', 'player-key' ),
		'style'    => 'seamless',
		'position' => 'acf_after_title',
	] );

	$fields->addTrueFalse( 'is_valid', [
		'label'         => __( 'Is the account validated?', 'player-key' ),
		'ui'            => 1,
		'ui_on_text'    => __( 'Yes', 'player-key' ),
		'ui_off_text'   => __( 'No', 'player-key' ),
		'default_value' => 0,
	] );

	$fields->addDatePicker( 'birthday', [
		'label'          => __( 'Birthday', 'player-key' ),
		'display_format' => 'm/d/Y',
		'return_format'  => 'm/d/Y',
		'first_day'      => 1,
	] );

	$fields->addText( 'address', [
		'label' => __( 'Address', 'player-key' ),
	] );

	$fields->addText( 'town', [
		'label' => __( 'Town', 'player-key' ),
	] );

	$fields->addText( 'state', [
		'label' => __( 'State', 'player-key' ),
	] );

	$fields->addText( 'zip-code', [
		'label' => __( 'ZIP Code', 'player-key' ),
	] );

	$fields->setLocation( 'user_role', '==', 'all' );

	acf_add_local_field_group( $fields->build() );
}

add_action( 'acf/init', 'acf_add_user_fields' );


/**
 * @param mixed $value
 * @param string $post_id
 * @param array $field
 *
 * @return mixed
 */
function acf_update_is_valid_field( mixed $value, string $post_id, array $field ): mixed {

	$previous_value = get_field( 'is_valid', $post_id );

	if ( $value && ! $previous_value ) {
		$user = get_user_by( 'ID', str_replace( 'user_', '', $post_id ) );

		if ( $user && ( $user->roles[0] !== 'admin' || $user->roles[0] !== 'administrator' ) ) {
			$url     = get_site_url() . '/sign-in';
			$message = file_get_contents( TEMPLATE_DIR . '/inc/templates/emails/account-validated.php' );
			$message = str_replace( [
				'{{url}}',
				'{{user}}',
			], [
				$url,
				$user->first_name . ' ' . $user->last_name
			], $message );

			wp_mail( $user->user_email, 'Your account has been successfully validated!', $message, [
				'content-type: text/html',
			] );
		}
	}

	return $value;
}

add_filter( 'acf/update_value/key=field_user_is_valid', 'acf_update_is_valid_field', 10, 3 );
