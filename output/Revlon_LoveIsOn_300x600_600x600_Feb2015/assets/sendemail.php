<?php


header("Access-Control-Allow-Origin: *");



$image = $_POST['image'];
$sender = $_POST['messagesender'];
//$image = 'http://frederickjaime.info/uploads/main.jpg';
$emailto = test_input($_POST['emailto']);
if (!preg_match("/([\w\-]+\@[\w\-]+\.[\w\-]+)/",$emailto)) {
    $emailToErr = "Invalid recipient email format"; 
}

$emailfrom = test_input($_POST['emailfrom']);

if (!preg_match("/([\w\-]+\@[\w\-]+\.[\w\-]+)/",$emailto)) {
    $emailFromErr = "Invalid recipient email format"; 
}

//Validates email addresses; will quietly not send email if addresses are not legal
if (isset($emailToErr) || isset($emailToErr)) {
    echo "errors in email addresses";
} else {
    echo $emailto." ".$emailfrom;
    
    
    $htmlbody = ' ';
	$to = $emailto; //Recipient Email Address
	if($sender == null){
		$subject = "I love you because..."; //Email Subject
	}else{
		$subject = $sender." loves you because..."; //Email Subject
	}
	

	$random_hash = md5(date('r', time()));
//It should read “I love you because…” if no one put in their name. OR "(Name of sender) loves you because…" if they do put in a name.
	$headers = "From: A love note from Revlon<DoNotreply@frederickjaime.info>\r\nReply-To: DoNotReply@frederickjaime.info";
	$headers .= "\r\nContent-Type: multipart/mixed; boundary=\"PHP-mixed-".$random_hash."\"";


	$attachment = chunk_split(base64_encode(file_get_contents($image))); // Set your file path here

	//define the body of the message.

	$message = "--PHP-mixed-$random_hash\r\n"."Content-Type: multipart/alternative; boundary=\"PHP-alt-$random_hash\"\r\n\r\n";
	$message .= "--PHP-alt-$random_hash\r\n"."Content-Type: text/html; charset=\"iso-8859-1\"\r\n"."Content-Transfer-Encoding: 7bit\r\n\r\n";


	//Insert the html message.
	$message .= $htmlbody;
	$message .="\r\n\r\n--PHP-alt-$random_hash--\r\n\r\n";

	//include attachment
	$message .= "--PHP-mixed-$random_hash\r\n"."Content-Type: application/zip; name=\"loveison_message.png\"\r\n"."Content-Transfer-Encoding: base64\r\n"."Content-Disposition: attachment\r\n\r\n";
	$message .= $attachment;
	$message .= "/r/n--PHP-mixed-$random_hash--";

	//send the email
	$mail = mail( $to, $subject , $message, $headers );

	//echo $mail ? "Mail sent" : "Mail failed";
   
    
}

function test_input($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}

//$imageSend = 'http://frederickjaime.info/uploads/main.jpg';


 
?>
