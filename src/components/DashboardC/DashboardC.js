import { Link } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import jwt_decode from "jwt-decode";

// var jwt = require("jsonwebtoken");

export default function Dashboard() {
  // const [det, setDet] = useState({});
  // const [clientsList, setClientsList] = useState([]);

//   var obj = {}
//   var bool = false;


//   var ntokenn = "";
//   useEffect(() => {

//     let token = localStorage.getItem("tokenc");
//     console.log(token);
//     const decoded = jwt_decode(token);
// console.log(decoded); 
//     // var decode1 = jwt.decode(token);
//     // console.log("decoded token -> " + decode1);
//     let ntoken = "Bearer " + token.replaceAll('"', '');
//     ntokenn = ntoken
//     // console.log(ntoken);
//     // alert(ntoken)
//     fetch(`https://localhost:7214/api/User/get-user-auth`, {
//       method: 'GET',
//       headers: {
//         'Content-type': 'application/json',
//         "Access-Control-Allow-Origin": "*",
//         "Access-Control-Allow-Methods": "POST, GET, OPTIONS, DELETE",
//         "Authorization": ntoken,
//         "Access-Control-Max-Age": 86400
//       }
//     })
//       .then(res => res.json())
//       .then((data) => {
//         obj = data;
//         localStorage.setItem("id",data.userID)
//         setDet(data);
//         bool = true;

//         // console.log(obj);
//         // console.log(det);
//         // alert("Advisor registered successfully.")
//         // window.location ='/login'
//       })
//       // let id = det.userID;
//       // localStorage.setItem("id",id)
//       // console.log(id)
//   },[])

//   useEffect(() => {
//     console.log("helo");
//     let id = localStorage.getItem("id");
//     console.log(id);
//     fetch(`https://localhost:7214/api/User/get-all-clients/${id}`, {
//       method: 'GET',
//       headers: {
//         'Content-type': 'application/json',
//         "Access-Control-Allow-Origin": "*",
//         "Access-Control-Allow-Methods": "POST, GET, OPTIONS, DELETE",
//         "Authorization": ntokenn,
//         "Access-Control-Max-Age": 86400
//       }
//     })
//       .then(res => res.json())
//       .then((data) => {
//         obj = data;
//         // setDet({});
//         setClientsList(data);
//         bool = false;
//         console.log(clientsList);
//         // console.log(det);
//         // alert("Advisor registered successfully.")
//         // window.location ='/login'
//       })
//   }, [])
  



  /**
   * It sets the token to an empty string and then redirects the user to the homepage.
   */
  const logout = () => {
    localStorage.setItem("tokenc", "");
    window.location = '/';
  }

  // const cli = clientsList.map((e,ind) =>{
  //   return (
  //     <div key={ind} className='form-row text-center'>
  //       {e.userID}
  //       {e.sortName}
  //       {e.clientID}
  //       {e.email}
  //       {e.phone}
  //       {e.address}
  //       </div>
  //   )
  // })
  return (
    <div className='conatiner text-center'>
      <div>
        <h1>Client</h1>
        {/* <h2>Welcome {det.sortName}</h2> */}
        {/* <h3>{det.email}</h3> */}
        {/* <h4>{det.phone}</h4> */}
      </div>
      {/* <h4>Token: {localStorage.getItem("token")}</h4> */}

      {/* {cli} */}

      <div className='form-row text-center'>
        <div className='m-lg-5'>
          <button type="submit" onClick={logout} className="btn btn-dark mt-3 mb-4">Logout</button>


        </div>
      </div>
    </div>
  )
}
