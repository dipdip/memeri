<?
$from = "From: memeri <me@memeri.com>";
$to = "me@memeri.com";
$subject = "User question from memeri.com";
$body = "Sender: " . $_POST["userName"] . "\n";
$body .= "Sender email : " . $_POST["userEmail"] . "\n";
$body .= "Message: " . $_POST["userComments"];

if(mail($to, $subject, $body, $from)) echo "MAIL - OK";
else echo "MAIL FAILED";
?>