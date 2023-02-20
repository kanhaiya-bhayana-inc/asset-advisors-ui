import { Link } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import { MdPersonAddAlt1 } from 'react-icons/md';
import { BiChevronRight } from "react-icons/bi";


// var jwt = require("jsonwebtoken");

export default function Dashboard() {

  const style = {
    background: "white",
    height: "550px",
    // width:"1450px",
    marginLeft: "40px",
    marginRight: "40px",
    padding: "30px",
    borderRadius: "15px"
  }
  const addClientBtn = {
    marginLeft: "auto"
  }
  const [flag, setFlag] = useState("false");
  let condit = localStorage.getItem("id")
  const [det, setDet] = useState({});
  const [clientsList, setClientsList] = useState([]);

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
        <tr>
        <th scope="row">{e.userID}</th>
        <td>{e.clientID}</td>
        <td>{e.sortName}</td>
        <td>{e.email}</td>
        <td>{e.phone}</td>
        <td><BiChevronRight size={30} onClick={((e) => console.log("Jai ho"))} /></td>
      </tr>
     </>
        );
  })
        
        return (
          <>
        <div className='conatiner text-center'>
          <div>
            <h4>Welcome {det.sortName}</h4>
            {/* <h3>{det.email}</h3> */}
            {/* <h4>{det.phone}</h4> */}
          </div>
          {/* <h4>Token: {localStorage.getItem("token")}</h4> */}

          {/* {cli} */}

          
        </div>
        <div style={style}>
          <div style={addClientBtn} className='d-flex flex-row-reverse'><b>&nbsp;Add Clients</b>
            <MdPersonAddAlt1 size={30} />
          </div>
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">ClientID</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Phone</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {/* <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>@mdo</td>
                <td><BiChevronRight size={30} onClick={((e) => console.log("Jai ho"))} /></td>
              </tr> */}
              {cli}


            </tbody>
          </table>
        </div>
        <div className='form-row text-center'>
            <div className='m-lg-3'>
              <button type="submit" onClick={logout} className="btn btn-dark mt-3 mb-4">Logout</button>


            </div>
          </div>
      </>
    )
  }