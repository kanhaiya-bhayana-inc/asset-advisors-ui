import React from 'react'
import { MdPersonAddAlt1 } from 'react-icons/md';
import { BiChevronRight } from "react-icons/bi";

export default function DashboardAdv() {
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

  return (
    <div style={style}>
      <div style={addClientBtn} className='d-flex flex-row-reverse'><b>&nbsp;Add Clients</b>
        <MdPersonAddAlt1 size={30} />
      </div>
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">UserID</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td><BiChevronRight size={30} onClick={((e) => console.log("Jai ho"))} /></td>
          </tr>
         

        </tbody>
      </table>
    </div>
  )
}
