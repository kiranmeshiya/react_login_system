import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


export default function Login() {
    let [err, setErr] = useState("")
    let [val, setVal] = useState({
        username: "",
        password: "",
    })

    const handleChange = (e) => {
        setVal({ ...val, [e.target.name]: e.target.value })
    }
    
    const handleLogin = () => {

        if(!val.username || !val.password)
        {
            setErr("All Field are Mandatory.")
        }
        else
        {
            axios.post('http://localhost/mycontact/login.php', {
                name: val.username,
                password: val.password
            })
                .then(response => {
                     console.log(response.data)
                if (response.data === "success") {
                    window.localStorage.setItem('username',val.username);
                    window.location = '/addcontact';
                  } else {
                    setErr("Username & password are wrong");
                  }
    })
       
}
    }

    return (
        <div>
            <section className="login">
                <div className="contact_bg1 " >
                    <img src={require('../image/asset 12.png')} alt="" />
                </div>
                <div className="contact_bg22">
                    <img src={require('../image/asset 13.png')} alt="" />
                </div>
                <div className="container">
                    <div className="row" style={{ paddingTop: '50px' }}>
                        <div className="col-6 h-75 m-auto">
                            <div className="contact_bg3">
                                <div className="section_title justify-content-space-between">
                                    <h2>Login</h2>
                                    <span>
                                        <img src={require('../image/asset 3.png')} alt="" />
                                    </span>
                                    <span className=' '>Error : {err}</span>
                                </div>
                                <form>
                                    <div className="row">
                                        <div className="col-lg-12 pe-0">
                                            <div className="contact_field">
                                                <input type="text" className="w-100 " name="username"
                                                    placeholder="Enter Username " required="" onChange={handleChange} value={val.username} />
                                            </div>
                                        </div>
                                        <div className="col-lg-12 pe-0">
                                            <div className="contact_field">
                                                <input type="password" className="w-100 " name="password"
                                                    placeholder="Enter password" required="" onChange={handleChange} value={val.password} />
                                            </div>
                                        </div>
                                        <div className="col-lg-12 text-center">
                                            <div className="slider-btn">
                                                <input type="button" className="btn_login" name="Submit" value="Log in" onClick={handleLogin}></input>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                                <div className="col-lg-12 text-end ">
                                    <div className="linked text-end " >
                                        <Link to='/register'>New User </Link>
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

