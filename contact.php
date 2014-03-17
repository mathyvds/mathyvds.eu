<?php

    $to = "mathy.vds@gmail.com"; 
	$name= $_REQUEST['inputname']; 
    $email= $_REQUEST['inputemail']; 
    $message= $_REQUEST['inputtext'] . "\n\n\n\nSent through mathyvds.eu"; 
    $headers = 'From: '. $name . "<" . $email . ">" . "\r\n" .
    'Reply-To: '. $name . "<" . $email . ">" . "\r\n" .
    'X-Mailer: PHP/' . phpversion();
    $subject = "Message on Mathyvds.eu"; 
    
if ( ! empty($_POST['contact']))  { 
    mail($to, $subject, $message, $headers);
}

?>