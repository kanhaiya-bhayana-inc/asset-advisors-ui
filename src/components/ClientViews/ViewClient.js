import React, { useState, useEffect } from 'react'
import { MdPersonAddAlt1 } from 'react-icons/md';
import { Link, useParams } from 'react-router-dom'
import { AiOutlineEdit } from "react-icons/ai";
import { AiOutlineDelete } from "react-icons/ai";

export default function ViewClient() {
  let { vcliID } = useParams();
  const st = {
    backgroundColor: "blue",
    color: "white",
    // borderRadius:"10px"
    // borderRadius:"15px"

  }
  const [det, setDet] = useState({});


  const clientProfileData = async () => {
    let token = localStorage.getItem("tokena");
    let advId = localStorage.getItem("id");
    let ntoken = "Bearer " + token.replaceAll('"', '');
    // const [advEdit, setAdvEdit] = useState("false");



    await fetch(`https://localhost:7214/api/User/Get-Client-by/${vcliID}`, {
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
        console.log("data->" + data);
        // setInitialValues(data);
        // Formik.values(data);

        // console.log("Mydata->", det);
        // console.log("Mydata2->", initialValues);
        // setFlag("true");
        // console.log(flag);
      })
  }

  useEffect(() => {
    // if (flag != "true") { clientProfileData(); }
    clientProfileData();
    // myFunc();
  }, [])
  return (
    <>
      <div className='row'>
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
        <Link to="/addinvestment" className="nav_link text-center" style={{ width: "auto", border:"1px solid black",marginLeft: "20px" }}>
          Add Investments   
        </Link>
        <h3 className='text-center mb-4' style={{marginTop:"-20px"}}>Investment Details</h3>
        <table className="table table-hover">
          <thead >
            <tr style={st}>
              <th scope="col" style={{ color: "white" }}>#</th>
              <th scope="col" style={{ color: "white" }}>Id</th>
              <th scope="col" style={{ color: "white" }}>Name</th>
              <th scope="col" style={{ color: "white" }}>Type</th>
              <th scope="col" style={{ color: "white" }}>Active</th>
              <th scope="col" style={{ color: "white" }}>Action</th>
              {/* <th scope="col"></th> */}
              {/* <th scope="col"></th> */}
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td><Link to={`/editinvestment`}><AiOutlineEdit size={20} onClick={((e) => console.log("Jai ho"))} /></Link> &nbsp; <AiOutlineDelete size={20}   /></td>
              {/* <td><BiChevronRight size={30} onClick={((e) => console.log("Jai ho"))} /></td> */}
              {/* <td><AiOutlineEdit size={20} onClick={((e) => console.log("Jai ho"))} /></td> */}
              {/* <td><AiOutlineDelete size={20} onClick={((e) => console.log("Jai ho"))} /></td> */}
              {/* <td><AiOutlineEye size={20} onClick={((e) => console.log("Jai ho"))} /></td> */}
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
              <td>@fat</td>
              <td><Link to={`/editclient/`}><AiOutlineEdit size={20} onClick={((e) => console.log("Jai ho"))} /></Link> &nbsp; <AiOutlineDelete size={20}   /></td>
              {/* <td><BiChevronRight size={30} onClick={((e) => console.log("Jai ho"))} /></td> */}
              {/* <td><AiOutlineEdit size={20} onClick={((e) => console.log("Jai ho"))} /></td> */}
              {/* <td><AiOutlineDelete size={20} onClick={((e) => console.log("Jai ho"))} /></td> */}
              {/* <td><AiOutlineEye size={20} onClick={((e) => console.log("Jai ho"))} /></td> */}
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
              <td>@fat</td>
              <td><Link to={`/editclient/`}><AiOutlineEdit size={20} onClick={((e) => console.log("Jai ho"))} /></Link> &nbsp; <AiOutlineDelete size={20}   /></td>
              {/* <td><BiChevronRight size={30} onClick={((e) => console.log("Jai ho"))} /></td> */}
              {/* <td><AiOutlineEdit size={20} onClick={((e) => console.log("Jai ho"))} /></td> */}
              {/* <td><AiOutlineDelete size={20} onClick={((e) => console.log("Jai ho"))} /></td> */}
              {/* <td><AiOutlineEye size={20} onClick={((e) => console.log("Jai ho"))} /></td> */}
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
              <td>@fat</td>
              <td><Link to={`/editclient/`}><AiOutlineEdit size={20} onClick={((e) => console.log("Jai ho"))} /></Link> &nbsp; <AiOutlineDelete size={20}   /></td>
              {/* <td><BiChevronRight size={30} onClick={((e) => console.log("Jai ho"))} /></td> */}
              {/* <td><AiOutlineEdit size={20} onClick={((e) => console.log("Jai ho"))} /></td> */}
              {/* <td><AiOutlineDelete size={20} onClick={((e) => console.log("Jai ho"))} /></td> */}
              {/* <td><AiOutlineEye size={20} onClick={((e) => console.log("Jai ho"))} /></td> */}
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
              <td>@fat</td>
              <td><Link to={`/editclient/`}><AiOutlineEdit size={20} onClick={((e) => console.log("Jai ho"))} /></Link> &nbsp; <AiOutlineDelete size={20}   /></td>
              {/* <td><BiChevronRight size={30} onClick={((e) => console.log("Jai ho"))} /></td> */}
              {/* <td><AiOutlineEdit size={20} onClick={((e) => console.log("Jai ho"))} /></td> */}
              {/* <td><AiOutlineDelete size={20} onClick={((e) => console.log("Jai ho"))} /></td> */}
              {/* <td><AiOutlineEye size={20} onClick={((e) => console.log("Jai ho"))} /></td> */}
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
              <td>@fat</td>
              <td><Link to={`/editclient/`}><AiOutlineEdit size={20} onClick={((e) => console.log("Jai ho"))} /></Link> &nbsp; <AiOutlineDelete size={20}   /></td>
              {/* <td><BiChevronRight size={30} onClick={((e) => console.log("Jai ho"))} /></td> */}
              {/* <td><AiOutlineEdit size={20} onClick={((e) => console.log("Jai ho"))} /></td> */}
              {/* <td><AiOutlineDelete size={20} onClick={((e) => console.log("Jai ho"))} /></td> */}
              {/* <td><AiOutlineEye size={20} onClick={((e) => console.log("Jai ho"))} /></td> */}
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
              <td>@fat</td>
              <td><Link to={`/editclient/`}><AiOutlineEdit size={20} onClick={((e) => console.log("Jai ho"))} /></Link> &nbsp; <AiOutlineDelete size={20}   /></td>
              {/* <td><BiChevronRight size={30} onClick={((e) => console.log("Jai ho"))} /></td> */}
              {/* <td><AiOutlineEdit size={20} onClick={((e) => console.log("Jai ho"))} /></td> */}
              {/* <td><AiOutlineDelete size={20} onClick={((e) => console.log("Jai ho"))} /></td> */}
              {/* <td><AiOutlineEye size={20} onClick={((e) => console.log("Jai ho"))} /></td> */}
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
              <td>@fat</td>
              <td><Link to={`/editclient/`}><AiOutlineEdit size={20} onClick={((e) => console.log("Jai ho"))} /></Link> &nbsp; <AiOutlineDelete size={20}   /></td>
              {/* <td><BiChevronRight size={30} onClick={((e) => console.log("Jai ho"))} /></td> */}
              {/* <td><AiOutlineEdit size={20} onClick={((e) => console.log("Jai ho"))} /></td> */}
              {/* <td><AiOutlineDelete size={20} onClick={((e) => console.log("Jai ho"))} /></td> */}
              {/* <td><AiOutlineEye size={20} onClick={((e) => console.log("Jai ho"))} /></td> */}
            </tr>
            


          </tbody>
        </table>


      </div>
    </>
  )
}
