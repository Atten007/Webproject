<?php
$empfaenger = "mail@mika-kreis.de";
$betreff = "Die Mail-Funktion";
$from = "From: Mika Kreis <mail@mika-kreis.de>";
$text = "Schreib mir was!";
$email = $_GET['user_email']
$message = $['user_message']
 
mail($empfaenger, $betreff, $text, $from);

echo "Hallo" . $email .", Nachricht:" . $message, $from;
?>