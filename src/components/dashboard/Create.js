import React,{useState} from 'react'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
const Create = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const history=useNavigate();
    const header={'Access-Control-Allow-Origin':'*'};
    const handleSubmit= (e)=>{
        e.preventDefault();
        axios.post(
            'https://63ebe45f32a081172393adeb.mockapi.io/crud-youtube',
             {
                name:name,
                email:email,
                phone:phone,
                header
             }
        ).then(
            ()=>{
                history('/read');
            }
        )
        
    }
  return (
    
    <div>
      <div className='d-flex justify-content-between m-3'>
      <h2>Create</h2>
      <Link to="/read">
      <button type="submit" className="btn btn-primary"
      >Show Client List</button>
      </Link>
      </div>
      <form>
    <div className="mb-3">
    <label htmlFor="exampleInputName1" className="form-label">Client Name</label>
    <input type="text" className="form-control" id="exampleInputName1" name="name"
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
    />
    </div>
    <div className="mb-3">
    <label htmlFor="exampleInputPhone1" className="form-label">Phone No.</label>
    <input type="text" className="form-control" id="InputPhone1" name="phone"
    onChange={(e)=>{
        setPhone(e.target.value);
    }}
    />
    </div>
  <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
</form>
    </div>
  )
}

export default Create
