import React, { useState,useEffect } from 'react'
import axios from 'axios';
import './Read.css';
import { Link } from 'react-router-dom';
import { FaAngleDoubleDown } from "react-icons/fa";
import { FaAngleDoubleUp } from "react-icons/fa";
import { FaUserEdit } from "react-icons/fa";
import {FaBan} from "react-icons/fa";
import {FaUserPlus} from "react-icons/fa";
//import { FaArrowCircleDown } from "react-icons/fa";
// data-bs-toggle="collapse" className='accordian-toggle' data-bs-target="#r2"
const Read = () => {
  const [data,setData] = useState([]);
  const [open, setOpen] =useState(false);
  function getData()
  {
    axios.get('https://63ebe45f32a081172393adeb.mockapi.io/crud-youtube')
    .then((res)=>{
      //console.log(res);
      setData(res.data);
    })
  }
  function handleDelete(id)
  {
    axios.delete(`https://63ebe45f32a081172393adeb.mockapi.io/crud-youtube/${id}`).then(()=>{
            getData();
           });
  }
  function setToLocalStorage(id,name,email,phone)
  {
      localStorage.setItem("id",id);
      localStorage.setItem("name",name);
      localStorage.setItem("email",email);
      localStorage.setItem("phone",phone);
  }
   useEffect(()=>{
    getData();
   },[]);
  return (
    <>
      <div className='d-flex justify-content-between m-3'>
      <h2>Client List</h2>
      <Link to="/">
      <button type="submit" className="btn btn-primary"
      ><FaUserPlus></FaUserPlus> Add Client</button>
      </Link>
      </div>
      <table className="table accordian content-table">
  <thead>
    <tr>
      <th scope="col">Client_id</th>
      <th scope="col">Name</th>
      <th scope="col">Email Id</th>
      <th scope="col">Phone</th>
      <th scope="col"></th>
      <th scope="col"></th>
      <th scope="col"></th>
    </tr>
  </thead>
  {
    data.map((eachData,key)=>{
        return(
            <>
             <tbody key={eachData.id}>
   
     <tr>
     <th scope="row" >{eachData.id} <span onClick={() => setOpen(!open)} data-bs-toggle="collapse" data-bs-target="#r1">
     {open ? <FaAngleDoubleUp /> : <FaAngleDoubleDown />}
     </span>
     </th>
     <td>{eachData.name}</td>
     <td>{eachData.email}</td>
     <td>{eachData.phone}</td>
     <td>
        <Link to="/update">
        <button className='btn btn-primary'>
        <FaUserEdit onClick={
            ()=>{
                setToLocalStorage(eachData.id,eachData.name,eachData.email,eachData.phone);
            }
        }></FaUserEdit>
        </button>
        </Link>
</td>

     <td>
      <Link>
      <button className='btn btn-primary'>
      <FaBan onClick={
        ()=>{
            handleDelete(eachData.id);
        }
     }></FaBan>
     </button>
     </Link>
     </td>
  </tr>
  <tr>
     <td colSpan='12' className='hiddenRow'>
    <div className="accordian-body collapse accordian-collapse" id="r1">
      <table className='table table-striped'>
         <thead>
         <tr className="info">
													<th>Job</th>
													<th>Company</th>
													<th>Salary</th>		
													<th>Date On</th>	
													<th>Date off</th>	
													<th>Action</th>	
				 </tr>
         </thead>
         <tbody>
         <tr>
         <td> Enginner Software</td>
													<td>Google</td>
													<td>U$8.00000 </td>
													<td> 2016/09/27</td>
													<td> 2017/09/27</td>
													<td> 
														<button className="btn btn-danger">
                            <FaUserEdit/>
															</button>
													</td>
          </tr>
          <tr>
         <td> Enginner Software</td>
													<td>Google</td>
													<td>U$8.00000 </td>
													<td> 2016/09/27</td>
													<td> 2017/09/27</td>
													<td> 
														<button className="btn btn-danger">
                            <FaUserEdit/>
															</button>
													</td>
          </tr>
          <tr>
         <td> Enginner Software</td>
													<td>Google</td>
													<td>U$8.00000 </td>
													<td> 2016/09/27</td>
													<td> 2017/09/27</td>
													<td> 
														<button className="btn btn-danger">
                            <FaUserEdit/>
															</button>
													</td>
          </tr>
            {/* Modal Code starting Here */}
            <button type="button" className="btn btn-dark my-2 modal-btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
Add a new Investment
</button>
<div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Add Investment</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <form>
  <div className="mb-3">
    <label htmlFor="exampleName1" className="form-label">Investment Name</label>
    <input type="text" className="form-control" id="exampleInputName1" aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
  <label htmlFor="exampletype1" className="form-label">Investment Type</label>
  <select className="form-select" aria-label="Default select example" id='exampletype1'>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
  </div>
  <div className="mb-3">
    <label htmlFor="StrategyName1" className="form-label">Investment Strategy Name</label>
    <input type="text" className="form-control" id="StrategyName1" aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label htmlFor="AccountId" className="form-label">Account ID</label>
    <input type="text" className="form-control" id="AccountId" aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label htmlFor="ModelAPLId" className="form-label">ModelAPLId</label>
    <input type="text" className="form-control" id="ModelAPLId" aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label htmlFor="InvestmentAmount" className="form-label">Investment Amount</label>
    <input type="text" className="form-control" id="InvestmentAmount" aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3 text-center">
  <button type="submit" className="btn btn-primary">Submit</button>
  <button type="button" className="btn btn-secondary mx-2" data-bs-dismiss="modal">Close</button>
  </div>
  </form>
      </div>
    </div>
</div>
</div>
             {/* Modal Code Finishing Here */}
         </tbody>
      </table>
     
    </div>
    </td>
  </tr> 
 </tbody>
 </>
        );
       })
  }
</table>
</>
)
}
export default Read;


