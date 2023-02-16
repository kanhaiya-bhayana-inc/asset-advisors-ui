import React from 'react'

function Footer() {
    let footerStyling={
        height:"9vh"
    }
    let styLing = {
        padding:"20px"
    }
  return (
    <>


 <div className=" text-center" style={footerStyling}>
        <p style={styLing}>
        copyright &#169; 2023. BackStreet Asset Manager. All rights reserved.
        </p>
        
        </div>


    </>
  )
}

export default Footer