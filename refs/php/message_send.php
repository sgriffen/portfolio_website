<?php
if(isset($_POST['from_email'])) {
     
    // CHANGE THE TWO LINES BELOW
    $email_to = "hire.seangriffen@gmail.com";
    $email_subject = "Website Contact Notification";
    
    function died($error) {
        // your error code can go here
        echo "Oops... There were error(s) found with the form you submitted. ";
        echo "These errors appear below.<br /><br />";
        echo $error."<br /><br />";
        echo "Please go back and fix these errors.<br /><br />";
		die();
    }
    
    $name = $_POST['from_name'];
    $email_from = $_POST['from_email'];
    $comments = $_POST['from_message'];

    $email_message = "Form details below.\n\n";
    
    function clean_string($string) {
		$bad = array("content-type","bcc:","to:","cc:","href");
		return str_replace($bad,"",$string);
    }
    
    $email_message .= "Name: ".clean_string($name)."\n";
    $email_message .= "Email: ".clean_string($email_from)."\n";
    $email_message .= "Message: ".clean_string($comments)."\n";
    
    
	IsInjected($email_from);
	
	// create email headers
	$headers = 'From: '.$email_from."\r\n";
	$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
	$headers .= "MIME-Version: 1.0" . "\r\n";

	@mail($email_to, $email_subject, $email_message, $headers); 
	echo "Your message was sent";
}
die();
?>
<?php
function IsInjected($str)
{
    $injections = array('(\n+)',
           '(\r+)',
           '(\t+)',
           '(%0A+)',
           '(%0D+)',
           '(%08+)',
           '(%09+)'
           );
               
    $inject = join('|', $injections);
    $inject = "/$inject/i";
    
    if(preg_match($inject,$str))
    {
      return true;
    }
    else
    {
      return false;
    }
}

if(IsInjected($visitor_email))
{
    echo "Bad email value!";
    exit;
}
?>


