import React, { useState, useEffect } from 'react'
import { useFormik } from 'formik';
// import { useFormik } from 'formik';
import { signUpSchema } from '../schemas/Helper';
import { Link } from 'react-router-dom';
import style from '../Sign_up/Form.module.css'
import { MdOutlinePublishedWithChanges } from "react-icons/md";


export default function Profile() {
  let token = localStorage.getItem("tokena");
  let ntoken = "Bearer " + token.replaceAll('"', '');
  let url = 'https://localhost:7214/api/User/Get-Client-by/121313';
  const [flag, setFlag] = useState("false");
  let condit = localStorage.getItem("id")
  const [det, setDet] = useState({});
  const [clientsList, setClientsList] = useState([]);

  const profileData = async () => {
    let token = localStorage.getItem("tokena");
    let advId = localStorage.getItem("id");
    let ntoken = "Bearer " + token.replaceAll('"', '');
    // const [advEdit, setAdvEdit] = useState("false");



    await fetch(`https://localhost:7214/api/User/get-user-auth`, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, GET, OPTIONS, DELETE",
        "Authorization": ntoken,
        "Access-Control-Max-Age": 86400
      }
    })
      .then(async res => await res.json())
      .then((data) => {
        // localStorage.setItem("id", data.userID);
        // localStorage.setItem("advName", data.sortName);
        setDet(data);
        setInitialValues(data);
        // Formik.values(data);
        
        // console.log("Mydata->", det);
        // console.log("Mydata2->", initialValues);
        setFlag("true");
        // console.log(flag);
      })
  }
  const myFunc = async () => {
    setFlag("false");
  }

  useEffect(() => {
    // if (flag != "true") { profileData(); }
    profileData();
    // myFunc();
  },[])
  const [firstName, setFirstName] = useState("");
  const [initialValues,setInitialValues] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    company: "",
    address: "",
    state: "",
    city: "",
  });
  // console.log("datadfsf->",initialValues);
  const Formik = useFormik({
    initialValues: initialValues,
    validationSchema: signUpSchema,
    enableReinitialize:true,
    onSubmit: (values,action) => {
      try {
        console.log("Call maked!");
        fetch(`https://localhost:7214/api/User/update-user-advisor/${det.advisorID}`, {
          method: 'PUT',
          headers: {
            'Content-type': 'application/json',
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "POST, GET, OPTIONS, DELETE, PUT",
            "Authorization": ntoken,
            "Access-Control-Max-Age": 86400
          },
          body: JSON.stringify(values)

        })
          .then(res => {
            res.json()
            if (res.status === 200){
              alert("Profile updated successfully.")
              window.location = '/advisordash';
            }
            else{
              alert("Something went wrong, try again.")
            }
          })
          .then((data) =>{
            console.log(data);
            // alert(data);
            // window.location ='/login'
          })
      } catch (error) {
        console.log("Error b->", error);
      }
      action.resetForm();
    }
  })
  const myHa = () =>{
    console.log("djldsfjsl");
  }
  // console.log("TestCase->",Formik.values);
  return (
    <>
      <div className='mt-4'>

        <div className='container'>
          <form onSubmit={Formik.handleSubmit}>
            <div className='row p-2'>
              <h3 className='text-center'>Advisor Profile</h3>
              <h5>AdvisorID:&nbsp;{det.advisorID}</h5>
              {/* <h6 style={{fontWeight:"300!important"}}>AdvisorID:&nbsp;{det.advisorID}</h6> */}
              <hr />
              {/* </div> */}
              {/* <div className='row'> */}
              <div className='col-4'>
                <p>FirstName</p>
                <input type="text" name="firstName" placeholder='First Name' className='form-control shadow-none my-3' value={Formik.values.firstName} onChange={Formik.handleChange} onBlur={Formik.handleBlur}></input>
                {Formik.errors.firstName && Formik.touched.firstName ? (<p className='Form-error'> {Formik.errors.firstName}</p>) : null}
              </div>
              <div className='col-4'>
                <p>LastName</p>
                <input type="text" name="lastName" placeholder='Last Name' className='form-control shadow-none my-3' value={Formik.values.lastName} onChange={Formik.handleChange} onBlur={Formik.handleBlur}></input>
                {Formik.errors.lastName && Formik.touched.lastName ? (<p className='Form-error'> {Formik.errors.lastName}</p>) : null}

              </div>
              <div className='col-4'>
                <p>Phone</p>
                <input type="text" name="phone" placeholder='Phone No' className='form-control shadow-none my-3' value={Formik.values.phone} onChange={Formik.handleChange} onBlur={Formik.handleBlur}></input>
                {Formik.errors.phone && Formik.touched.phone ? (<p className='Form-error'> {Formik.errors.phone}</p>) : null}
              </div>
              <div className='col-4'>
                <p>Email</p>
                <input type="email" name="email" placeholder='Email' className='form-control shadow-none my-3' value={Formik.values.email} onChange={Formik.handleChange} onBlur={Formik.handleBlur}></input>
                {Formik.errors.email && Formik.touched.email ? (<p className='Form-error'> {Formik.errors.email}</p>) : null}
              </div>
              <div className='col-4'>
                <p>Company</p>
                <input type="name" name="company" placeholder='Company' className='form-control shadow-none my-3' value={Formik.values.company} onChange={Formik.handleChange} onBlur={Formik.handleBlur}></input>
                {Formik.errors.company && Formik.touched.company ? (<p className='Form-error'> {Formik.errors.company}</p>) : null}
              </div>
              <div className='col-4'>
                <p>Address</p>
                <input type="name" name="address" placeholder='Address' className='form-control shadow-none my-3' value={Formik.values.address} onChange={Formik.handleChange} onBlur={Formik.handleBlur}></input>
                {Formik.errors.address && Formik.touched.address ? (<p className='Form-error'> {Formik.errors.address}</p>) : null}
              </div>
              <div className='col-4'>
                <p>State</p>
                <input type="name" name="state" placeholder='State' className='form-control shadow-none my-3' value={Formik.values.state} onChange={Formik.handleChange} onBlur={Formik.handleBlur}></input>
                {Formik.errors.state && Formik.touched.state ? (<p className='Form-error'> {Formik.errors.state}</p>) : null}
              </div>
              <div className='col-4'>
                <p>City</p>
                <input type="name" name="city" placeholder='City' className='form-control shadow-none my-3' value={Formik.values.city} onChange={Formik.handleChange} onBlur={Formik.handleBlur}></input>
                {Formik.errors.city && Formik.touched.city ? (<p className='Form-error'> {Formik.errors.city}</p>) : null}
              </div>

              <div className='col-2 mt-2'>
                {/* <br></br> */}

                <button className='btn ' type='submit' > Update

                  {/* <MdOutlinePublishedWithChanges size={20} /> Update */}
                </button>
              </div>
              <br></br>
              <hr />


            </div>
          </form>

        </div>
      </div>
    </>
  )
}
