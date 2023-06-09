<?php
//setting header to json
header('Content-Type: application/json');

//database
define('DB_HOST', 'sql12.freemysqlhosting.net');
define('DB_USERNAME', 'sql12607669');
define('DB_PASSWORD', 'BxT7Q3Pntl');
define('DB_NAME', 'sql12607669');

//get connection
$mysqli = new mysqli(DB_HOST, DB_USERNAME, DB_PASSWORD, DB_NAME);

if(!$mysqli){
  die("Connection failed: " . $mysqli->error);
}

//query to get data from the table
$query = sprintf("SELECT player_id, player_score, player_name FROM score ORDER BY player_id");

//execute query
$result = $mysqli->query($query);

//loop through the returned data
$data = array();
foreach ($result as $row) {
  $data[] = $row;
}

//free memory associated with result
$result->close();

//close connection
$mysqli->close();

//now print the data
print json_encode($data);