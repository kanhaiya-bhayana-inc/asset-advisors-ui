import React from 'react'
import { Link } from 'react-router-dom'
import pic from '../Home/undraw_business_deal_re_up4u.svg'
import './Home.css'

function Home() {
    return (



        <section id='header' className='d-flex align-items-center bg-light'>

            <div className='container  fluid nav_bg'>
                <div className='row'>
                    <div className='col-12 mx-auto'>
                        <div className='row'>
                            <div className='col-md-6 p-5  pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column'>
                                <div className="m-lg-5">
                                    <h3 pl-3>Grow your business with<br/> <span className='brand'>Asset Advisor </span></h3>
                                    <p className='my-3'>We are a team of talented individuals that is all you need </p>
                                    <div className='mt-3'>
                                        <Link to='/Signup' className='btn btn-primary hmbtn'>Get Started</Link>
                                    </div>
                                </div>

                            </div>
                            <div className='col-lg-6 p-5 order 1 order-lg-2 header-img'>
                                <img src={pic} className="pic" alt="..." />
                            </div>
                        </div>

                    </div>
                </div>
                
            </div>

        </section>


    )
}

export default Home