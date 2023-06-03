<?php 

    $user_Name = $_POST['name'];
    $user_Email = $_POST['email'];
    $user_Comment = $_POST['comment'];

    $email_From = "shwekokoh@gmail.com";
    $email_subject = "New Member";
    $email_body = "User Name: $user_Name.\n" . "User Email: $user_Email.\n" . "Subject: $user_Comment";
    $to = "shweshooncorporation@gmail.com";

    $headers = "From $email_From \r\n";
    $headers .= "Reply-To: $user_Email \r\n";

   if(mail($to, $email_subject, $email_body, $headers)){
    echo "yes";
   } else {
    echo "no";
   }
   header('Location: contact.html');

?>