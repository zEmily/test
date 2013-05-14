<?php
$con = mysql_connect("localhost", "resume", "456123");
if(!$con)
{
    die('Could not connect:' . mysql_error());
}
mysql_select_db("resume", $con);
$result = mysql_query("SELECT * FROM info",  $con);

echo "<table border='1'>
<tr>
  <th>Email</th>
  <th>Company</th>
  <th>User</th>
  <th>Message</th>
</tr>";
while($row = mysql_fetch_array($result)) {
    echo "<tr>" ;
    echo "<td>".$row['Mail']."</td>";
    echo "<td>".$row['Company']."</td>";
    echo "<td>".$row['User']."</td>";
    echo "<td>".$row['Message']."</td>";
}
echo "</table>";

mysql_close($con)
?>
