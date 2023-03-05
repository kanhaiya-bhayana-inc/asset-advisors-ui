import React from 'react'
import { Navigate } from 'react-router-dom'
import MySide from '../MyComp/Sidebar/MySidebar'

export default function ProtectedRoutes() {
    let auth = localStorage.getItem("tokena");
  return (
    auth
    ?
      (
        <> 
          <MySide/>
          {/* <Outlet/>  */}
        </>
      )  
    :
      <Navigate to="/" />
  )
}
