<?php
    header("Content-type:application/json");
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Headers: *');
    header('Access-Control-Allow-Methods: GET,PUT,POST,DELETE,PATCH,OPTIONS');
    
    
    $json = file_get_contents('php://input');
    $data = json_decode($json,true);
    
    $con = mysqli_connect("localhost","root","","contact");
      $id = $data['id'];
    //    $id = $_GET['id'];

    $name = $data['name'];
    $email = $data['email'];
    $password = $data['password'];
    $date = $data['date'];
    $phone = $data['phone'];
    $address = $data['address'];
    $gender = $data['gender'];
    $city = $data['city'];
   $hobby = $data['hobby'];

    $sql_update = "update mycontact set name='$name' , email ='$email', password='$password' , 
    date='$date', phone='$phone', address='$address' ,gender='$gender'  , city = '$city' ,hobby='$hobby' 
    where id = '$id'";
    $result = mysqli_query($con,$sql_update);

  




?>
