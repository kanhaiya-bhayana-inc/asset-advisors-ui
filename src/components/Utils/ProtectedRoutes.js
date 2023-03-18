import React from 'react'
import { Navigate } from 'react-router-dom'
import MySide from '../MyComp/Sidebar/MySidebar'

export default function ProtectedRoutes() {
    let auth = localStorage.getItem("tokena");
    // useEffect(() => {
    //   return () => {
  
    //      window.addEventListener("beforeunload", function(e) {
  
    //     let confirmationMessage = "o/";
  
    //     (e || window.event).returnValue = confirmationMessage; //Gecko + IE
  
    //     console.log("logout !");
    //     return confirmationMessage; //Webkit, Safari, Chrome
      
    //   });
    //  }
     
    // });
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
