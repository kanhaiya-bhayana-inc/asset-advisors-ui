import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { MdPersonAddAlt1 } from 'react-icons/md';
import { BiChevronRight } from "react-icons/bi";
import { AiOutlineEdit } from "react-icons/ai";
import { AiOutlineDelete } from "react-icons/ai";
import { AiOutlineEye } from "react-icons/ai";

export default function DashboardAdv() {
  const navigate = useNavigate();
  const style = {
    background: "white",
    borderRadius: "15px"
  }
  const addClientBtn = {
    width:"200px",
    backgroundColor:"##0000ff"
    
  }
  const st = {
    backgroundColor:"blue",
    color:"white",
  }

  const [flag, setFlag] = useState("false");
  let condit = localStorage.getItem("id")
  const [det, setDet] = useState({});
  const [clientsList, setClientsList] = useState([]);
  let count = 1;

  
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
        setDet(data);
        setFlag("true");
        console.log(flag);
      })
  };

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
      })
  }


  useEffect(() => {
    if (flag != "true") { DataCall(); }
    myFunc();
  }, [flag])

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
            alert("Client deleted successfully.")
            window.location = '/advisordash';
            // navigate('/advisordash')
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
  }

  const logout = () => {
    localStorage.setItem("tokena", "");
    localStorage.setItem("id", "");
    window.location = '/';
  }

  const cli = clientsList.map((e, ind) => {
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
            <td><AiOutlineDelete size={20} onClick={(ev)=>{delClient(e.userID)}}  /></td>
            {/* <td><AiOutlineEye size={20} onClick={((e) => console.log("Jai ho"))} /></td> */}
      </tr>
     </>
        );
  })

  return (
    <>
    {/* <div className='row p-2' style={{backgroundColor:"#dbe2e2", border:"none"}}> */}
      {/* <div className='col'> */}
      {/* <div style={addClientBtn} className='d-flex flex-row-reverse'><b>&nbsp;Add Clients</b> */}
      <Link to="/addClient" className="nav_link" style={{width:"200px",border:"1px solid black"}}>
              
      {/* <button  className='btn mb-2 btn-lg' style={addClientBtn}> */}
        <MdPersonAddAlt1 size={30} /> Add Clients
      {/* </button> */}
            </Link>
      {/* </div> */}
    {/* </div> */}

     
    <div style={style}>
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
    </div>
    </>
  )
}
