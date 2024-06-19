<?php

class Eltand_Card extends \Elementor\Widget_Base
{

    public function get_name()
    {
        return 'eltand_card';
    }

    public function get_title()
    {
        return esc_html__('Card', 'eltand');
    }

    public function get_icon()
    {
        return 'eicon-form-horizontal';
    }

    public function get_categories()
    {
        return ['eltand'];
    }

    public function get_keywords()
    {
        return ['eltand', 'card'];
    }

    protected function register_controls()
    {
        $this->start_controls_section(
            'content_section',
            [
                'label' => __('Settings', 'eltand'),
                'tab' => \Elementor\Controls_Manager::TAB_CONTENT,
            ]
        );

        $this->add_control(
            'target_link',
            [
                'label' => __('Target Link', 'eltand'),
                'type' => \Elementor\Controls_Manager::TEXT,
                'default' => '#',
            ]
        );

        $this->add_control(
            'target_title',
            [
                'label' => __('Target Title', 'eltand'),
                'type' => \Elementor\Controls_Manager::TEXT,
                'default' => __('Target Title', 'eltand'),
            ]
        );

        $this->add_control(
            'creator_link',
            [
                'label' => __('Creator Link', 'eltand'),
                'type' => \Elementor\Controls_Manager::TEXT,
                'default' => '#',
            ]
        );

        $this->add_control(
            'creator_title',
            [
                'label' => __('Creator Title', 'eltand'),
                'type' => \Elementor\Controls_Manager::TEXT,
                'default' => __('Creator Title', 'eltand'),
            ]
        );
        $this->add_control(
            'desc',
            [
                'label' => __('Description', 'eltand'),
                'type' => \Elementor\Controls_Manager::WYSIWYG,
                'default' => 'desc',
            ]
        );

        $this->add_control(
            'target_media',
            [
                'label' => __('Target Media', 'eltand'),
                'type' => \Elementor\Controls_Manager::MEDIA,
                'default' => [
                    'url' => '',
                ],
            ]
        );
        $this->add_control(
            'theme_color',
            [
                'label' => __('Theme Color', 'eltand'),
                'type' => \Elementor\Controls_Manager::COLOR,
            ]
        );
        $this->add_control(
            'target_alt',
            [
                'label' => __('Target Image Alt Text', 'eltand'),
                'type' => \Elementor\Controls_Manager::TEXT,
                'default' => __('Target Image Alt Text', 'eltand'),
            ]
        );

        $this->end_controls_section();
    }


    protected function render()
    {
        $settings = $this->get_settings_for_display();
        $idElem = uniqid('custom_');

        echo '<div class="' . esc_attr($idElem) . '" id="window-pane" role="dialog" aria-modal="true" aria-labelledby="modal-title" aria-describedby="modal-desc">';

        if (!empty($settings['theme_color'])) {
            echo '<style>
                    .' . esc_attr($idElem) . ' .handle {
                        --aug-inlay-bg: ' . esc_attr($settings['theme_color']) . ' !important;
                    }
                </style>';
        }

        echo '<div class="handle" data-augmented-ui id="' . strtolower(str_replace(' ', '_', $settings['target_title'])) . '">
                <span class="handle-details">
                    <a href="' . esc_url($settings['target_link']) . '" target="_blank" title="augmented-ui">' . esc_html($settings['target_title']) . '</a>
                    <a href="' . esc_url($settings['creator_link']) . '" target="_blank" title="Corset">' . esc_html($settings['creator_title']) . '</a>
                </span>
              </div>
              <div class="img-frame" data-augmented-ui>
                <img src="' . esc_url($settings['target_media']['url']) . '" alt="' . esc_attr($settings['target_alt']) . '">
              </div>
              <div class="details" data-augmented-ui>
                <h3 id="modal-title">' . esc_html($settings['target_title']) . '</h3>
                <div id="modal-desc">' .  $settings['desc'] . '</div>
                <br>';

        if (!empty($settings['target_link']) && $settings['target_link'] !== "#" && $settings['target_link'] !== "1") {
            echo '<a href="' . esc_url($settings['target_link']) . '" class="button_etd" target="_blank">Vezi mai multe</a>';
        }
        echo '</div></div>';
    }
}
