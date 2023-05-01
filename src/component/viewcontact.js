import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import Table from 'react-bootstrap/Table';
import Header from './header';
import { Link } from 'react-router-dom';

export default function Viewcontact() {

  let [val, setval] = useState([])
  let [status, setstatus] = useState(false)

  useEffect(() => {

    loadRecord();
   
  },[])

  const loadRecord = async () => {
    const result = await  axios.get('http://localhost/mycontact/viewcontact.php')
          setval(result.data)
          setstatus(true);
     
  
  }
  const handleDelete = (contact_id) => {
     axios.delete(`http://localhost/mycontact/deletecontact.php?id=${contact_id}`)
    .then((result) => {
      console.log(result);
      // handle success
        loadRecord();
      //  console.log(val)
    
    })
    .catch(function (error) {
      // handle error
      console.log(error);
      alert("Error in Delete code")
    })

  }
  if (status) {
    return (
      <div>
        <div className="App">
          <Header/>
          <section className="secview">
          
            <div className="container">
              <div className="row">
                <div className="col-12" style={{ marginTop: "10px" }}>
                  <div className="about-content">
                    <div className="about-title1">
                      <h2>
                        All Personal Details
                      </h2>
                      <span className="line"> <img src={require('../image/asset 3.png')} alt="circle_right" /></span>
                    </div>
                    <Table striped bordered hover variant="transperant" className=' text-center border-5' style={{ zIndex: "100", border: "2px solid black", fontSize: "14px" }}>
                      <thead>
                        <tr>
                          <th>Id</th>
                          <th>Name</th>
                          <th>Email</th>
                          <th>password</th>
                          <th>Date</th>
                          <th>Phone</th>
                          <th>Address</th>
                          <th>City</th>
                          <th>Hobby</th>
                          <th>Gender</th>
                          <th>Update</th>
                          <th>Delete</th>
                        </tr>
                      </thead>
                      <tbody>
                        {
                          val.map((items,index) => {
                            return (
                              <tr key={index}>
                                <td>{items.id}</td>
                                <td>{items.name}</td>
                                <td>{items.email}</td>
                                <td>{items.password}</td>
                                <td>{items.date}</td>
                                <td>{items.phone}</td>
                                <td>{items.address}</td>
                                <td>{items.city}</td>
                                <td>{items.hobby}</td>
                                <td>{items.gender}</td>
                                <td><Link to={`/editcontact/${items.id}`}>Update</Link></td>
                                <td><Link to="" onClick={() => handleDelete(items.id)}>Delete</Link></td>
                              </tr>
                            )
                          })
                        }
                      </tbody>

  
                    </Table>


                  </div>
                </div>
              </div>
            </div>
          </section>

        </div>
      </div>
    )
  }
  else {
    return (
      <>
        <h1>Loading...........</h1>
      </>
    )
  }
}
