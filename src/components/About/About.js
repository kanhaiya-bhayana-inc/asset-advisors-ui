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
                    <h4>About BackStreet Asset Manager</h4>
                <p style={{textAlign: "justify"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
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