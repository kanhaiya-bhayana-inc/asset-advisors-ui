import React, { useState } from 'react'
import { useFormik } from 'formik';
import { fschema } from './Fpass';
import emailjs from '@emailjs/browser';


export default function ForgotPass() {

    const [showSuccessMsg, setShowSuccessMsg] = useState(false);
    const [dispMsg, setDispMsg] = useState("");
    const [showErrorsMsg, setShowErrorMsg] = useState(false);
    const successBg = 'alert alert-success alert-dismissible fade show';
    const warningBg = 'alert alert-warning alert-dismissible fade show';


    function myFuncCall() {
        // window.location = '/login';
    }
    var templateParams = {
        notes: 'We got your request for reseting the password, Please follow below steps to change your password:\n 1. You have received a verification token on this mail, use that token to change your password. \n 2. You can only change your password in next 20 minutes after that your token will be expired. \n 3. Use token and enter your new password then confirm new password and your password will be changed.',
        to_name: 'User',
        // to_name:"",
        message: "",
        to_email: "bkanhaiya.bhayana@gmail.com"
    };
    const sendEmail = () => {
        emailjs.send('service_e0rgs4f', 'template_yxdwaeh', templateParams, 'Pt9HoMrwEOtiaXuMI')
            .then(function (response) {
                setDispMsg("An email has been sent to you, Check your email for changing password!")
                setShowSuccessMsg(true);
                console.log('SUCCESS!', response.status, response.text);
            }, function (error) {
                setShowSuccessMsg(true);
                setDispMsg(error)
                setShowErrorMsg(true);

                console.log('FAILED...', error);
            });

    }

    const style = {
        background: "white",
        height: "550px",
        // width:"1450px",
        marginLeft: "40px",
        marginRight: "40px",
        padding: "30px",
        borderRadius: "15px"
    }

    const passStyle = {
        color: "red"
    }
    function setToken(val) {

    }
    function accVerify() {

    }
    const initialValues = {
        email: "",
    }
    const Formik = useFormik({
        initialValues: initialValues,
        validationSchema: fschema,
        onSubmit: (values, action) => {
            console.log(values);
            try {
                var emailurl = values.email;
                fetch(`https://localhost:7214/api/User/forgot-password?email=${emailurl}`, {
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
                        if (res.status === 200) {
                            //                 setDispMsg("An email has been sent to you, Check your email for changing password!")
                            //   setShowSuccessMsg(true);
                            //   setTimeout(myFuncCall, 6000);
                            return res.text()
                            // window.location = '/l'
                        }
                        return res.text()

                    })
                    .then((data) => {
                        console.log(data);
                        if (!data.startsWith("Emai")) {
                            templateParams.message = data;
                            sendEmail();
                        }
                        else {
                            setShowSuccessMsg(true);
                            setDispMsg(data)
                            setShowErrorMsg(true);
                        }
                        setTimeout(myFuncCall, 6000);
                        // alert(data)

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

                <form onSubmit={Formik.handleSubmit}> <h2>Enter an email to reset your password.</h2>
                    <div className='form-row'>
                        {showSuccessMsg && <div className='p-4 tex-center' style={{marginLeft:"-22.5px"}} >
                            <div className={(showErrorsMsg ? warningBg : successBg)} style={{ width: "auto" }} role="alert">
                                {showErrorsMsg ? <i class="bi bi-exclamation-circle"></i> : <i className="bi bi-check-circle mt-1"></i>} &nbsp;
                                <strong></strong> {dispMsg}
                                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={(e) => { setShowSuccessMsg(false); }}></button>
                            </div>
                        </div>
                        }
                        <div className='col-lg-10'>
                            <input type="email" name="email" placeholder='Enter your registered email' value={Formik.values.email} onChange={Formik.handleChange} onBlur={Formik.handleBlur} className='form-control shadow-none my-3' />
                            {Formik.errors.email && Formik.touched.email ? (<p className='Form-error'> {Formik.errors.email}</p>) : null}

                        </div>
                    </div>

                    <div className='form-row'>
                        <div className='col-lg-3'>
                            <button type="submit" onClick={accVerify} className="btn btn-dark mt-3 mb-4">Submit</button>
                        </div>
                    </div>


                </form>
            </div>
        </>
    )
}
