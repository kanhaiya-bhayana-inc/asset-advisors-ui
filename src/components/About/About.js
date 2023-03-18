import React from 'react'
import pic from '../About/undraw_career_progress_ivdb.svg'

function About() {
    return (
        <>

            {/* <div className='my-3'>
                <h1 className='text-center'>About Us</h1>
            </div> */}
            <section id='header' className='d-flex align-items-center'>

<div className='container  fluid nav_bg'>
    <div className='row'>
        <div className='col-12 mx-auto'>
            <div className='row'>
            <div className='col-md-6 p-5  pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column'>
                <div className="m-lg-5">
                    <h4>Asset Advisors</h4>
                <p style={{textAlign: "justify"}}>Welcome to Asset Advisors, your go-to platform for managing your investments with ease. This portal is designed to simplify the investment management process, making it accessible to both seasoned and novice investors.

With Asset Advisors, you can sign up and create profiles for your clients. You'll be able to manage their investments by adding, editing, and deleting as necessary. 
<br></br><br></br>
Thank you for choosing Asset Advisors to manage your investments. We look forward to helping you achieve your financial goals.</p>
                {/* <p className='my-3'>We are a team of talented individuals that is all you need </p> */}             
                </div>
                
            </div>
            <div className='col-lg-6 col-md-6 col-xs-4 p-5 order 1 order-lg-2 header-img'>
         <img src={pic} className="pic" alt="..."/>
            </div>
            </div>

        </div>
    </div>
</div>

</section>


        </>
    )
}

export default About