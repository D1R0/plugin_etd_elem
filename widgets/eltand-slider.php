<?php

class Eltand_Slider extends \Elementor\Widget_Base
{

    public function get_name()
    {
        return 'eltand_slider';
    }

    public function get_title()
    {
        return esc_html__('Slider Custom', 'eltand');
    }

    public function get_icon()
    {
        return 'eicon-slider-push';
    }

    public function get_categories()
    {
        return ['eltand'];
    }

    public function get_keywords()
    {
        return ['slider', 'carousel'];
    }
    protected function register_controls()
    {

        $this->start_controls_section(
            'content_section',
            [
                'label' => esc_html__('Content', 'textdomain'),
                'tab' => \Elementor\Controls_Manager::TAB_CONTENT,
            ]
        );

        $this->add_control(
            'list',
            [
                'label' => esc_html__('Media', 'textdomain'),
                'type' => \Elementor\Controls_Manager::REPEATER,
                'fields' => [
                    [
                        'name' => 'title_elem',
                        'label' => esc_html__('Title', 'textdomain'),
                        'type' => \Elementor\Controls_Manager::TEXT,
                        'default' => esc_html__('Title', 'textdomain'),
                        'label_block' => true,
                    ],
                    [
                        'name' => 'media_elem',
                        'label' => __('Media', 'eltand'),
                        'type' => \Elementor\Controls_Manager::MEDIA,
                        'default' => [
                            'url' => '',
                        ],
                    ],
                    [
                        'name' => 'link_elem',
                        'label' => esc_html__('Link', 'textdomain'),
                        'type' => \Elementor\Controls_Manager::TEXT,
                        'label_block' => true,
                    ],

                ],
            ]
        );

        $this->end_controls_section();
    }
    protected function render()
    {
        $settings = $this->get_settings_for_display();

?>

        <div class="slider_etd">
            <div class="slide_viewer_etd">
                <div class="slide_group_etd">
                    <?php
                    if ($settings['list']) {
                        foreach ($settings['list'] as $item) {
                            echo '<div class="slide_etd">';
                            echo '<img src="' . esc_url($item["media_elem"]["url"]) . '" alt="">
                                    <div class="slider_overlay_etd"></div>
                                    <div class="slider_desc_etd">
                                        <p class="slider_title_etd">' . $item["title_elem"] . '</p>
                                        <a class="button_etd" href="' . esc_url($item["link_elem"]) . '">Access</a>
                                        </div>';
                            echo '</div>';
                        }
                    } ?>
                </div>
            </div>
        </div>

        <div class="slide_buttons_etd">
        </div>

        <div class="directional_nav_etd">
            <div class="previous_btn_etd" title="Previous">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="65px" height="65px" viewBox="-11 -11.5 65 66">
                    <g>
                        <g>
                            <path fill="#474544" d="M-10.5,22.118C-10.5,4.132,4.133-10.5,22.118-10.5S54.736,4.132,54.736,22.118
			c0,17.985-14.633,32.618-32.618,32.618S-10.5,40.103-10.5,22.118z M-8.288,22.118c0,16.766,13.639,30.406,30.406,30.406 c16.765,0,30.405-13.641,30.405-30.406c0-16.766-13.641-30.406-30.405-30.406C5.35-8.288-8.288,5.352-8.288,22.118z" />
                            <path fill="#474544" d="M25.43,33.243L14.628,22.429c-0.433-0.432-0.433-1.132,0-1.564L25.43,10.051c0.432-0.432,1.132-0.432,1.563,0	c0.431,0.431,0.431,1.132,0,1.564L16.972,21.647l10.021,10.035c0.432,0.433,0.432,1.134,0,1.564	c-0.215,0.218-0.498,0.323-0.78,0.323C25.929,33.569,25.646,33.464,25.43,33.243z" />
                        </g>
                    </g>
                </svg>
            </div>
            <div class="next_btn_etd" title="Next">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="65px" height="65px" viewBox="-11 -11.5 65 66">
                    <g>
                        <g>
                            <path fill="#474544" d="M22.118,54.736C4.132,54.736-10.5,40.103-10.5,22.118C-10.5,4.132,4.132-10.5,22.118-10.5	c17.985,0,32.618,14.632,32.618,32.618C54.736,40.103,40.103,54.736,22.118,54.736z M22.118-8.288	c-16.765,0-30.406,13.64-30.406,30.406c0,16.766,13.641,30.406,30.406,30.406c16.768,0,30.406-13.641,30.406-30.406 C52.524,5.352,38.885-8.288,22.118-8.288z" />
                            <path fill="#474544" d="M18.022,33.569c 0.282,0-0.566-0.105-0.781-0.323c-0.432-0.431-0.432-1.132,0-1.564l10.022-10.035 			L17.241,11.615c 0.431-0.432-0.431-1.133,0-1.564c0.432-0.432,1.132-0.432,1.564,0l10.803,10.814c0.433,0.432,0.433,1.132,0,1.564 L18.805,33.243C18.59,33.464,18.306,33.569,18.022,33.569z" />
                        </g>
                    </g>
                </svg>
            </div>
        </div>
<?php
    }
}
