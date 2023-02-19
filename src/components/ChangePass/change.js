import React from 'react';
import { useFormik } from 'formik';
import { fschema } from './FPass';
function Change() {
  const style ={
    background:"white",
    height:"550px",
    // width:"1450px",
    marginLeft:"40px",
    marginRight:"40px",
    padding:"30px",
    borderRadius:"15px"
  }

  const passStyle ={
    color :"red"
  }
  function setToken(val) {

  }
  function accVerify() {
    
  }
  const initialValues = {
    token: "",
    password: "",
    confirmPassword: ""
  }
  const Formik = useFormik({
    initialValues: initialValues,
    validationSchema: fschema,
    onSubmit: (values, action) => {
      console.log(values);
      try {
        fetch('https://localhost:7214/api/User/reset-password', {
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
              window.location ='/login'
            }
            return res.text()

          })
          .then((data) =>{
            console.log(data);
            alert(data)
          })
      } catch (error) {
        console.log("Error b->", error);
      }
      action.resetForm();
    }
  })
  return (
    <>
      <div className='d-flex justify-content-center' style={style}>
        <form onSubmit={Formik.handleSubmit}> <h2>Enter Details to change your password.</h2>
          <div className='form-row'>
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
              <button type="submit" onClick={accVerify} className="btn btn-dark mt-3 mb-4">Update</button>
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
