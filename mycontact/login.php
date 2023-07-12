<?php
    header("Content-type:application/json");
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Headers: *');

    $json = file_get_contents('php://input');
    $data = json_decode($json,true);

    $con = mysqli_connect("localhost","root","","contact");
   
        if(!empty($data['name']) && !empty($data['password'])) 
        {

         
            // Your code here
            $username = $data['name'];
            $password =$data['password'];
            
              $sql_select = "select * from register where username = '$username' and password = '$password' ";
             $result = mysqli_query($con,$sql_select);
           
             $cnt = mysqli_num_rows($result);

             if($cnt>0)
             {
                    echo "success";
             }
             else
             {
                    echo "fail";
             }

          
         
            //  if(mysqli_num_rows($data) != 0 ) 
            //  {
            //   // echo "hiii";
            //   // $result == true;
            //   //  $result = "Loggedin Successfully!...";
            //   $response = array('success' => true);
            // }
            //  else
            //  {
            //   $response = array('success' => false, 'message' => 'Invalid email or password');
            //  }
        }
       
        
  
?>
