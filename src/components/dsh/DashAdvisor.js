import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { MdPersonAddAlt1 } from 'react-icons/md';
// import { BiChevronRight } from "react-icons/bi";
import { AiOutlineEdit } from "react-icons/ai";
import { AiOutlineDelete } from "react-icons/ai";
import { AiOutlineEye } from "react-icons/ai";
import './ds.css';
import swal from 'sweetalert';
import { CSVLink } from 'react-csv';
import { routes } from '../Utils/Globals'

export default function DashboardAdv() {

  const [showSuccessMsg,setShowSuccessMsg] = useState(false);
  const [isLoading,setIsLoading] = useState(true);
  const [dispMsg,setDispMsg] = useState("");
  const [showErrorsMsg,setShowErrorMsg] = useState(false);
  const successBg = 'alert alert-success alert-dismissible fade show';
  const warningBg = 'alert alert-warning alert-dismissible fade show';
  const navigate = useNavigate();


  // const [editShow,setEditShow] = useState(false);
  var fname ="ClientsData"
const colName =[
    { label:"CLient-ID", key:"clientID" },
    { label:"Client Name", key:"sortName" },
    { label:"Email", key:"email" },
    { label:"Phone", key:"phone" },
    { label:"Address", key:"address" }
  ]


  function myFuncCall (){
    // window.location = '/advisordash';
    myFunc();
    navigate('.',{replace: true});
  }
  // const navigate = useNavigate();
  const style = {
    background: "white",
    borderRadius: "15px",
    marginRight:"10px"
  }
  // const addClientBtn = {
  //   width:"200px",
  //   backgroundColor:"##0000ff"
    
  // }
  const st = {
    backgroundColor:"#536dfe",
    color:"white",
  }

  const [flag, setFlag] = useState(false);
  const [clientsList, setClientsList] = useState([]);
  const [dataLength,setDataLength] = useState(0);
  let count = 1;

  const myFunc = async () => {
    let token = localStorage.getItem("tokena");
    let ntoken = "Bearer " + token.replaceAll('"', '');
    let id = localStorage.getItem("id");
    console.log(id);
    await fetch(`${routes.getAllClients}/${id}`, {
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
        setClientsList(data);
        setDataLength(Object.keys(data).length);
        console.log("called");
        console.log(data);
        setIsLoading(false)
      })
      
  }
  
  const DataCall = async () => {
    let token = localStorage.getItem("tokena");
    let ntoken = "Bearer " + token.replaceAll('"', '');
    


    await fetch(`${routes.getUserAuth}`, {
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
        localStorage.setItem("id", data.userID);
        localStorage.setItem("advName", data.sortName);
        fname = data.sortName;
        // setDet(data);
        myFunc();
        // setFlag("true");
        
      })
      .catch((error) => {
        // setIsLoading(false);
        console.log("Error occurred:kjfldsjfl", error);

        if (error == "TypeError: Load failed" || error == "TypeError: Failed to fetch") {
          setShowErrorMsg(true);
          setShowSuccessMsg(true);
          setDispMsg("Server is Facing some issue. Please check Again Later!");
          console.log(dispMsg);
          setFlag(true);
          setDataLength(0)
        }
        // Handle the error here
      });
  };

 
let noch = "nochange";
let ii = 1;
  useEffect(() => {
    console.log("coco", ii++);
    DataCall(); 
    console.log(noch);
    // myFunc();
  }, [noch])

  const delClient = (delCID) =>{
    let token = localStorage.getItem("tokena");
    let ntoken = "Bearer " + token.replaceAll('"', '');
    console.log("my id si ",delCID);
    try {
      console.log("Call maked!");
      fetch(`${routes.deleteClient}/${delCID}`, {
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
          res.json()
          if (res.status === 200){
            // alert("Client deleted successfully.")
            // swal("Good job!", "Client deleted successfully!", "success").then(()=>{
            //   myFuncCall();
            // })
            swal("Client has been deleted!", {
              icon: "success",
            }).then(()=>{
              myFuncCall();
            });

            
            // setDispMsg("Client deleted successfully!")
              // setShowSuccessMsg(true);
              // setTimeout(myFuncCall, 3000);
            // window.location = '/advisordash';
            // navigate('/advisordash')
          }
          else{
            // alert("Something went wrong, try again.")
            // setDispMsg("Something went wrong, try again!")
            //   setShowSuccessMsg(true);
            //   setShowErrorMsg(true);
            swal("Something went wrong, try again!", {
              icon: "error",
            });
            
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
  }


  const cli = clientsList?.map((e, ind) => {
    return (  
     <>
        {/* <div key={ind} className='form-row text-center'>
          {e.userID}
          {e.sortName}
          {e.clientID}
          {e.email}
          {e.phone}
          {e.address}
        </div> */}
        <tr key={ind}>
        <th scope="row">{count++}</th>
        <td>{e.clientID}</td>
        <td><Link style={{textDecoration:"none"}} to={`/viewclient/${e.userID}`} >{e.sortName}</Link></td>
        <td>{e.email}</td>
        <td>{e.phone}</td>
        {/* <td><BiChevronRight size={30} onClick={((e) => console.log("Jai ho"))} /></td> */}
        
        <td><Link to={`/editclient/${e.userID}`}><AiOutlineEdit size={20} onClick={((e) => console.log("Jai ho"))} /></Link></td>
        <td><Link to={`/viewclient/${e.userID}`} ><AiOutlineEye size={20} onClick={((e) => console.log("Jai ho"))} /></Link></td>
            <td><AiOutlineDelete size={20} onClick={(ev)=>{showDelDi(e.userID)}} style={{cursor: "pointer"}} /></td>
            {/* <td><AiOutlineEye size={20} onClick={((e) => console.log("Jai ho"))} /></td> */}
      </tr>
     </>
        );
  })

  function showDelDi(did){
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to see the client information!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        delClient(did)
        // myFuncCall();
      } else {
        swal("Your client is not deleted!");
      }
    });
  }
  return (
    <>
    {isLoading && <div class="loader">
    <h1></h1>
      <h2>Loading...</h2>
    </div>}
    {/* <div className='row p-2' style={{backgroundColor:"#dbe2e2", border:"none"}}> */}
      {/* <div className='col'> */}
      {/* <div style={addClientBtn} className='d-flex flex-row-reverse'><b>&nbsp;Add Clients</b> */}
      {!isLoading &&<Link to="/addClient" className="nav_link btndsh mt-3 mb-3" style={{width:"185px",border:"1px solid black"}}>
              
      {/* <button  className='btn mb-2 btn-lg' style={addClientBtn}> */}
        <MdPersonAddAlt1  size={20}  className='adclient' /> Add Clients
      {/* </button> */}
            </Link>}


            {!isLoading &&dataLength != 0 ? 
           (
            <>
            
            <CSVLink data={clientsList} headers={colName} filename={`Client's data.csv`} style={{float:"right",marginTop:"-45px",marginRight:"10px"}} className='p-2'><i class="bi bi-cloud-download" style={{height:"20px",padding:"5px"}}></i>CSV</CSVLink>
            </>
           ) :""}
           
      {/* </div> */}
    {/* </div> */}

    {showSuccessMsg && <div className='p-4'>
            <div className={(showErrorsMsg ? warningBg : successBg)} style={{width:"auto"}} role="alert">
            {showErrorsMsg ? <i class="bi bi-exclamation-circle"></i> : <i className="bi bi-check-circle mt-1"></i>} &nbsp;
              {dispMsg}
              <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={(e)=> {setShowSuccessMsg(false);}}></button>
            </div>
          </div> 
           }
    {!isLoading && !flag && <div style={style} className='row mt-2'>
      {/* </div> */}
      
      <table  className="table table-hover">
        
        <thead>
          <tr style={st}>
            <th scope="col" style={{color:"white"}}>#</th>
            <th scope="col" style={{color:"white"}}>ClientID</th>
            <th scope="col" style={{color:"white"}}>Name</th>
            <th scope="col" style={{color:"white"}}>Email</th>
            <th scope="col" style={{color:"white"}}>Phone</th>
            <th scope="col" style={{color:"white"}}></th>
            <th scope="col" style={{color:"white"}}></th>
            <th scope="col" style={{color:"white"}}></th>
          </tr>
        </thead>
        <tbody>
          {/* <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td><AiOutlineEdit size={20} onClick={((e) => console.log("Jai ho"))} /></td>
            <td><AiOutlineDelete size={20} onClick={((e) => console.log("Jai ho"))} /></td>
            <td><AiOutlineEye size={20} onClick={((e) => console.log("Jai ho"))} /></td>
          </tr>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td><AiOutlineEdit size={20} onClick={((e) => console.log("Jai ho"))} /></td>
            <td><AiOutlineDelete size={20} onClick={((e) => console.log("Jai ho"))} /></td>
            <td><AiOutlineEye size={20} onClick={((e) => console.log("Jai ho"))} /></td>
          </tr>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td><AiOutlineEdit size={20} onClick={((e) => console.log("Jai ho"))} /></td>
            <td><AiOutlineDelete size={20} onClick={((e) => console.log("Jai ho"))} /></td>
            <td><AiOutlineEye size={20} onClick={((e) => console.log("Jai ho"))} /></td>
          </tr> */}
         {cli}
        

        </tbody>
        
      </table>
      {dataLength === 0 && flag == false ? <div className='p-4 tex-center'>
            <div className="alert alert-warning alert-dismissible fade show" style={{width:"auto"}} role="alert">
              
              You have not created any client yet!
              <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
          </div> 
           :""}

           
    </div>}
    </>
  )
}
