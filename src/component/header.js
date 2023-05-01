import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

export default function Header() {
  const [auth,setAuth] = useState('')

  useEffect (() => {
    var auth = window.localStorage.getItem('username');
    if(auth==null)
    {
      window.location = '/';
    }
    
    setAuth(auth);
    // console.log(auth)
  },[])

  const handleLogout = () => {
    window.localStorage.removeItem('username')
  }
  return (
    <div>
      <Navbar bg="dark" variant='dark' expand="lg" className='font'>
      <Container>
        <Navbar.Brand href="#home" className='font'>  <img src={require('../image/logo.png')} alt="" height="50px" width="50px"

    /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Link to='/register' className='nav-link'>Registration</Link>
            <Link to='/addcontact' className='nav-link'>Add Contact</Link>
            <Link to='/viewcontact' className='nav-link'>View Contact</Link>
            <h4 style={{color:'white', paddingLeft:"200px", paddingTop:'20px'}}>Welcome : <span className='auth_name'>{auth}</span> </h4>
          </Nav>

        </Navbar.Collapse>
        <Navbar.Text>
          <Link to='/' style={{fontSize:"20px"}} onClick={handleLogout} className='nav-link'>Log Out</Link>
          </Navbar.Text>
      </Container>
    </Navbar>
    </div>
  )
}
