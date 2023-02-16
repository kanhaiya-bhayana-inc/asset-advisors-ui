import React from 'react'
// import pic from './undraw_access_account_re_8spm.svg'
import pic from '../LoginClient/undraw_login_re_4vu2 (1).svg'
import  './style.css'
import { Link } from 'react-router-dom'


function Login() {
  return (
    <div >
      {/* <h1>hey</h1> */}
      <section className="Form style.my-4 style.mx-5">
        <div className='container'>

          <div className='row py-5'>
            <div className='col-lg-6 '>
              <img src={pic}
                className='img-fluid img m-lg-4' alt='image' />

            </div>
            <div className='col-lg-6   px-5 pt-5'>
              <h1 className='font-weight-bold py-3'>Hey Client</h1>
              <h4>Sign Into Your Account</h4>
              <form className='needs-validation' novalidate>
                <div className='form-row'>
                  <div className='col-lg-6'>
                    <input type="text" placeholder='Email' className=' form-control my-3 p-2' required></input>
                    <div className="invalid-feedback">
                      Please choose a username.
                    </div>
                  </div>
                </div>
                <div className='form-row'>
                  <div className='col-lg-7'>
                    <input type="Password" placeholder='******' className='form-control my-3 p-2' required></input>
                  </div>
                </div>
                <div className='form-row'>
                  <div className='col-lg-7'>
                    <button type="submit" className="btn btn-dark mt-3 mb-4">Login</button>


                  </div>
                </div>
                <Link to='#' style={{ textDecoration: "none" }}>Forgot Password</Link>
                
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
export default Login