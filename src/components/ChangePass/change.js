import React, {useState} from 'react';
import { useFormik } from 'formik';
import { fschema } from './FPass';
import {routes} from '../Utils/Globals';

function Change() {

  const [showSuccessMsg,setShowSuccessMsg] = useState(false);
  const [dispMsg,setDispMsg] = useState("");
  const [showErrorsMsg,setShowErrorMsg] = useState(false);
  const successBg = 'alert alert-success alert-dismissible fade show';
  const warningBg = 'alert alert-warning alert-dismissible fade show';


  function myFuncCall (){
    window.location = '/login';
  }

  const style ={
    background:"white",
    height:"550px",
    // width:"1450px",
    marginLeft:"40px",
    marginRight:"40px",
    padding:"30px",
    borderRadius:"15px"
  }
  const initialValues = {
    token: "",
    password: "",
    confirmpassword: ""
  }
  const Formik = useFormik({
    initialValues: initialValues,
    validationSchema: fschema,
    onSubmit: (values, action) => {
      console.log(values);
      try {
        fetch(routes.resetPassword, {
          method: 'POST',
          headers: {
            'Content-type': 'application/json',
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "POST, GET, OPTIONS, DELETE",
            "Access-Control-Max-Age": 86400
          },
          body: JSON.stringify(values)

        })
          .then(res => {
            if (res.status === 200){
              return res.text()
            }
            return res.text()

          })
          .then((data) =>{
            console.log(data);
            // alert(data)
            setDispMsg(data)
            setShowSuccessMsg(true);
            setTimeout(myFuncCall, 5000);
          })
      } catch (error) {
        console.log("Error b->", error);
        setShowErrorMsg(true);
      }
      action.resetForm();
    }
  })
  return (
    <>
      <div className='d-flex justify-content-center' style={style}>
      
        <form onSubmit={Formik.handleSubmit}> <h2>Enter details to change your password.</h2>
          <div className='form-row'>
          {showSuccessMsg && <div className='p-4 tex-center'>
            <div className={(showErrorsMsg ? warningBg : successBg)} style={{width:"auto"}} role="alert">
            {showErrorsMsg ? <i class="bi bi-exclamation-circle"></i> : <i className="bi bi-check-circle mt-1"></i>} &nbsp;
             {dispMsg}
              <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={(e)=> {setShowSuccessMsg(false);}}></button>
            </div>
          </div> 
           }
            <div className='col-lg-10'>
              <input type="password"  name="token" placeholder='Enter verification token' value={Formik.values.token} onChange={Formik.handleChange} onBlur={Formik.handleBlur} className='form-control shadow-none my-3' />
              {Formik.errors.token && Formik.touched.token ? (<p className='Form-error'> {Formik.errors.token}</p>) : null}

            </div>
          </div>
          <div className="form-row ">
          
            <div className='col-lg-10'>
              <input  type="password" name="password" placeholder='Enter New Password' value={Formik.values.password} required onChange={Formik.handleChange} onBlur={Formik.handleBlur} className='form-control shadow-none my-3' />
              {Formik.errors.password && Formik.touched.password ? (<p className='Form-error'> {Formik.errors.password}</p>) : null}
            </div>
          </div>
          <div className="form-row">
            <div className='col-lg-10'>

              <input type="password" name="confirmpassword" placeholder='Confirm Password' value={Formik.values.confirmpassword} required onChange={Formik.handleChange} onBlur={Formik.handleBlur} className='form-control shadow-none my-3' />
              {Formik.errors.confirmpassword && Formik.touched.confirmpassword ? (<p className='Form-error'> {Formik.errors.confirmpassword}</p>) : null}
            </div>
          </div>
          <div className='form-row'>
            <div className='col-lg-4'>
              <button type="submit" className="btn btn-dark mt-3 mb-4">Update</button>
            </div>
          </div>

          <div style={{ color: 'red' }}>
            
            <h5 style={{ color: 'red' }}>
            Don’t share your account password with anyone.
            </h5>
            <p >
            Sharing your account email and password with unauthorized websites or apps can compromise the security of your details and personal information. 
            </p>
          </div>
        </form>
      </div>
    </>
  )
}

export default Change;
