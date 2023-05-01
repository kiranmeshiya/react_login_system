import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Register() {

    let[Data,setData] = useState({
        username:"",
        email:"",
        password:"",
    })

    const handleChange = (e) => {
        setData({...Data,[e.target.name]:e.target.value})
    }
    
    const handleRegister = () => {
        // e.preventDefult();
        if(!Data.username || !Data.email || !Data.password)
        {
            alert("All Field are Mandatory.")
        }
        axios.post('http://localhost/mycontact/register.php', { 

            username: Data.username,
            email:Data.email,
            password: Data.password,

        })

            .then(function (response) {
                // handle success
                // alert(hobby)

                console.log(response);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }

    return (
        <div>
            <section className="register">
                <div className="contact_bg1 " >
                    <img src={require('../image/asset 12.png')} alt="" />
                </div>
                <div className="contact_bg22">
                    <img src={require('../image/asset 13.png')} alt="" />
                </div>
                <div className="container">
                    <div className="row " style={{ paddingTop: '50px' }}>
                        <div className="col-6 h-75 m-auto">
                            <div className="contact_bg3">
                                <div className="section_title">
                                    <h2>Register</h2>
                                    <span>
                                        <img src={require('../image/asset 3.png')} alt="" />
                                    </span>
                                </div>
                                <form>
                                    <div className="row">
                                        <div className="col-lg-12 pe-0">
                                            <div className="contact_field">
                                                <input type="text" className="w-100 " name="username"
                                                    placeholder="Enter Username " required="" onChange={handleChange} value={Data.username}/>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 pe-0">
                                            <div className="contact_field">
                                                <input type="text" className="w-100" name="email" placeholder="Enter Email" required="" onChange={handleChange} value={Data.email}/>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 pe-0">
                                            <div className="contact_field">
                                                <input type="password" className="w-100 " name="password"
                                                    placeholder="Enter password" required="" onChange={handleChange} value={Data.password}/>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 text-center">
                                            <div className="slider-btn">
                                                <input type="submit" className="btn_login" name="Submit" value="Register User" onClick={handleRegister}></input>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                                <div className="col-lg-12 text-end">
                                            <div className="linked text-end">
                                            <Link to='/'>Login </Link>
                                            </div>
                                        </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
