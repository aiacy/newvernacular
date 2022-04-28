<?php  

if(isset($_POST['submit'])) {
 $mailto = "aliyahrcottle@gmail.com";  //My email address
 //getting customer data
 $inquiry = $_POST['inquiry-type'];//inquiry type
 $project = $_POST['project-type'];
 $name = $_POST['fname']; //getting customer name
 $fromEmail = $_POST['email']; //getting customer email
 $company = $_POST['company']; //getting customer Phome number
 $url = $_POST['website'];
 $submission = $_POST['googledrive']; //getting subject line from client
 $subject2 = "Confirmation: Message was submitted successfully | HMA WebDesign"; // For customer confirmation

 //Email body I will receive
 $message = "Cleint Name: " . $name . "\n"
 . "Phone Number: " . $project . "\n\n"
 . "Client Message: ";

 //Message for client confirmation
 $message2 = "Dear" . $name . "\n"
 . "Thank you for contacting us. We will get back to you shortly!" . "\n\n"
 . "You submitted the following message: " . "\n" . $project . "\n\n"
 . "Regards," . "\n" . "- HMA WebDesign";

 //Email headers
 $headers = "From: " . $fromEmail; // Client email, I will receive
 $headers2 = "From: " . $mailto; // This will receive client

 //PHP mailer function

  $result1 = mail($mailto, $subject, $message, $headers); // This email sent to My address
  $result2 = mail($fromEmail, $subject2, $message2, $headers2); //This confirmation email to client

  //Checking if Mails sent successfully

  if ($result1 && $result2) {
    $success = "Your Message was sent Successfully!";
  } else {
    $failed = "Sorry! Message was not sent, Try again Later.";
  }

}

?>
