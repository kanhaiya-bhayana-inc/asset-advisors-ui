import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './sidebar.css';
import { IoMdLogOut } from 'react-icons/io';
import { SiGnuprivacyguard } from 'react-icons/si';
import { TiTick } from 'react-icons/ti';
import { MdOutlinePrivacyTip } from 'react-icons/md';
import pic from '../Sidebar/favicon-32x32.png'
import swal from 'sweetalert';
import emailjs from '@emailjs/browser';



// import DashboardAdv from '../DashboardAdvisor/DashAdvisor';
import { Link, Outlet } from 'react-router-dom';


export default function MySide() {
  const dispName = localStorage.getItem("advName");

  var templateParams = {
    notes: 'We got your request for changing the password, Please follow below steps to change your password:\n 1. You have received a verification token on this mail, use that token to change your password. \n 2. You can only change your password in next 20 minutes after that your token will be expired. \n 3. Use token and enter your new password then confirm new password and your password will be changed.',
    to_name: dispName,
    // to_name:"",
    message:"",
    to_email:"bkanhaiya.bhayana@gmail.com"
};
  const sendEmail =() =>{
    emailjs.send('service_e0rgs4f', 'template_yxdwaeh', templateParams,'Pt9HoMrwEOtiaXuMI')
    .then(function(response) {
      if (response.status === 200){
        swal("You will receive an email very soon, Follow the instructions in the email to change your password!",{
          icon:"success"
        });
      }
       console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
      swal("Something went wrong, try again!",{
        icon:"error"
      });
       console.log('FAILED...', error);
    });

  }

  const callChangPass = async() =>{
    let token = localStorage.getItem("tokena");
    let ntoken = "Bearer " + token.replaceAll('"', '');
    let id = localStorage.getItem("id");
    console.log(id);
    await fetch(`https://localhost:7214/api/User/change-password`, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, GET, OPTIONS, DELETE",
        "Authorization": ntoken,
        "Access-Control-Max-Age": 86400
      }
    })
      .then(res =>{
        // res.json()
        // console.log(res);
        return res.text();
      })
      .then((data) => {
        // let d = JSON.parse(data)
        if (data){
          templateParams.message = data;
          sendEmail();
        }
        
        // console.log(data); 
      })
  }
  
  const logout = () => {
    localStorage.setItem("tokena", "");
    localStorage.setItem("id", "");
    localStorage.setItem("advName", "");
    window.location = '/';
  }
  const [showNav, setShowNav] = useState(true)
  const [showPass,setShwoPass] = useState(false);

  function showDelDi(){
    swal({
      title: "Do you want to logout?",
      icon: "info",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        logout();
        // myFuncCall();
      }
    });
  }
  function chanPass(){
    swal({
      title: "Do you really want to change your password?",
      icon: "info",
      buttons: true,
      dangerMode: true,
    })
    .then((chnagePassword) => {
      if (chnagePassword) {
        callChangPass();
         
        
        // else{
        //   swal("Something went wrong, try again!",{
        //     icon:"error"
        //   });
        // }
        // myFuncCall();
      }
    });
  }
  return (
    <div className={`body-area${showNav ? ' body-pd' : ''}`}>
      <header className={`header${showNav ? ' body-pd' : ''}`}>
        <div className="header_toggle">
          <i
            className={`bi ${showNav ? 'bi-x' : 'bi-list'}`}
            onClick={() => setShowNav(!showNav)} />
        </div>
        <div className="header_img">
          {/* <button onClick={logout}> */}
          {/* <i class="bi bi-box-arrow-right" size={30}></i> */}
          {/* <IoMdLogOut size={28} onClick={logout} className='mt-1' /> */}
          {/* </button> */}
          {/* <select>
            <option>Logout</option>
            <option></option>
            <option>Logout <IoMdLogOut size={12} onClick={logout} className='mt-1' /></option>
            <option></option>
          </select> */}
        </div>
      </header>
      <div className={`l-navbar${showNav ? ' show' : ''}`}>

        <nav className="navv">
          <div>
            <a href="/advisordash" className="nav_logo">
              <img src={pic} className='dshlogo'></img> <span className="nav_logo-name ">Asset Advisors</span>
            </a>
            <div className="nav_list">
              <Link to="/advisordash" className="nav_link">
                <i className='bi bi-people nav_icon' /><span className="nav_name dshhvr">Clients</span>
              </Link>
              {/* <Link to="/addClient" className="nav_link">
              <i className='bi bi-person-add nav_icon' /><span className="nav_name">Add Client</span>
            </Link> */}
              <Link to="/profile" className="nav_link">
                <i className='bi bi-person-check nav_icon' /><span className="nav_name dshhvr">Profile</span>
              </Link>
              <Link to="/advisordash" className="nav_link">
                <SiGnuprivacyguard /><span className="nav_name dshhvr" onClick={chanPass}>Change Password</span>
              </Link>
              {/* <Link to="/privacypolicy" className="nav_link">
                <MdOutlinePrivacyTip /><span className="nav_name dshhvr">Privacy Policy</span>
              </Link> */}
              {/* <a href="/" target="_blank" className="nav_link">
              <i className='bi bi-person-check nav_icon' /><span className="nav_name">Analytics</span>
            </a> */}
            </div>
          </div>
          {/* <button className='nav_link'> */}

          <button className="nav_link cstm" style={{border:'none',background:"transparent"}} onClick={showDelDi}> 
          <i className='bi bi-box-arrow-left nav_icon' /><span className="nav_name dshhvr">SignOut</span>
        </button>
          {/* </button>  */}
        {/* <Link to="/privacypolicy" className="nav_link disabled-link">
        <i class="bi bi-c-circle"></i><span className="nav_name dshhvr">Copyright, reserved<br></br> by asset advisors</span>
              </Link> */}
        </nav>
      </div>
      <div className="pt-4 pb-4">
        <h4>@{dispName}'s Dashboard</h4>
        {/* <DashboardAdv/> */}
       {showPass ? <div style={{width:"70%"}}>
          <div className="alert alert-warning alert-dismissible fade show" style={{width:"auto"}} role="alert">
            <TiTick size={25} className='ticbtn' />
            <strong></strong> &nbsp;You will receive an email very soon. Follow the instructions to change your password
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={(e)=>{setShwoPass(false)}}></button>
          </div>
        </div> : ""}
        <Outlet />
      </div>
    </div>
  )
}
