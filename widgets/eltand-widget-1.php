<?php

class Eltand_Widget_1 extends \Elementor\Widget_Base
{

    public function get_name()
    {
        return 'eltand_widget_1';
    }

    public function get_title()
    {
        return esc_html__('Cost Calculator', 'eltand');
    }

    public function get_icon()
    {
        return 'eicon-table';
    }

    public function get_categories()
    {
        return ['eltand'];
    }

    public function get_keywords()
    {
        return ['cost', 'calculator', 'cost calculator'];
    }

    protected function render()
    {
?>

        <div class="customizeWebsite_etd col-12_etd" id="headSectionCustomizeWebsite" style="min-width:200px;">
            <div class="header_etd w-100_etd d-flex_etd flex-wrap_etd py-2_etd my-3_etd align-items-center_etd">
                <div class="selectTab_etd col_etd">
                    <h4 class="textPrimary_etd my-auto_etd">Website type</h4>
                </div>
                <div class="col_etd text-right_etd">
                    <select name="" class="selectType_etd">
                        <option selected disabled>Choose</option>
                        <option value="ecomm">eCommerce</option>
                        <option value="pres">Presentation</option>
                        <option value="other">Other Type</option>
                    </select>
                </div>
            </div>
            <hr>
            <div class="tabs_etd">
                <div class="ecomm_etd tab_etd" data-value="400" style="display: none;">
                </div>
                <div class="pres_etd tab_etd" data-value="200" style="display: none;"></div>
                <div class="other_etd tab_etd" data-value="0" style="display: none;"></data-value>
                </div>

                <div class="supportCard_etd mt-4_etd">
                    <h3> Do you need help?</h3>
                    <hr>
                    <p>Send mail to <a href="mailto:official@eltand.com">official@eltand.com</a> or call the number
                        <br><a href="tel:0750446970">+40 750 446 970</a> - Official Eltand
                    </p>
                </div>
            </div> 
        </div>

    <?php
    }
}
