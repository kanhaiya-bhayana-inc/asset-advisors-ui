import React, {useState} from 'react'
import { useFormik } from 'formik';
// import { useFormik } from 'formik';
import { signUpSchema } from './Helper';
import { useNavigate } from 'react-router-dom';
import './AddClients.css'


export default function AddClients() {
  const [isLoading, setIsLoading] = useState(false);

  const [showSuccessMsg,setShowSuccessMsg] = useState(false);
  const [dispMsg,setDispMsg] = useState("");
  const [showErrorsMsg,setShowErrorMsg] = useState(false);
  const successBg = 'alert alert-success alert-dismissible fade show';
  const warningBg = 'alert alert-warning alert-dismissible fade show';
  let token = localStorage.getItem("tokena");
    let ntoken = "Bearer " + token.replaceAll('"', '');

  const initialValues = {
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    company: "",
    address: "",
    state: "",
    city: "",
    password: "String@1234",
    confirmpassword: "String@1234"
  }
  const navigate = useNavigate();
  function myFuncCall (){
    // window.location = '/advisordash';
    navigate('/advisordash',{replace:true});

  }
  const Formik = useFormik({
    initialValues: initialValues,
    validationSchema: signUpSchema,
    onSubmit: (values, action) => {
      console.log(values);
      try {
        setIsLoading(true);
        console.log("Call maked!");
        fetch('https://advisorrun.azurewebsites.net/add-client', {
          method: 'POST',
          headers: {
            'Content-type': 'application/json',
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "POST, GET, OPTIONS, DELETE",
            "Authorization": ntoken,
            "Access-Control-Max-Age": 86400
          },
          body: JSON.stringify(values)

        })
          .then(res => {
            res.json()
            if (res.status === 200){
              // alert("Client created successfully.")
              setDispMsg("Client created successfully.")
              setShowSuccessMsg(true);
              setTimeout(myFuncCall, 2000);
              // window.location = '/advisordash';
            }
            else{
              // alert("Something went wrong, or this client is already registered by other user, try again.")
              setDispMsg("Something went wrong, or this client is already registered by other user, try again.");
              setIsLoading(false);
              setShowErrorMsg(true);
              setShowSuccessMsg(true);
              
            }
          })
          .then((data) =>{
            // setIsLoading(false);
            console.log(data);
            // alert(data);
            // window.location ='/login'
          })
          .catch((error) => {
            setIsLoading(false);
            console.log("Error occurred:", error);

            if (error == "TypeError: Load failed" || error == "TypeError: Failed to fetch") {
              setShowErrorMsg(true);
              setShowSuccessMsg(true);
              setDispMsg("Server is Facing some issue. Please check Again Later!");
            }
            // Handle the error here
          });
      } catch (error) {

        console.log("Error b->", error);
      }
      action.resetForm();
    }
  })
  return (
    <>
      {/* <MySide/> */}
      <div style={{marginRight:"20px"}}>
        <form onSubmit={Formik.handleSubmit}>
        <div className='row p-2'>
        {showSuccessMsg && <div className='p-4'>
            <div className={(showErrorsMsg ? warningBg : successBg)} style={{width:"auto"}} role="alert">
            {showErrorsMsg ? <i class="bi bi-exclamation-circle"></i> : <i className="bi bi-check-circle mt-1"></i>} &nbsp;
              {dispMsg}
              <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={(e)=> {setShowSuccessMsg(false);setShowErrorMsg(false);}}></button>
            </div>
          </div> 
           }
          <h4 className='text-center p-3'>Add a new client</h4>
          {/* </div> */}
          {/* <div className='row'> */}
          <div className='col-4'>
            <input type="name" name="firstName" placeholder='First Name' className='form-control shadow-none my-3' value={Formik.values.firstName} onChange={Formik.handleChange} onBlur={Formik.handleBlur}></input>
            {Formik.errors.firstName && Formik.touched.firstName ? (<p className='Form-error'> {Formik.errors.firstName}</p>) : null}
          </div>
          <div className='col-4'>
            <input type="name" name="lastName" placeholder='Last Name' className='form-control shadow-none my-3' value={Formik.values.lastName} onChange={Formik.handleChange} onBlur={Formik.handleBlur}></input>
            {Formik.errors.lastName && Formik.touched.lastName ? (<p className='Form-error'> {Formik.errors.lastName}</p>) : null}

          </div>
          <div className='col-4'>
            <input type="text" name="phone" placeholder='Phone No' className='form-control shadow-none my-3' value={Formik.values.phone} onChange={Formik.handleChange} onBlur={Formik.handleBlur}></input>
            {Formik.errors.phone && Formik.touched.phone ? (<p className='Form-error'> {Formik.errors.phone}</p>) : null}
          </div>
          <div className='col-4'>
            <input type="email" name="email" placeholder='Email' className='form-control shadow-none my-3' value={Formik.values.email} onChange={Formik.handleChange} onBlur={Formik.handleBlur}></input>
            {Formik.errors.email && Formik.touched.email ? (<p className='Form-error'> {Formik.errors.email}</p>) : null}
          </div>
          <div className='col-4'>
            <input type="name" name="company" placeholder='Company' className='form-control shadow-none my-3' value={Formik.values.company} onChange={Formik.handleChange} onBlur={Formik.handleBlur}></input>
            {Formik.errors.company && Formik.touched.company ? (<p className='Form-error'> {Formik.errors.company}</p>) : null}
          </div>
          <div className='col-4'>
            <input type="name" name="address" placeholder='Address' className='form-control shadow-none my-3' value={Formik.values.address} onChange={Formik.handleChange} onBlur={Formik.handleBlur}></input>
            {Formik.errors.address && Formik.touched.address ? (<p className='Form-error'> {Formik.errors.address}</p>) : null}
          </div>
          <div className='col-4'>
            <input type="name" name="state" placeholder='State' className='form-control shadow-none my-3' value={Formik.values.state} onChange={Formik.handleChange} onBlur={Formik.handleBlur}></input>
            {Formik.errors.state && Formik.touched.state ? (<p className='Form-error'> {Formik.errors.state}</p>) : null}
          </div>
          <div className='col-4'>
            <input type="name" name="city" placeholder='City' className='form-control shadow-none my-3' value={Formik.values.city} onChange={Formik.handleChange} onBlur={Formik.handleBlur}></input>
            {Formik.errors.city && Formik.touched.city ? (<p className='Form-error'> {Formik.errors.city}</p>) : null}
          </div>
          <div className='col-4'>
            {/* <input type="password" name="password" placeholder='Password' className='form-control shadow-none my-3' value={Formik.values.password} onChange={Formik.handleChange} onBlur={Formik.handleBlur}></input>
            {Formik.errors.password && Formik.touched.password ? (<p className='Form-error'> {Formik.errors.password}</p>) : null} */}
          </div>
          <div className='col-4'>
            {/* <input type="password" name="confirmpassword" placeholder='Confirm password' className='form-control shadow-none my-3' value={Formik.values.confirmpassword} onChange={Formik.handleChange} onBlur={Formik.handleBlur}></input>
            {Formik.errors.confirmpassword && Formik.touched.confirmpassword ? (<p className='Form-error'> {Formik.errors.confirmpassword}</p>) : null} */}
          </div>
          <div className='col-2 text-center' style={{marginLeft:"100px"}}>
            <button type="submit" className={`btn btn-primary mt-3 mb-3 glow-on-hover ${
                        isLoading ? "loading" : ""
                      }`}>{isLoading ? "Adding..." : "Add"}</button>
           
          </div>


        </div>
          </form>

      </div>
    </>
  )
}
