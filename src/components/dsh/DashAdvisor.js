import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { MdPersonAddAlt1 } from 'react-icons/md';
// import { BiChevronRight } from "react-icons/bi";
import { AiOutlineEdit } from "react-icons/ai";
import { AiOutlineDelete } from "react-icons/ai";
import { AiOutlineEye } from "react-icons/ai";
import './ds.css';
import swal from 'sweetalert';
import { CSVLink } from 'react-csv';

export default function DashboardAdv() {
  // const [editShow,setEditShow] = useState(false);

const colName =[
    { label:"CLient-ID", key:"clientID" },
    { label:"Client Name", key:"sortName" },
    { label:"Email", key:"email" },
    { label:"Phone", key:"phone" },
    { label:"Address", key:"address" }
  ]


  function myFuncCall (){
    window.location = '/advisordash';
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

  // const [flag, setFlag] = useState("false");
  const [clientsList, setClientsList] = useState([]);
  const [dataLength,setDataLength] = useState(0);
  let count = 1;

  const myFunc = async () => {
    let token = localStorage.getItem("tokena");
    let ntoken = "Bearer " + token.replaceAll('"', '');
    let id = localStorage.getItem("id");
    console.log(id);
    await fetch(`https://localhost:7214/api/User/get-all-clients/${id}`, {
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
      })
  }
  
  const DataCall = async () => {
    let token = localStorage.getItem("tokena");
    let ntoken = "Bearer " + token.replaceAll('"', '');
    


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
        localStorage.setItem("id", data.userID);
        localStorage.setItem("advName", data.sortName);
        // setDet(data);
        myFunc();
        // setFlag("true");
        
      })
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
      fetch(`https://localhost:7214/api/User/Delete-Client/${delCID}`, {
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
            <td><AiOutlineDelete size={20} onClick={(ev)=>{showDelDi(e.userID)}}  /></td>
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
    {/* <div className='row p-2' style={{backgroundColor:"#dbe2e2", border:"none"}}> */}
      {/* <div className='col'> */}
      {/* <div style={addClientBtn} className='d-flex flex-row-reverse'><b>&nbsp;Add Clients</b> */}
      <Link to="/addClient" className="nav_link btndsh mt-3 mb-3" style={{width:"185px",border:"1px solid black"}}>
              
      {/* <button  className='btn mb-2 btn-lg' style={addClientBtn}> */}
        <MdPersonAddAlt1  size={20}  className='adclient' /> Add Clients
      {/* </button> */}
            </Link>
           
      {/* </div> */}
    {/* </div> */}

     
    <div style={style} >
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
      {dataLength === 0 ? <div className='p-4 tex-center'>
            <div className="alert alert-warning alert-dismissible fade show" style={{width:"auto"}} role="alert">
              
              You have not created any client yet!
              <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
          </div> 
           :""}

           <CSVLink data={clientsList} headers={colName} filename='ClientData.csv'><i class="bi bi-cloud-download" style={{height:"20px",padding:"5px"}}></i>CSV</CSVLink>
    </div>
    </>
  )
}
