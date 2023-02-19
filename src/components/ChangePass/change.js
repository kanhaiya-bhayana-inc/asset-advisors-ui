import React from 'react';
import { useFormik } from 'formik';
import {fschema} from './FPass';
function Change() {
    function setToken(val)
    {

    }
    function accVerify()
    {

    }
    const initialValues={
        password:"",
        confirmpassword:""
      }
      const Formik=useFormik({
        initialValues:initialValues,
        validationSchema:fschema,
        onSubmit: (values,action) =>{
          //console.log(values);
          action.resetForm();
        }
      })
  return (
    <>
    <div className='container text-cener'>
     <form onSubmit={Formik.handleSubmit}> <h2>Enter You Verification token</h2>
      <div className='form-row'>
        <div className='col-lg-10'>
            <input type="password" name="token" placeholder='enter verification token' required onChange={(e) => setToken(e.target.value)} className='form-control shadow-none my-3'>
                </input>
                </div>
                </div>
        <div className="form-row">
        <input type="password" name="password" placeholder='Enter New Password'  value={Formik.values.password} required onChange={Formik.handleChange} onBlur={Formik.handleBlur} className='form-control shadow-none my-3'/>
        {Formik.errors.password&&Formik.touched.password?(<p className='Form-error'> {Formik.errors.password}</p>):null}
        </div>
        <div className="form-row">
        <input type="password" name="confirmpassword" placeholder='Confirm Password' value={Formik.values.confirmpassword} required onChange={Formik.handleChange} onBlur={Formik.handleBlur} className='form-control shadow-none my-3'/>
        {Formik.errors.confirmpassword&&Formik.touched.confirmpassword?(<p className='Form-error'> {Formik.errors.confirmpassword}</p>):null}
        </div>
        <div className='form-row'>
                     <div className='col-lg-2'>
                        <button type="submit" onClick={accVerify} className="btn btn-dark mt-3 mb-4">Verify</button>
                    </div>
        </div> 
                        </form>
                        </div>
    </>
  )
}

export default Change;
