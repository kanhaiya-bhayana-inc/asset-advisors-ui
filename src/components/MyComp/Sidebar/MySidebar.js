import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './sidebar.css';
import { IoMdLogOut } from 'react-icons/io';
import { SiGnuprivacyguard } from 'react-icons/si';
import { TiTick } from 'react-icons/ti';

// import DashboardAdv from '../DashboardAdvisor/DashAdvisor';
import { Link, Outlet } from 'react-router-dom';

export default function MySide() {
  const dispName = localStorage.getItem("advName");
  const logout = () => {
    localStorage.setItem("tokena", "");
    localStorage.setItem("id", "");
    localStorage.setItem("advName", "");
    window.location = '/';
  }
  const [showNav, setShowNav] = useState(true)
  const [showPass,setShwoPass] = useState(false);
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
          <IoMdLogOut size={28} onClick={logout} className='mt-1' />
          {/* </button> */}
        </div>
      </header>
      <div className={`l-navbar${showNav ? ' show' : ''}`}>

        <nav className="navv">
          <div>
            <a href="/advisordash" className="nav_logo">
              <i className='bi bi-alexa nav_logo-icon' /> <span className="nav_logo-name">E-Wealth Manager</span>
            </a>
            <div className="nav_list">
              <Link to="/advisordash" className="nav_link">
                <i className='bi bi-people nav_icon' /><span className="nav_name">Clients</span>
              </Link>
              {/* <Link to="/addClient" className="nav_link">
              <i className='bi bi-person-add nav_icon' /><span className="nav_name">Add Client</span>
            </Link> */}
              <Link to="/profile" className="nav_link">
                <i className='bi bi-person-check nav_icon' /><span className="nav_name">Profile</span>
              </Link>
              <Link to="/advisordash" className="nav_link">
                <SiGnuprivacyguard /><span className="nav_name" onClick={(e) =>{setShwoPass(true)}}>Change Password</span>
              </Link>
              {/* <a href="/" target="_blank" className="nav_link">
              <i className='bi bi-person-check nav_icon' /><span className="nav_name">Analytics</span>
            </a> */}
            </div>
          </div>
          {/* <a href="https://cluemediator.com" target="_blank" className="nav_link">
          <i className='bi bi-box-arrow-left nav_icon' /><span className="nav_name">SignOut</span>
        </a> */}
          <p className='text-center mb-4 p-3'>&copy; &nbsp;Copyright, reserved<br></br> by e-wealth manager</p>
        </nav>
      </div>
      <div className="pt-4 pb-4">
        <h4>@{dispName}'s Dashboard</h4>
        {/* <DashboardAdv/> */}
       {showPass ? <div style={{width:"50%"}}>
          <div className="alert alert-warning alert-dismissible fade show" style={{width:"auto"}} role="alert">
            <TiTick size={25} />
            <strong>Hello user!</strong> An email has been sent to you, check your mail inbox.
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={(e)=>{setShwoPass(false)}}></button>
          </div>
        </div> : ""}
        <Outlet />
      </div>
    </div>
  )
}
