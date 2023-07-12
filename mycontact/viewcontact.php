<?php
    header("Content-type:application/json");
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Headers: *');
    header('Access-Control-Allow-Methods: GET,PUT,POST,DELETE,PATCH,OPTIONS');
    
    $con = mysqli_connect("localhost","root","","contact");
    $sql_update = "select * from mycontact";
    $result = mysqli_query($con,$sql_update);

    $rows = array();
    $i=0;
    while($r = mysqli_fetch_assoc($result)) {
       $rows[$i] = $r;
       $i++;

    }

    echo json_encode($rows);

   


       

?>