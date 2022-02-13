<?php
    function getRealIpAddr()
    {
    if (!empty($_SERVER['HTTP_CLIENT_IP']))   //check ip from share internet
    {
      $ip=$_SERVER['HTTP_CLIENT_IP'];
    }
    elseif (!empty($_SERVER['HTTP_X_FORWARDED_FOR']))   //to check ip is pass from proxy
    {
      $ip=$_SERVER['HTTP_X_FORWARDED_FOR'];
    }
    else
    {
      $ip=$_SERVER['REMOTE_ADDR'];
    }
    return $ip;
}

    if (isset($_POST["submit"])) {
		$name = $_POST["name"];
        $message = $_POST["message"];
        
        $to = "17conoregan@gmail.com";
        $subject = "conoregan.co.uk message from: $name";
        $body = "$subject\n\n======================================================================================================\n\n$message\n\n\n\nSent from: " . getRealIpAddr();
        
        if (empty($name)) {
            echo "Email address is required!";
        }
        else if (empty($message)) {
            echo "Message is required!";
        }
        else if (mail($to, $subject, $body)) {
            echo "Successfully sent email!";
        }
    }
?>