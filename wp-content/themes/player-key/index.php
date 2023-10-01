<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Player Key ID</title>

    <!-- Google fonts start -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap" rel="stylesheet">
    <!-- Google fonts end -->

    <?php if ( STYLE_URL ) : ?>
        <!-- Main styles start -->
        <link rel="stylesheet" href="<?php echo STYLE_URL; ?>">
        <!-- Main styles end -->
    <?php endif ?>

    <!-- Favicon start -->
	<?php $favicon_path = '/wp-content/themes/player-key/src/assets/favicon/'; ?>
    <link rel="apple-touch-icon" sizes="57x57" href="<?= $favicon_path ?>apple-icon-57x57.png">
    <link rel="apple-touch-icon" sizes="60x60" href="<?= $favicon_path ?>apple-icon-60x60.png">
    <link rel="apple-touch-icon" sizes="72x72" href="<?= $favicon_path ?>apple-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="76x76" href="<?= $favicon_path ?>apple-icon-76x76.png">
    <link rel="apple-touch-icon" sizes="114x114" href="<?= $favicon_path ?>apple-icon-114x114.png">
    <link rel="apple-touch-icon" sizes="120x120" href="<?= $favicon_path ?>apple-icon-120x120.png">
    <link rel="apple-touch-icon" sizes="144x144" href="<?= $favicon_path ?>apple-icon-144x144.png">
    <link rel="apple-touch-icon" sizes="152x152" href="<?= $favicon_path ?>apple-icon-152x152.png">
    <link rel="apple-touch-icon" sizes="180x180" href="<?= $favicon_path ?>apple-icon-180x180.png">
    <link rel="icon" type="image/png" sizes="192x192" href="<?= $favicon_path ?>android-icon-192x192.png">
    <link rel="icon" type="image/png" sizes="32x32" href="<?= $favicon_path ?>favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="96x96" href="<?= $favicon_path ?>favicon-96x96.png">
    <link rel="icon" type="image/png" sizes="16x16" href="<?= $favicon_path ?>favicon-16x16.png">
    <link rel="manifest" href="<?= $favicon_path ?>manifest.json">
    <meta name="theme-color" content="#ffffff">
    <!-- Favicon end -->

</head>
<body>
<div id="app"></div>
<script src="<?php echo SCRIPT_URL; ?>" type="module"></script>
</body>
</html>
