import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import { useEffect, useState } from 'react';
import Header from './header';

function Addcontact() {

  // let [name, setName] = useState();
  // let [email, setEmail] = useState();
  // let [password, setPassword] = useState();
  // let [date, setDate] = useState();
  // let [phone, setPhone] = useState();
  // let [address, setAddress] = useState();
  // let [city, setCity] = useState();
  // let [hobby, setHobby] = useState([]);
  // let [gender, setGender] = useState();
  
  useEffect (() => {
   
    var auth = window.localStorage.getItem('username')
    if(auth != null)
    {
      // window.location.href = '/addcontact';
    }
   
  },[])
  
  let[val,setVal] = useState({
    name:"",
    email:"",
    password:"",
    date:"",
    phone:"",
    address:"",
    city:"",
    hobby:"",
    gender:"",

})


const handleChange = (e) => {
 
    setVal({...val,[e.target.name]:e.target.value})
    
}


  const handleSubmit = () => {
    // e.preventDefult();
   
    axios.post('http://localhost/mycontact/addcontact.php', {
      name: val.name,
      email: val.email,
      password: val.password,
      date: val.date,
      phone: val.phone,
      address: val.address,
      city: val.city,
      hobby: val.hobby,
      gender: val.gender,
     
    })

      .then(function (response) {
        // handle success
        console.log(response);
        window.location ='/viewcontact' ;
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
  }

  return (
    <div className="App">
      <Header/>
      <section className="sec5">
        <div className="contact_bg " >
          <img src={require('../image/asset 12.png')} alt="" />
        </div>
        <div className="contact_bg2">
          <img src={require('../image/asset 13.png')} alt="" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-7 h-75 m-auto">
              <div className="contact_bg3">
                <div className="section_title">
                  <h2>Personal Details</h2>
                  <span>
                    <img src={require('../image/asset 3.png')} alt="" />
                  </span>
                </div>
                <form >
                  <div className="row">
                    <div className="col-lg-12 pe-0">
                      <div className="contact_field">
                        <input type="text" className="w-100" name="name" placeholder="First Name"
                          required="" onChange={handleChange} value={val.name}/>
                      </div>
                    </div>

                    <div className="col-lg-12 pe-0">
                      <div className="contact_field">
                        <input type="text" className="w-100" name="email" placeholder="Email" required="" onChange={handleChange} value={val.email}/>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="contact_field">
                        <input type="password" name="password" placeholder="Enter password" required="" onChange={handleChange} value={val.password} />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="contact_field pe-0">
                        <input type="date" name="date" onChange={handleChange} value={val.date} />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="contact_field">
                        <input type="number" name="phone" placeholder="Phone no." required="" onChange={handleChange} value={val.phone} />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="contact-field">
                        <select name="city" onChange={handleChange} value={val.city} >
                          <option value="" >City</option>
                          <option value="Surat"  >Surat</option>
                          <option value="Ahmedabad"  >Ahmedabad</option>
                          <option value="Baroda" >Baroda</option>
                          <option value="Rajkot"  >Rajkot </option>
                          <option value="Bhavnagar"  >Bhavnagar</option>
                          <option value="Bharuch" >Bharuch</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="contact_field pe-0 me-0">
                        <input type="text" className="w-100" style={{ height: "100px" }} name="address" placeholder="Enter Address" required="" onChange={handleChange} value={val.address} />
                      </div>
                    </div>
                    <div className="col-lg-12 ">
                      <div className="contact_field d-flex">
                        <label className="pe-3 pt-2">Hobby: </label>
                        <div className="form-check d-flex me-2"  >
                          <input className="form-check-input me-1" name="hobby" type="checkbox" value="Reading"   onChange={handleChange}   />
                          <label className="form-check-label pt-2" htmlFor="flexCheckDefault">Reading</label>
                        </div>
                        <div className="form-check d-flex me-2">
                          <input className="form-check-input me-1" name="hobby" type="checkbox" value="Music" onChange={handleChange} />
                          <label className="form-check-label pt-2" htmlFor="flexCheckDefault"> Music</label>
                        </div>
                        <div className="form-check d-flex me-2">
                          <input className="form-check-input me-1" name="hobby" type="checkbox" value="Cooking"  onChange={handleChange} />
                          <label className="form-check-label pt-2" htmlFor="flexCheckDefault"> Cooking </label>
                        </div>
                        <div className="form-check d-flex me-2">
                          <input className="form-check-input me-1" name="hobby" type="checkbox" value="Dance"  onChange={handleChange} />
                          <label className="form-check-label pt-2" htmlFor="flexCheckDefault">Dance</label>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12 ">
                      <div className="contact_field d-flex"  onChange={handleChange} value={val.gender} >
                        <label className="pe-3 pt-2">Gender: </label>
                        <div className="form-check d-flex me-2">
                          <input className="form-check-input radioo" name="gender" type="radio"  value="Male"/>
                          <label className="form-check-label pt-2" htmlFor="flexCheckDefault"> Male </label>
                        </div>
                        <div className="form-check d-flex me-2">
                          <input className="form-check-input radioo" name="gender" type="radio" value="Female"/>
                          <label className="form-check-label pt-2" htmlFor="flexCheckDefault"> Female </label>
                        </div>
                      </div>
                    </div>
                   
                    <div className="col-lg-12 text-center">

                      <div className="slider-btn">
                        <input type="submit" className="btn" name="Submit" style={{ borderRedius: "10px" }} data-animation="fadeInRight"
                          data-delay=".8s" onClick={handleSubmit}>
                        </input>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          
          </div>
        </div>
      </section>

    </div>
  );
}

export default Addcontact;
