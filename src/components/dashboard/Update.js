import axios from 'axios';
import React,{useEffect, useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Update = () => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const history=useNavigate();
  useEffect(()=>{
    setId(localStorage.getItem("id"));
    setName(localStorage.getItem("name"));
    setEmail(localStorage.getItem("email"));
    setPhone(localStorage.getItem("phone"));
    //console.log("haha");
   },[]);
   function handleUpdate(e)
   {
    e.preventDefault();
      axios.put(`https://63ebe45f32a081172393adeb.mockapi.io/crud-youtube/${id}`,
      {
        name:name,
        email:email,
        phone:phone
     }
      ).then( ()=>{
        history('/read');
    });
   }
  return (
    <div>
      <h2>Update</h2>
      <form>
    <div className="mb-3">
    <label htmlFor="exampleInputName1" className="form-label">Client Name</label>
    <input type="text" className="form-control" id="exampleInputName1" name="name"
    value={name}
    onChange={(e)=>{
        setName(e.target.value);
    }}
    />
    </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" aria-describedby="emailHelp" name="email"
    onChange={(e)=>{
        setEmail(e.target.value);
    }} 
    value={email}
    />
    </div>
    <div className="mb-3">
    <label htmlFor="exampleInputPhone1" className="form-label">Phone No.</label>
    <input type="text" className="form-control" id="InputPhone1" name="phone"
    onChange={(e)=>{
        setPhone(e.target.value);
    }} 
    value={phone}
    />
    </div>
  <button type="submit" className="btn btn-primary" onClick={handleUpdate}
  >Update</button>
  <Link to="/read">
  <button type="submit" className="btn btn-primary mx-2"
  >Back</button>
  </Link>
</form>
    </div>
  )
}

export default Update
