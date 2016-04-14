<?php
	 header("Access-Control-Allow-Origin: *");
	 
    $image = $_POST['image'];
    $filedir = $_POST['filedir'];
    $name = time();
    $image = str_replace('data:image/png;base64,', '', $image);
    $decoded = base64_decode($image);
    $imgname = $filedir . "/" . $name . ".png";
    file_put_contents($imgname, $decoded, LOCK_EX);
    echo $imgname;
?> 