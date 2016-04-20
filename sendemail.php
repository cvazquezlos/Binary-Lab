<?php
	header('Content-type: application/json');
	$status = array(
		'type'=>'success',
		'message'=>'Thank you for contact us. As early as possible  we will contact you '
	);

    $name       = @trim(stripslashes($_POST['name']));
    $email      = @trim(stripslashes($_POST['email']));
    $subject    = @trim(stripslashes($_POST['subject']));
    $message    = @trim(stripslashes($_POST['message']));

    $email_from = $email;
    $email_to = 'info@binarylab.es';//replace with your email

    $body = 'Name: ' . $name . "\n\n" . 'Email: ' . $email . "\n\n" . 'Subject: ' . $subject . "\n\n" . 'Message: ' . $message;

    $success = @mail($email_to, $subject, $body, 'From: <'.$email_from.'>');

    if ($success){
       header("Location: http://binarylab.es/index.html#CONTACT");
       exit();
    } else {
      print "np";
    }

    die;
