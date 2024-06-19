<?php

function my_custom_widget_register_rest_routes()
{
    register_rest_route('eltand/v1', '/sendEmail', array(
        'methods'  => 'POST',
        'callback' => 'sendEmail',
    ));
}
add_action('rest_api_init', 'my_custom_widget_register_rest_routes');

function sendEmail($request)
{

    $emails = ["adrian.valentindr@gmail.com", "ooscar.dincu@gmail.com"];
    $data = implode(",", $request->get_param('data'));
    $allCosts =  $request->get_param('allCosts');
    $periodCost =  $request->get_param('periodCost');
    $allCostsString = 'Costurile de implementare: ';
    foreach ($allCosts as $key => $value) {
        $allCostsString .= $key . "=>" . $value . ",";
    }
    $allCostsString .= "\nCosturile de mentenanta: ";
    foreach ($periodCost as $key => $value) {
        $allCostsString .= $key . "=>" . $value . ",";
    }
    //php mailer variables
    $from = get_option('admin_email');
    $subject = "Potential Client";
    $headers = 'From: ' . $from . "\r\n" .
        'Reply-To: ' . $from . "\r\n";

    //Here put your Validation and send mail
    foreach ($emails as $email) {
        $sent = wp_mail($email, $subject, strip_tags($data) . "\n" .  strip_tags($allCostsString), $headers);
    }
    if ($sent) {
        return "Email sent successfully";
        //message sent!       
    } else {
        return "Email failed!";
        //message wasn't sent       
    }
}