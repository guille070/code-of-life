<?php
/**
    * Fichero PHP
    *
    * Funciones generales del tema
    *
    * @copyright Copyright (c) 2020 Dandy Agency
*/

/**
* Basic theme set up
*/
function theme_setup()
{

    // Custom Navigation Walker
    //require_once get_stylesheet_directory() . '/theme_core/functions/class-wp-bootstrap-navwalker.php';

    // Menús
    register_nav_menus( array(
        //'primary' => __( 'Primary Menu', THEME_TEXTDOMAIN ),
        //'primary_top_right' => __( 'Primary Menu (top right)', THEME_TEXTDOMAIN ),
        //'footer' => __( 'Footer Menu', THEME_TEXTDOMAIN )
    ) );

    // Theme support
    add_theme_support( 'post-thumbnails' );
    //add_theme_support( 'editor-styles' );
    add_theme_support( 'responsive-embeds' );

	// Tamaño de imagenes
    //add_image_size('hero_image', 1440, 900, true);

	// Stylesheet to the visual editor.
    //add_editor_style('editor-style.css');

}
add_action( 'after_setup_theme', 'theme_setup' );


/**
* Theme Scripts
*/
function theme_scripts_styles()
{
    wp_enqueue_style( 'reset-styles', get_template_directory_uri() . '/front/css/reset.css', array(), THEME_STYLE_VERSION, 'all' );
    wp_enqueue_style( 'theme-styles', get_template_directory_uri() . '/front/css/main.css', array(), THEME_STYLE_VERSION, 'all' );

	wp_deregister_script('jquery');
	wp_enqueue_script('jquery', get_template_directory_uri() . '/front/js/jquery-1.7.2.min.js', array(), THEME_STYLE_VERSION, true);
    wp_enqueue_script('theme-plugins', get_template_directory_uri() . '/front/js/plugins.js', array('jquery'), THEME_STYLE_VERSION, true);
    wp_enqueue_script('theme-scripts', get_template_directory_uri() . '/front/js/script.js', array('jquery'), THEME_STYLE_VERSION, true);
}
add_action( 'wp_enqueue_scripts', 'theme_scripts_styles' );