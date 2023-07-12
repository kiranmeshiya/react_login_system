<?php
    header("Content-type:application/json");
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Headers: *');
    header('Access-Control-Allow-Methods: GET,PUT,POST,DELETE,PATCH,OPTIONS');

    
    $json = file_get_contents('php://input');
    $data = json_decode($json,true);

    $con = mysqli_connect("localhost","root","","contact");

    $id = $_GET['id'];
    //echo $id;
    $sql_delete = "delete from mycontact where id = '$id'";
     $result = mysqli_query($con,$sql_delete);

 
    // if($result)
    // {
    //     echo "success";
    // }
    // else{
    //     echo "fail";
    // }

   


       

?>