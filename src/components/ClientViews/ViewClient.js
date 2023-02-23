import React from 'react'

export default function ViewClient() {
  const st = {
    backgroundColor:"blue",
    color:"white",
    // borderRadius:"10px"
    // borderRadius:"15px"
  
  }
  return (
    <>
    <div className='row'>
    {/* <div className="shadow-lg p-3 mb-5 bg-body-tertiary rounded">Larger shadow</div> */}
    <h3 className='text-center mt-2'>Personal Details</h3>
    <div className='col-4 mt-2'><label>SortName: &nbsp;Alexa Echo </label></div>
    <div className='col-4'><label>Email: &nbsp;email@example.com </label></div>
    <div className='col-4'><label>Phone: &nbsp;1111111111 </label></div>
    <div className='col-4 mt-2'><label>Address: &nbsp;Delhi </label></div>
    <div className='col-4'><label>State: &nbsp;Haryana </label></div>
    <div className='col-4'><label>City: &nbsp;Gurugram </label></div>
    <div className='col-4 mt-2'><label>Company: &nbsp;Incedo </label></div>
    <div className='p-2 mt-2'>
      <hr />
      </div>
      
    <h3 className='text-center'>Investment Details</h3>
    <table className="table table-hover">
        <thead >
          <tr style={st}>
            <th scope="col">#</th>
            <th scope="col">UserID</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            {/* <th scope="col"></th> */}
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
