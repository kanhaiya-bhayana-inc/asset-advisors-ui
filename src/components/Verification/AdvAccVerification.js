import React, { useState } from 'react'
import { json } from 'react-router-dom';

export default function AdvAccVerification() {

    const [token, setToken] = useState("");
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
  
    const passStyle ={
      color :"red"
    }

    const accVerify = (e) => {
      e.preventDefault();

        console.log(token)
        try {
            fetch(`https://localhost:7214/api/User/verify-user-account?token=${token}`, {
              method: 'POST',
              headers: {
                'Content-type': 'application/json',
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "POST, GET, OPTIONS, DELETE",
                "Access-Control-Max-Age": 86400
              },
              body: "hello"
      
            })
            .then((res) => {
              if (res.status === 200){
                  // alert("success")
                  setDispMsg("Account verified successfully!")
              setShowSuccessMsg(true);
              setTimeout(myFuncCall, 3000);
                // window.location = '/login';

                return res.text()
              }
              else if (res.status === 400){
                setDispMsg("Token field is required!")
              setShowSuccessMsg(true);
              setShowErrorMsg(true);
                // alert("Token field is required")
                return res.text()
              }
              else{
                  // alert("unknown reach")
                return res.text()
              }
              
                        
            })
            .then((data) =>{
          //     if (data.startsWith("ey"))
          //     console.log(data);
          //   else{
            // if (data.status === 400){
            //   alert("Token field is required")
            // }
            // console.log(data);
            // alert(data);
             
    
          //   }
    
            })
             
          } catch (error) {
            console.log("Error b->", error);
          }
    }
    return (
        <div className='d-flex justify-content-center' style={style}>
          {showSuccessMsg && <div className='p-4 tex-center'>
            <div className={(showErrorsMsg ? warningBg : successBg)} style={{width:"auto"}} role="alert">
            {showErrorsMsg ? <i class="bi bi-exclamation-circle"></i> : <i className="bi bi-check-circle mt-1"></i>} &nbsp;
              <strong>Hello user!</strong> {dispMsg}
              <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={(e)=> {setShowSuccessMsg(false);}}></button>
            </div>
          </div> 
           }
            <form>
                <h2>Enter You Verification token</h2>
                <div className='form-row'>
                    <div className='col-lg-10'>
                        <input type="password" required name="token" placeholder='******' onChange={(e) => setToken(e.target.value)} value={token} className='form-control shadow-none my-3' />

                    </div>
                </div>
                <div className='form-row'>
                    <div className='col-lg-4'>
                        <button type="submit" onClick={accVerify} className="btn btn-dark mt-3 mb-4">Verify</button>


                    </div>
                </div>

            </form>
        </div>
    )
}
