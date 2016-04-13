<?php
header("Access-Control-Allow-Origin: *");

$filename = $_GET['image'];


header('Content-Type: application/octet-stream');

header("Content-Transfer-Encoding: Binary");

header('Content-disposition: attachment; filename=LoveMessage.png');
readfile($filename);

?>