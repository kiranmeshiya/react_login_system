<?php
    header("Content-type:application/json");
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Headers: *');

    $json = file_get_contents('php://input');
    $data = json_decode($json,true);

    $con = mysqli_connect("localhost","root","","contact");

        if(!empty($data['username'])) 
        {
            // Your code here
             $name = $data['username'];
             $email = $data['email'];
             $password = $data['password'];
            
         $sql_insert = "insert into register(username,email,password) values ('$name','$email','$password')";
         mysqli_query($con,$sql_insert);

        }
        
?>