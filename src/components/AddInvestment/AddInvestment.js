import React, {useState} from 'react'
import { signUpSchema } from './Vald';
import { useFormik } from 'formik';
import { useNavigate, useParams } from 'react-router-dom';
import '../AddInvestment/addinvestment.css';

export default function AddInvestment() {
  const [isLoading, setIsLoading] = useState(false);

  let token = localStorage.getItem("tokena");
    let ntoken = "Bearer " + token.replaceAll('"', '');

  let { aicliID } = useParams();
  const [showSuccessMsg,setShowSuccessMsg] = useState(false);
  const [dispMsg,setDispMsg] = useState("");
  const [showErrorsMsg,setShowErrorMsg] = useState(false);
  const successBg = 'alert alert-success alert-dismissible fade show';
  const warningBg = 'alert alert-warning alert-dismissible fade show';

  const initialValues = {
    investmentName:"",
    investmentTypeName:"",
    strategyName:"",
    investmentAmount:"",
    accountID:"",
    active:""
  };
  const navigate = useNavigate();
  function myFuncCall (){
    let url = `/viewclient/${aicliID}`;
    navigate(url,{replace:true});
  }
  const Formik = useFormik({
    initialValues: initialValues,
    validationSchema: signUpSchema,
    onSubmit: (values, action) => {
      console.log(values);
      try {
        setIsLoading(true);
        console.log("Call maked!");
        fetch(`https://advisorrun.azurewebsites.net/api/Investment/advisor-add-investments/${aicliID}`, {
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
            // res.json()
            if (res.status === 200){
              // alert("Investment created successfully.")
              setDispMsg("Investment created successfully.")
              setShowSuccessMsg(true);
              setTimeout(myFuncCall, 3000);
              action.resetForm();
            }
            else{
              // alert("Something went wrong, try again.")
              setDispMsg("Something went wrong, try again.");
              setShowErrorMsg(true);
              setShowSuccessMsg(true);
              setIsLoading(false)
            }
          })
          .then((data) =>{
            console.log(data);
            // alert(data);
            // window.location ='/login'
          })
          .catch((error) => {
            setIsLoading(false);
            
            console.log("Error occurred:", error);

            if (error == "TypeError: Load failed") {
              setShowErrorMsg(true);
              setShowSuccessMsg(true);
              setDispMsg("Server is Facing some issue. Please check Again Later!");
            }
            // setIsLoading(false);
            // Handle the error here
          });
      } catch (error) {
        console.log("Error b->", error);
      }
    }
  });

  return (
      <form onSubmit={Formik.handleSubmit}>
    <div className='row'>
    {showSuccessMsg && <div className='p-4 tex-center'>
            <div className={(showErrorsMsg ? warningBg : successBg)} style={{width:"auto"}} role="alert">
            {showErrorsMsg ? <i class="bi bi-exclamation-circle"></i> : <i className="bi bi-check-circle mt-1"></i>} &nbsp;
               {dispMsg}
              <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={(e)=> {setShowSuccessMsg(false);setShowErrorMsg(false);}}></button>
            </div>
          </div> 
           }

      <h3 className='text-center p-4'>Add Investment</h3>

      <div className='col-4'>
        <lable style={{marginLeft: "10px"}}>Investment Name</lable>
        <input type="text" name="investmentName" placeholder='Investment name' value={Formik.values.investmentName} onChange={Formik.handleChange} className='form-control shadow-none my-3' />
        {Formik.errors.investmentName && Formik.touched.investmentName ? (<p className='Form-error'> {Formik.errors.investmentName}</p>) : null}
      </div>
      
      <div className='col-4 addbtn'>
        <div className="dropdown p-4" style={{ width: "auto" }}>
          <select className="form-select" name='investmentTypeName' value={Formik.values.investmentTypeName} onChange={Formik.handleChange} aria-label="Default select example">
            <option value="selected">Investment Type</option>
            <option value="Unknown">Unknown</option>
            <option value="Retirement">Retirement</option>
            <option value="GeneralSavings">GeneralSavings</option>
            <option value="Income">Income</option>
          </select>
          {Formik.errors.investmentTypeName && Formik.touched.investmentTypeName ? (<p className='Form-error drp'> {Formik.errors.investmentTypeName}</p>) : null}
        </div>
      </div>

      <div className='col-4 mt-3'>
      <div className="dropdown p-4 " style={{ width: "auto" }}>
          <select className="form-select" name='active' value={Formik.values.active} onChange={Formik.handleChange}  aria-label="Default select example">
            <option value="selected">Active Status</option>
            <option value="1">True</option>
            <option value="0">False</option>
          </select>
          {Formik.errors.active && Formik.touched.active ? (<p className='Form-error drp'> {Formik.errors.active}</p>) : null}
        </div>
      </div>
      <hr />
      <div className='col-4'>
        <lable style={{marginLeft: "10px"}}>AccountID</lable>
        <input type="text" name="accountID" value={Formik.values.accountID} onChange={Formik.handleChange}  placeholder='Enter acoountID' className='form-control shadow-none my-3' />
        {Formik.errors.accountID && Formik.touched.accountID ? (<p className='Form-error'> {Formik.errors.accountID}</p>) : null}
      </div>
      <div className='col-4' style={{marginLeft: "20px",width:"400px"}}>
      <lable style={{marginLeft: "13px"}}>Strategy Name</lable>
        <input type="text" name="strategyName" value={Formik.values.strategyName} onChange={Formik.handleChange} placeholder='Enter strategy name' className='form-control shadow-none my-3' />
        {Formik.errors.strategyName && Formik.touched.strategyName ? (<p className='Form-error'> {Formik.errors.strategyName}</p>) : null}
      </div>

      <div className='col-4' style={{marginLeft: "20px",width:"380px"}}>
      <lable style={{marginLeft: "15px"}}>Investment Amount</lable>
        <input type="number" name="investmentAmount" value={Formik.values.investmentAmount} onChange={Formik.handleChange} placeholder='Enter investment amount' className='form-control shadow-none my-3' />
        {Formik.errors.investmentAmount && Formik.touched.investmentAmount ? (<p className='Form-error'> {Formik.errors.investmentAmount}</p>) : null}
      </div>
      <div className='col-4'>
      </div>
      <div className='col-4 mb-3 mt-3 text-center'>
        <button className={`btn btn-primary ${
                        isLoading ? "loading" : ""
                      }`} type='submit' style={{width:"190px"}}> {isLoading ? "Adding...": "Add"}</button>
       
      </div>
      <div className='col-4'>
      </div>
    </div>
      </form>
  )
}
