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

	// Localización de traducciones
    load_theme_textdomain( THEME_TEXTDOMAIN, get_stylesheet_directory() . '/languages' );

    // Custom Navigation Walker
    //require_once get_stylesheet_directory() . '/theme_core/functions/class-wp-bootstrap-navwalker.php';

    // Menús
    register_nav_menus( array(
        'social_menu' => __( 'Social Menu', THEME_TEXTDOMAIN )
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


/**
* ACF JSON - Save
*/
add_filter('acf/settings/save_json', 'theme_acf_json_save_point');
function theme_acf_json_save_point( $path ) {
    
    // update path
    $path = get_stylesheet_directory() . '/acf-json';
    
    // return
    return $path;
    
}

/**
* ACF JSON - Load
*/
add_filter('acf/settings/load_json', 'theme_acf_json_load_point');
function theme_acf_json_load_point( $paths ) {
    
    // remove original path (optional)
    unset($paths[0]);
    
    // append path
    $paths[] = get_stylesheet_directory() . '/acf-json';
    
    // return
    return $paths;
    
}

/**
* Add Mime Types
*/
function theme_custom_mime_types( $mimes ) {
 
    // New allowed mime types.
    $mimes['svg'] = 'image/svg+xml';
    $mimes['svgz'] = 'image/svg+xml';
     
    return $mimes;
}
add_filter( 'upload_mimes', 'theme_custom_mime_types' );