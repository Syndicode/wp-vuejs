<?php

/**
 * Accordion Block Template.
 *
 * @var array $block The block settings and attributes.
 * @var string $content The block inner HTML (empty).
 * @var bool $is_preview True during AJAX preview.
 * @var int|string $post_id The post ID this block is saved to.
 */

$heading   = get_field( 'heading' );
$accordion = get_field( 'accordion' );
?>

<?php if ( ! empty( $accordion ) ) : ?>
	<!-- ACCORDION start -->
	<div class="accordion" id="<?= $block['id']; ?>">
		<div class="accordion__wrapper">
			<?php if ( ! empty( $heading ) ) : ?>
				<h2 class="accordion__heading"><?= $heading; ?></h2>
			<?php endif; ?>
			<ul class="accordion__list">
				<?php foreach ( $accordion as $accordion_item ) : ?>
					<?php if ( ! empty( $accordion_item['title'] ) && ! empty( $accordion_item['content'] ) ) : ?>
						<li class="accordion__item">
							<h3 class="accordion__title"><?= $accordion_item['title']; ?></h3>
							<div class="accordion__content-holder">
								<div class="accordion__content">
									<?= $accordion_item['content']; ?>
								</div>
							</div>
						</li>
					<?php endif; ?>
				<?php endforeach; ?>
			</ul>
		</div>
	</div>
	<!-- ACCORDION end -->
<?php endif; ?>

