import React from 'react'
import pic1 from '../Services/austin-distel-EMPZ7yRZoGw-unsplash.jpg'
import pic2 from '../Services/hunters-race-MYbhN8KaaEc-unsplash.jpg'
import pic3 from '../Services/mathieu-stern-1zO4O3Z0UJA-unsplash.jpg'

function Services() {
    return (
        <>
            <div className='my-3'>
                <h1 className='text-center'>Services</h1>
            </div>
            <div className='container fluid nav_bg mb-5'>
                <div className='row '>
                    <div className='col-12 mx-auto'>
                        <div className='row gy-2 p-3'>
                            <div className='col-md-4 col-10 mx-auto'>
                                <div className="card" >
                                    <img src={pic2} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h4 className="card-title">Financial Advice</h4>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

                                    </div>
                                </div>
                            </div>
                            <div className='col-md-4 col-10 mx-auto'>
                                <div className="card" >
                                    <img src={pic3} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h4 className="card-title">Savings</h4>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

                                    </div>
                                </div>
                            </div>
                            <div className='col-md-4 col-10 mx-auto'>
                                <div className="card" >
                                    <img src={pic1} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h4 className="card-title">Investment</h4>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

                                    </div>
                                </div>
                            </div>
                            <div className='col-md-4 col-10 mx-auto'>
                                <div className="card" >
                                    <img src={pic2} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h4 className="card-title">Financial Advice</h4>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

                                    </div>
                                </div>
                            </div>
                            <div className='col-md-4 col-10 mx-auto'>
                                <div className="card" >
                                    <img src={pic3} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h4 className="card-title">Savings</h4>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

                                    </div>
                                </div>
                            </div>
                            <div className='col-md-4 col-10 mx-auto'>
                                <div className="card" >
                                    <img src={pic1} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h4 className="card-title">Investment</h4>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Services