//import React from 'react'
import  '../Sign_up/Form.css'
import  '../Sign_up/Form.module.css'
import pic from './team.svg'
import { useFormik } from 'formik';
import { signUpSchema } from './Helper.js';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import emailjs from '@emailjs/browser';
// import { SMTPClient } from 'emailjs';

function Form() {
  const [isLoading, setIsLoading] = useState(false);
  // const client = new SMTPClient({
  //   user: 'shivamsharmaincedo@gmail.com',
  //   password: 'shiv@123',
  //   host: 'smtp.shivamsharmaincedo@gmail.com',
  //   ssl: true,
  // });
  var templateParams = {
    notes: 'You have successfully created your account, Use the token you have recived on your mail to verify your account.',
    to_name: '',
    // to_name:"",
    message:"",
    to_email:"bkanhaiya.bhayana@gmail.com"
};
const sendEmail = (action) => {
  emailjs
    .send(
      "service_e0rgs4f",
      "template_4e0cj9r",
      templateParams,
      "Pt9HoMrwEOtiaXuMI"
    )
    .then(
      function (response) {
        setIsLoading(false);
        sc();
        action.resetForm();
        setDispMsg(
          "Your account has been created successfully, You will receive an email very soon. Follow the instructions to verify your account!"
        );
        setShowSuccessMsg(true);
        setShowErrorMsg(false);
        console.log("SUCCESS!", response.status, response.text);
      },
      function (error) {
        setIsLoading(false);
        sc();
        setDispMsg(
          "Some error occurred while creating your account, Please check the details you entered or try again later!"
        );
        setShowSuccessMsg(true);
        setShowErrorMsg(true);
        console.log("FAILED...", error);
      }
    );
};

  // function sendMail(){
  // client.send(
  //   {
  //     text: 'i hope this works',
  //     from: client.user,
  //     to: 'bkanhaiya.bhayana@gmail.com',
  //     cc: '',
  //     subject: 'testing emailjs',
  //   },
  //   (err, message) => {
  //     console.log(err || message);
  //   }
  // );
  // }

  
  const [showSuccessMsg,setShowSuccessMsg] = useState(false);
  const [dispMsg,setDispMsg] = useState("");
  const [showErrorsMsg,setShowErrorMsg] = useState(false);
  const successBg = 'alert alert-success alert-dismissible fade show';
  const warningBg = 'alert alert-warning alert-dismissible fade show';
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
    onSubmit: (values, action) =>  {
      // e.preventDefault();
      console.log(values);
      try {
        setIsLoading(true);
        fetch("https://advisorrun.azurewebsites.net/add-user", {
          method: "POST",
          headers: {
            "Content-type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "POST, GET, OPTIONS, DELETE",
            "Access-Control-Max-Age": 86400,
          },
          body: JSON.stringify(values),
        })
          .then((res) => {
            // res.json()
            if (res.status === 200) {
              return res.text();
            } else if (res.status === 400) {
              setIsLoading(false);
              return res.text();
            } else {
              setIsLoading(false);
              return res.text();
            }
          })
          .then((data) => {
            try {
              console.log(JSON.parse(data).verificationToken);
              let m = JSON.parse(data).verificationToken;
              let sn = JSON.parse(data).sortName;
              if (m) {
                templateParams.message = m;
                templateParams.to_name = sn;
                sendEmail(action);
              }
            } catch (error) {
              setIsLoading(false);
              console.log("Data" + data);
              sc();
              if (data == "User already Exist") {
                setDispMsg(
                  "This advisor is already registered, Please check your details!"
                );
                setShowSuccessMsg(true);
                setShowErrorMsg(true);
              } else {
                setDispMsg(
                  "Some error occurred while creating your account, Please check the details you entered or try again later!"
                );
                setShowSuccessMsg(true);
                setShowErrorMsg(true);
              }
            }
          })
          .catch((error) => {
            sc();
            
            console.log("Error occurred:", error);

            if (error == "TypeError: Load failed" || error == "TypeError: Failed to fetch") {
              setShowErrorMsg(true);
              setShowSuccessMsg(true);
              setDispMsg("Server is Facing some issue. Please check Again Later!");
            }
            setIsLoading(false);
            // Handle the error here
          });
      } catch (error) {
        console.log("Error b->", error);
        setIsLoading(false);
      }
    },
  })
    const sc = () =>{
      window.scrollTo(0, 0)
    }
 
  return (
    <div>
    {/* <h1>hey</h1> */}
      <section className='Form my-4 mx-5'>
          <div className='container'>
            <div className='row py-5'>
            {showSuccessMsg && <div className='p-4 tex-center'>
            <div className={(showErrorsMsg ? warningBg : successBg)} style={{width:"auto"}} role="alert">
            {showErrorsMsg ? <i class="bi bi-exclamation-circle"></i> : <i className="bi bi-check-circle mt-1"></i>} &nbsp;
              <strong></strong> {dispMsg}
              <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={(e)=> {setShowSuccessMsg(false)}}></button>
            </div>
          </div> 
           }
           
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
                      <input type="name" name="address" placeholder='Address' className='form-control shadow-none my-3' value={Formik.values.address} onChange={Formik.handleChange} onBlur={Formik.handleBlur}></input>
                      {Formik.errors.address&&Formik.touched.address?(<p className='Form-error'> {Formik.errors.address}</p>):null}
                    </div>
                  </div>
                  <div className='form-row'>
                    <div className='col-lg-7'>
                      <input type="name" name="state" placeholder='State' className='form-control shadow-none my-3' value={Formik.values.state} onChange={Formik.handleChange} onBlur={Formik.handleBlur}></input>
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
                      <input type="password" name="password" placeholder='Password' className='form-control shadow-none my-3' value={Formik.values.password} onChange={Formik.handleChange} onBlur={Formik.handleBlur}></input>
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
                    <button
                      type="submit"
                      className={`btn btn-primary mt-3 mb-3 glow-on-hover ${
                        isLoading ? "loading" : ""
                      }`}
                      // onClick={() => setIsLoading(true)}
                    >
                      {isLoading ? "Signing Up..." : "Sign Up"}
                    </button>
                    
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