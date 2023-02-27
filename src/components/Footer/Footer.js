import React from 'react'

function Footer() {
    let footerStyling={
        height:"9vh"
    }
    let styLing = {
        padding:"20px",
        // marginTop:"80px"
    }
  return (
    <>


 <div className=" text-center" style={footerStyling}>
        <p style={styLing}>
        {/* copyright &#169; 2023. Asset Advisors . All rights reserved. */}
        </p>
        
        </div>


    </>
  )
}

export default Footer