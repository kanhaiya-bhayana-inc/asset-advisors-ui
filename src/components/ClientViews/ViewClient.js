import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { AiOutlineEdit } from "react-icons/ai";
import { AiOutlineDelete } from "react-icons/ai";
import { AiOutlineEye } from "react-icons/ai";
import { CSVLink } from 'react-csv';

import swal from 'sweetalert';


export default function ViewClient() {
  const colName =[
    // { label:"CLient-ID", key:"clientID" },
    { label:"Client-ID", key:"totalAmount" },
    { label:"Client Name", key:"clientName" },
    { label:"Email", key:"email" },
    { label:"Phone", key:"phone" },
    { label:"Info-ID", key:"inofID" },
    { label:"Account-ID", key:"accountID" },
    { label:"Investment-Name", key:"investmentName" },
    { label:"Investment-Type-Name", key:"investmentTypeName" },
    { label:"Amount", key:"investmentAmount" },
  ]

  const ClientDetailscolName =[
    // { label:"CLient-ID", key:"clientID" },
    { label:"Client-ID", key:"clientID" },
    { label:"Client Name", key:"sortName" },
    { label:"Email", key:"email" },
    { label:"Phone", key:"phone" }
  ];
  var testArray =[];
  // console.log("array is ",testArray);
  let { vcliID } = useParams();
  const [flag, setFlag] = useState("false");
  let count = 1;
  const [showSuccessMsg,setShowSuccessMsg] = useState(false);
  const [dispMsg,setDispMsg] = useState("");
  const [showErrorsMsg,setShowErrorMsg] = useState(false);
  const successBg = 'alert alert-success alert-dismissible fade show';
  const warningBg = 'alert alert-warning alert-dismissible fade show';
  const st = {
    backgroundColor: "#536dfe",
    color: "white",
  }
  const [det, setDet] = useState({});
  const [InvestmentDet, setInvestmentDet] = useState([]);
  const [amount, setAmount] = useState("0");
  const [dataLength,setDataLength] = useState(0);

  const navigate = useNavigate();
  function myFuncCall (){
    // let url = `/viewclient/${vcliID}`;
    console.log("reached T-1");
    navigate('.',{replace:true});

  }
  const callTotalAmount = async () =>{
    let token = localStorage.getItem("tokena");
    let ntoken = "Bearer " + token.replaceAll('"', '');
    // const [advEdit, setAdvEdit] = useState("false");



    await fetch(`https://advisorrun.azurewebsites.net/api/Investment/GetTotalAmount/${vcliID}`, {
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
        if(data.result !== isNaN){
          setAmount(data.result);
        }
        // console.log("fdksjldk",data.result);

      })
  }

  const clientProfileData = async () => {
    let token = localStorage.getItem("tokena");
    let ntoken = "Bearer " + token.replaceAll('"', '');
    // const [advEdit, setAdvEdit] = useState("false");



    await fetch(`https://advisorrun.azurewebsites.net/Get-Client-by/${vcliID}`, {
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
        setFlag("true");
        // console.log("data->" + data);
        // setInitialValues(data);
        // Formik.values(data);

        // console.log("Mydata->", det);
        // console.log("Mydata2->", initialValues);
        // setFlag("true");
        // console.log(flag);
      })
      .catch((error) => {
            
        console.log("Error occurred:", error);

        if (error == "TypeError: Load failed" || error == "TypeError: Failed to fetch") {
          setShowErrorMsg(true);
          setShowSuccessMsg(true);
          setDispMsg("Server is Facing some issue. Please check Again Later!");
        }
        // setIsLoading(false);
        // Handle the error here
      });
  }

  const investmentData = async () => {

    let token = localStorage.getItem("tokena");
    let ntoken = "Bearer " + token.replaceAll('"', '');
    await fetch(`https://advisorrun.azurewebsites.net/api/Investment/GetUserInvestments/${vcliID}`, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, GET, OPTIONS, DELETE",
        "Authorization": ntoken,
        "Access-Control-Max-Age": 86400
      }
    })
      .then(async res =>  await res.json())
      .then((data) => {
      
        // var v = JSON.parse(data.result);
        
          setInvestmentDet(data.result);
          console.log("V is ",data.result );
          if (data.result != null){

            console.log(Object.keys(data.result).length);
            setDataLength(Object.keys(data.result).length);
          }

      })
  }

  useEffect(() => {
    if (flag !== "true") { clientProfileData(); }
    callTotalAmount();
    investmentData();
  }, [flag])


  const delInvestment = (iID,sID) =>{
    let token = localStorage.getItem("tokena");
    let ntoken = "Bearer " + token.replaceAll('"', '');
    // console.log("my id si ",delCID);
    try {
      console.log("Call maked!");
      fetch(`https://advisorrun.azurewebsites.net/api/Investment/advisorDeleteinvestment/${iID}/${sID}`, {
        method: 'DELETE',
        headers: {
          'Content-type': 'application/json',
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "POST, GET, OPTIONS, DELETE, PUT",
          "Authorization": ntoken,
          "Access-Control-Max-Age": 86400
        },
        // body: JSON.stringify(values)

      })
        .then(res => {
          // res.json()
          if (res.status === 200){
            // alert("Investment deleted successfully.")
            // setDispMsg("Investment deleted successfully!")
              // setShowSuccessMsg(true);
              // setTimeout(myFuncCall, 2000);
              swal("Investment deleted successfully!", {
                icon: "success",
              }).then(()=>{
                investmentData();
                callTotalAmount();
                myFuncCall();
              });
            // window.location = `/viewclient/${vcliID}`;
            // navigate('/advisordash')
          }
          else{
            // alert("Something went wrong, try again.")
            setDispMsg("Something went wrong, try again!")
              setShowSuccessMsg(true);
              setShowErrorMsg(true);
              setTimeout(myFuncCall, 1000);
          }
        })
        .then((data) =>{
          console.log(data);
          console.log("yoo",InvestmentDet);
          // if (InvestmentDet.length ==1){
          //   setInvestmentDet("");
          // }
          // investmentData();
          // alert(data);
          // window.location ='/login'
        })
        .catch((error) => {
            
          console.log("Error occurred:", error);

          if (error == "TypeError: Load failed" || error == "TypeError: Failed to fetch") {
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

  function showDelDi(iid,sid){
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to see that investment again!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        // delClient(did)
        delInvestment(iid,sid);
        // myFuncCall();
      }
    });
  }
  return (
    <>
      <div className='row' style={{marginRight:"10px"}}>
        {/* <div className="shadow-lg p-3 mb-5 bg-body-tertiary rounded">Larger shadow</div> */}
        <h3 className='text-center mt-2'>Personal Details</h3>
        <p className='font-weight-bold'>ClientID: {det.clientID}</p>
        <hr />
        <div className='col-4 mt-2'><label>SortName: &nbsp;{det.sortName} </label></div>
        <div className='col-4'><label>Email: &nbsp;{det.email} </label></div>
        <div className='col-4'><label>Phone: &nbsp;{det.phone} </label></div>
        <div className='col-4 mt-2'><label>Address: &nbsp;{det.address} </label></div>
        <div className='col-4'><label>State: &nbsp;{det.state} </label></div>
        <div className='col-4'><label>City: &nbsp;{det.city} </label></div>
        <div className='col-4 mt-2'><label>Company: &nbsp;{det.company} </label></div>
        <div className='p-2 mt-2'>
          <hr />
        </div>
        <div className='col-4'>
          <Link to={`/addinvestment/${vcliID}`} className="nav_link text-center" style={{ width: "180px", border: "1px solid black", marginLeft: "20px" }}>
            Add Investments
          </Link>
        </div>
        <div className='col-4'>
          <h3 className='text-center p-4' style={{ marginTop: "-20px" }}>Investment Details</h3>
        </div>

       {dataLength != 0 ? <div className="nav_link text-center col-3 mt-1" style={{ width: "250px", border: "1px solid black", marginLeft: "120px" }}>
          Total Investments: ${amount && amount.slice(0,-3)}
        </div> :""}
        {showSuccessMsg && <div className='p-4 tex-center'>
            <div className={(showErrorsMsg ? warningBg : successBg)} style={{width:"auto"}} role="alert">
            {showErrorsMsg ? <i class="bi bi-exclamation-circle"></i> : <i className="bi bi-check-circle mt-1"></i>} &nbsp;
              <strong></strong> {dispMsg}
              <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={(e)=> {setShowSuccessMsg(false);}}></button>
            </div>
          </div> 
           }
            {dataLength != 0 ?
           (
            <>
            {/* {InvestmentDet.splice(0,0,ClientDetailscolName)} */}
            
            {/* var narray = JSON.parse(JSON.stringify(InvestmentDet));
            
            testArray.push(`{"Client-ID"-det.clientID}`)
            {console.log(testArray)} */}
            {/* {InvestmentDet.push("clientID":det.clientID)} */}
            {InvestmentDet.map((e,i)=>{
              e.totalAmount = det.clientID;
              e.clientName = det.sortName;
              e.email = det.email;
              e.phone = det.phone;
            })}

              <CSVLink data={InvestmentDet} headers={colName} filename={`${det.sortName}.csv`} style={{marginLeft:"20px"}} className='p-2' ><i class="bi bi-cloud-download" style={{height:"20px",padding:"5px"}}></i>CSV</CSVLink>
              <br></br>
            </>
          ):""}
        <table className="table table-hover">
          <thead >
            <tr style={st}>
              <th scope="col" style={{ color: "white" }}>#</th>
              <th scope="col" style={{ color: "white" }}>Info-Id</th>
              <th scope="col" style={{ color: "white" }}>Inv-Name</th>
              <th scope="col" style={{ color: "white" }}>Inv-Type</th>
              <th scope="col" style={{ color: "white" }}>Status-Active</th>
              <th scope="col" style={{ color: "white" }}>Amount($)</th>
              <th scope="col" style={{ color: "white" }}></th>
              <th scope="col" style={{ color: "white" }}></th>
              <th scope="col" style={{ color: "white" }}></th>

            </tr>
          </thead>
          <tbody>
            {InvestmentDet ? InvestmentDet.map((e, ind) => {
              return (
                <>
                  <tr key={ind}>
                    <th scope="row">{count++}</th>
                    <td>{e.inofID}</td>
                    <td><Link style={{textDecoration:"none"}} to={`/editinvestment/${e.inofID}/${e.strategyID}/${vcliID}`} >{e.investmentName}</Link></td>
                    <td>{e.investmentTypeName}</td>
                    <td>{e.active}</td>
                    <td>{e.investmentAmount}</td>
                    <td><Link to={`/editinvestment/${e.inofID}/${e.strategyID}/${vcliID}`}><AiOutlineEdit size={20} onClick={((e) => console.log("Jai ho"))}  /></Link></td> 
                    <td><Link to={`/editinvestment/${e.inofID}/${e.strategyID}/${vcliID}`} ><AiOutlineEye size={20} onClick={((e) => console.log("Jai ho"))} /></Link></td>
                    <td><AiOutlineDelete size={20} onClick={(ev)=>showDelDi(e.inofID,e.strategyID)} style={{cursor: "pointer"}} /></td>
                  </tr>
                </>
              );
            }) : 
           ""}
           {/* {  InvestmentDet} */}

          </tbody>
        </table>
            {dataLength == 0 ? <div className='p-4 tex-center'>
            <div className="alert alert-warning alert-dismissible fade show" style={{width:"auto"}} role="alert">
              
              We couldn't found any investments for this client.
              <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
          </div> 
           :""}
          
           </div>
            
      
    </>
  )
}
