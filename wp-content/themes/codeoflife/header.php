<!DOCTYPE html>
<!-- /ht Paul Irish - http://front.ie/j5OMXi -->
<!--[if lt IE 7 ]> <html class="no-js ie6 oldie" lang="en"> <![endif]-->
<!--[if IE 7 ]>    <html class="no-js ie7 oldie" lang="en"> <![endif]-->
<!--[if IE 8 ]>    <html class="no-js ie8 oldie" lang="en"> <![endif]-->
<!--[if IE 9 ]>    <html class="no-js ie9 oldie" lang="en"> <![endif]-->
<!--[if (gte IE 10)|!(IE)]><!--> <html class="no-js" lang="en"> <!--<![endif]-->
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title><?php echo bloginfo( 'name' ); ?></title>
	<link rel="shortcut icon" href="<?php echo get_stylesheet_directory_uri(); ?>/images/favicon.png">

    <?php wp_head(); ?>
</head>
<body>
    <!--[if lt IE 8]>
        <p class="browsehappy">You are using an outdated browser. <br>Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
    <![endif]-->

	<div id="wrapper">
		<a class="skip-main" href="#main"><?php _e( 'Skip to main content', THEME_TEXTDOMAIN ) ?></a>

        <header>
            <div class="menu-bar">

                <?php
                $rep_content = 'main_content';

                if (have_rows($rep_content)) { 

                    $i=0;

                    ?>
                    
                    <nav id="menu">
                        <ul>

                            <?php while ( have_rows($rep_content) ) : the_row();

                                $section_name = get_sub_field('section_name');
                                ?>

                                <li id="navLink<?php echo $i; ?>" class="navLink">
                                    <a href="#<?php echo str_replace(array("#", "'", ";", " ", "&"), '', strtolower($section_name)); ?>" class="cf">
                                        <span class="navLinkDivis"></span>
                                        <span class="navInner"><span class="navInnerText"><?php echo $section_name; ?></span></span>
                                        <span class="navLinkDivis"></span>
                                    </a>
                                </li>

                            <?php $i++;
                            endwhile; ?>

                        </ul>
                    </nav>
                                
                <?php } ?>

                <?php 
                    wp_nav_menu( array(
                        'container' => false,
                        'menu_class' => 'links-menu',
                        'theme_location' => 'social_menu'
                    ) ); 
                ?>
            </div>
            <div id="lander" class="container">
                <div class="landerWrapper">
                    <div class="lander-logo">
                        <h1>Code of Life</h1>
                        <p><i>Lifestyle brand</i></p>
                    </div>
                </div>
            </div>
        </header>
        <main id="main">