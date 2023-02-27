//import React from 'react'
import  '../Sign_up/Form.css'
import  '../Sign_up/Form.module.css'
import pic from './team.svg'
import { useFormik } from 'formik';
import { signUpSchema } from './Helper.js';
import { Link } from 'react-router-dom';
function Form() {
  const initialValues = {
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    company: "",
    address: "",
    state: "",
    city: "",
    password: "",
    confirmpassword: ""
  }


  /* A hook that is used to handle form state in React. */
  const Formik = useFormik({
    initialValues: initialValues,
    validationSchema: signUpSchema,
    onSubmit: (values, action) => {
      // e.preventDefault();
      console.log(values);
      try {
        fetch('https://localhost:7214/api/User/add-user', {
          method: 'POST',
          headers: {
            'Content-type': 'application/json',
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "POST, GET, OPTIONS, DELETE",
            "Access-Control-Max-Age": 86400
          },
          body: JSON.stringify(values)

        })
          .then(res => res.json())
          .then((data) =>{
            console.log(data);
            alert("Advisor registered successfully.")
            window.location ='/login'
          })
      } catch (error) {
        console.log("Error b->", error);
      }
      action.resetForm();
    }
  })
  //console.log(Formik.errors);
  //console.log(Formik);
  return (
    <div>
    {/* <h1>hey</h1> */}
      <section className='Form my-4 mx-5'>
          <div className='container'>
            <div className='row py-5'>
              <div className='col-lg-6 '>
                <img src={pic} 
                className='img-fluid office' alt='team'/>
              </div>
              <div className='col-lg-6 px-5 pt-1'>
                <h4>Create a new Account</h4>

                <form onSubmit={Formik.handleSubmit}>
                  <div className='form-row'>
                    <div className='col-lg-7'>
                      <input type="name" name="firstName" placeholder='First Name' className='form-control shadow-none my-3' value={Formik.values.firstName} onChange={Formik.handleChange} onBlur={Formik.handleBlur}></input>
                      {Formik.errors.firstName&&Formik.touched.firstName?(<p className='Form-error'> {Formik.errors.firstName}</p>):null}
                    </div>
                    <div className='col-lg-7'>
                      <input type="name" name="lastName" placeholder='Last Name' className='form-control shadow-none my-3' value={Formik.values.lastName} onChange={Formik.handleChange} onBlur={Formik.handleBlur}></input>
                      {Formik.errors.lastName&&Formik.touched.lastName?(<p className='Form-error'> {Formik.errors.lastName}</p>):null}
                    </div>
                  </div>
                  {/* <div className='form-row'>
                    
                  </div> */}
                  <div className='form-row'>
                    <div className='col-lg-7'>
                      <input type="text" name="phone" placeholder='Phone No' className='form-control shadow-none my-3' value={Formik.values.phone} onChange={Formik.handleChange} onBlur={Formik.handleBlur}></input>
                      {Formik.errors.phone&&Formik.touched.phone?(<p className='Form-error'> {Formik.errors.phone}</p>):null}
                    </div>
                  </div>
                  <div className='form-row'>
                    <div className='col-lg-7'>
                      <input type="email" name="email" placeholder='Email' className='form-control shadow-none my-3' value={Formik.values.email} onChange={Formik.handleChange} onBlur={Formik.handleBlur}></input>
                      {Formik.errors.email&&Formik.touched.email?(<p className='Form-error'> {Formik.errors.email}</p>):null}
                    </div>
                  </div>
                  <div className='form-row'>
                    <div className='col-lg-7'>
                      <input type="name" name="company" placeholder='Company' className='form-control shadow-none my-3' value={Formik.values.company} onChange={Formik.handleChange} onBlur={Formik.handleBlur}></input>
                      {Formik.errors.company&&Formik.touched.company?(<p className='Form-error'> {Formik.errors.company}</p>):null}
                    </div>
                  </div>
                  <div className='form-row'>
                    <div className='col-lg-7'>
                      <input type="name" name="address" placeholder='address' className='form-control shadow-none my-3' value={Formik.values.address} onChange={Formik.handleChange} onBlur={Formik.handleBlur}></input>
                      {Formik.errors.address&&Formik.touched.address?(<p className='Form-error'> {Formik.errors.address}</p>):null}
                    </div>
                  </div>
                  <div className='form-row'>
                    <div className='col-lg-7'>
                      <input type="name" name="state" placeholder='state' className='form-control shadow-none my-3' value={Formik.values.state} onChange={Formik.handleChange} onBlur={Formik.handleBlur}></input>
                      {Formik.errors.state&&Formik.touched.state?(<p className='Form-error'> {Formik.errors.state}</p>):null}
                    </div>
                  </div>
                  <div className='form-row'>
                    <div className='col-lg-7'>
                      <input type="name" name="city" placeholder='City' className='form-control shadow-none my-3' value={Formik.values.city} onChange={Formik.handleChange} onBlur={Formik.handleBlur}></input>
                      {Formik.errors.city&&Formik.touched.city?(<p className='Form-error'> {Formik.errors.city}</p>):null}
                    </div>
                  </div>
                  <div className='form-row'>
                    <div className='col-lg-7'>
                      <input type="password" name="password" placeholder='password' className='form-control shadow-none my-3' value={Formik.values.password} onChange={Formik.handleChange} onBlur={Formik.handleBlur}></input>
                      {Formik.errors.password&&Formik.touched.password?(<p className='Form-error'> {Formik.errors.password}</p>):null}
                    </div>
                  </div>
                  <div className='form-row'>
                    <div className='col-lg-7'>
                      <input type="password" name="confirmpassword" placeholder='Confirm password' className='form-control shadow-none' value={Formik.values.confirmpassword} onChange={Formik.handleChange} onBlur={Formik.handleBlur}></input>
                      {Formik.errors.confirmpassword&&Formik.touched.confirmpassword?(<p className='Form-error cnfPass'> {Formik.errors.confirmpassword}</p>):null}
                    </div>
                  </div>
                  <div className='form-row'>
                    <div className='col-lg-7'>
                    <button type="submit" className="btn btn-primary mt-3 mb-3 glow-on-hover">Sign Up</button>
                    
                    </div>
                  </div>
                  {/* <a href='#' style={{textDecoration: "none"}}>Forgot password</a> */}
                  {/* <div classform="form-check">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked"/>
  <label className="form-check-label" htmlFor="flexCheckChecked">
    I agree to the terms and conditions 
  </label>
</div> */}

                  <p>Already Have An Account? <Link style={{textDecoration: "none"}} to='/login'>Login Here</Link></p>
                </form>
              </div>
            </div>
          </div>
      </section>
  </div>
  )
}

export default Form