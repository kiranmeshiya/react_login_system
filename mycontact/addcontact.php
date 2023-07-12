<?php
    header("Content-type:application/json");
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Headers: *');

    $json = file_get_contents('php://input');
    $data = json_decode($json,true);

    $con = mysqli_connect("localhost","root","","contact");

        if(!empty($data['name'])) 
        {
            // Your code here
             $name = $data['name'];
             $email = $data['email'];
             $password = $data['password'];
             $date = $data['date'];
             $phone = $data['phone'];
             $address = $data['address'];
             $gender = $data['gender'];
             $city = $data['city'];
            $hobby = $data['hobby'];
            
         $sql_insert = "insert into mycontact(name,email,password,date,phone,address,gender,city,hobby) values ('$name','$email','$password','$date','$phone','$address','$gender','$city','$hobby')";
         mysqli_query($con,$sql_insert);
         
        }
        
      
?>