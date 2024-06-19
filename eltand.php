<?php

/**
 * Plugin Name: Eltand Elements 
 * Description: Design Elements for your website.
 * Version:     1.0.0
 * Author:      Etland Development Team
 * Author URI:  https://eltand.com/
 * Text Domain: eltand
 */


require_once plugin_dir_path(__FILE__) . '/includes/rest.php';
function my_custom_widget_enqueue_scripts()
{
    wp_enqueue_style('my-custom-widget-style', plugins_url('css/eltand.css', __FILE__));
    wp_enqueue_style('mmenu-style', plugins_url('assets/mmenujs/mmenu.css', __FILE__));

    wp_enqueue_script('jquery'); // Make sure jQuery is loaded
    wp_enqueue_script('my-custom-widget-eltand', plugins_url('js/eltand.js', __FILE__), array('jquery'), '', true);
    wp_enqueue_script('my-custom-widget-helper', plugins_url('js/helper.js', __FILE__), array('jquery'), '', true);
    wp_enqueue_script('my-custom-widget-loader', plugins_url('js/loaderHandler.js', __FILE__), array('jquery'), '', true);
    wp_enqueue_script('my-custom-widget-random-fit', plugins_url('js/randomFitHandler.js', __FILE__), array('jquery'), '', true);
    wp_enqueue_script('mmenu-js-setup', plugins_url('js/mmenuHanlder.js', __FILE__), array('jquery'), '', true);
    wp_enqueue_script('mmenu-js', plugins_url('assets/mmenujs/mmenu.js', __FILE__), array('jquery'), '', true);
}
add_action('wp_enqueue_scripts', 'my_custom_widget_enqueue_scripts');
function register_eltand_widget($widgets_manager)
{

    require_once(__DIR__ . '/widgets/eltand-widget-1.php');
    require_once(__DIR__ . '/widgets/eltand-loader.php');
    require_once(__DIR__ . '/widgets/eltand-card.php');
    require_once(__DIR__ . '/widgets/eltand-slider.php');

    $widgets_manager->register(new \Eltand_Widget_1());
    $widgets_manager->register(new \Eltand_Loader());
    $widgets_manager->register(new \Eltand_Card());
    $widgets_manager->register(new \Eltand_Slider());
}
add_action('elementor/widgets/register', 'register_eltand_widget');

function add_elementor_widget_categories($elements_manager)
{

    $elements_manager->add_category(
        'eltand',
        [
            'title' => esc_html__('Eltand', 'eltand'),
            'icon' => 'fa fa-plug',
        ]
    );
}
add_action('elementor/elements/categories_registered', 'add_elementor_widget_categories');
