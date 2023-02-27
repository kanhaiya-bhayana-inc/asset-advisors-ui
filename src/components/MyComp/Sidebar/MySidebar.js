import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './sidebar.css';
import { IoMdLogOut } from 'react-icons/io';
import { SiGnuprivacyguard } from 'react-icons/si';
import { TiTick } from 'react-icons/ti';
import { MdOutlinePrivacyTip } from 'react-icons/md';
import pic from '../Sidebar/favicon-32x32.png'

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
                <SiGnuprivacyguard /><span className="nav_name dshhvr" onClick={(e) =>{setShwoPass(true)}}>Change Password</span>
              </Link>
              <Link to="/privacypolicy" className="nav_link">
                <MdOutlinePrivacyTip /><span className="nav_name dshhvr">Privacy Policy</span>
              </Link>
              {/* <a href="/" target="_blank" className="nav_link">
              <i className='bi bi-person-check nav_icon' /><span className="nav_name">Analytics</span>
            </a> */}
            </div>
          </div>
          {/* <a href="https://cluemediator.com" target="_blank" className="nav_link">
          <i className='bi bi-box-arrow-left nav_icon' /><span className="nav_name">SignOut</span>
        </a> */}
        <Link to="/privacypolicy" className="nav_link disabled-link">
        &copy;<span className="nav_name dshhvr">Copyright, reserved<br></br> by asset advisors</span>
              </Link>
        </nav>
      </div>
      <div className="pt-4 pb-4">
        <h4>@{dispName}'s Dashboard</h4>
        {/* <DashboardAdv/> */}
       {showPass ? <div style={{width:"70%"}}>
          <div className="alert alert-warning alert-dismissible fade show" style={{width:"auto"}} role="alert">
            <TiTick size={25} className='ticbtn' />
            <strong>Hello user!</strong> &nbsp;You will receive an email very soon. Follow the instructions to change your password
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={(e)=>{setShwoPass(false)}}></button>
          </div>
        </div> : ""}
        <Outlet />
      </div>
    </div>
  )
}
