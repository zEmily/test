<?php
$con = mysql_connect("localhost","resume","456123");
if(!$con) {
    die('Could not connect:' . mysql_error());
}
mysql_select_db("resume",$con);

$mail = ( isset($_POST['mail']) ) ? trim($_POST['mail']) : 'x@x';
$company = ( isset($_POST['company']) ) ? trim($_POST['company']) : 'x';
$user = ( isset($_POST['user']) )? trim($_POST['user']) : 'anonymous';
$message = ( isset($_POST['message']) ) ? trim($_POST['message']) : '';

$sql="INSERT INTO info(Mail,Company,User,Message)
      VALUES('$mail','$company','$user','$message')";
mysql_query($sql, $con);
echo "Thanks for your message! <br><a href='/resume/1.html'>return</a>";
//echo "<br><ul><li>mail: $mail</li><li>company: $company</li><li>user: $user</li><li>message: $message</li></ul>";

mysql_close($con)
?>
