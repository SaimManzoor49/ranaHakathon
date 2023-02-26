import React from 'react'
import { GiBigDiamondRing } from 'react-icons/gi'
import { BiDrink } from 'react-icons/bi'
import { HiCake } from 'react-icons/hi'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'
function TopCard() {
    return (
        <>
            <div className="card--heroSection py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 col-6">
                            <div className="card py-3" >
                                <h3 className='text-center text-success fs-3'><GiBigDiamondRing /></h3>
                                <div className="card-body">
                                    <h5 className="card-title text-center">Wedding Party</h5>
                                    <p className="card-text">
                                        Lorem ipsum dolor sit amet consectetur. ipsum dolor sit amet consectetur
                                    </p>
                                </div>
                            </div> 

                        </div>
                        <div className="col-md-4 col-6">    <div className="card py-3" >
                            <h3 className='text-center text-success fs-3'><HiCake /></h3>
                            <div className="card-body">
                                <h5 className="card-title text-center">Birthday Party</h5>
                                <p className="card-text">
                                    Lorem ipsum dolor sit amet consectetur. ipsum dolor sit amet consectetur
                                </p>
                            </div>
                        </div></div>
                        <div className="col-md-4 col-6">    <div className="py-3 card" >
                            <h3 className='text-center text-success fs-3'><BiDrink /></h3>
                            <div className="card-body">
                                <h5 className="card-title text-center">Events & Party</h5>
                                <p className="card-text">
                                    Lorem ipsum dolor sit amet consectetur. ipsum dolor sit amet consectetur
                                </p>
                            </div>
                        </div></div>
                    </div>


                    <div className="row my-5">
                    <div className="col-12 col-md-6">
                        <div className=" mt-5 p-4">
                            <h3 className=' fw-bold'>Event Check-In</h3>
                            <h4 className=' mt-4'>Fast, reliable, and secure on-site guest check-in. Contactless and QR code-enabled to minimize risks and keep your guests and staff safe and socially distanced.</h4>
                            <button className='btn btn-outline-primary hover-text-white text-primary rounded-0 p-4 fw-bold mt-4' >MORE ON CHECK-IN <HiOutlineArrowNarrowRight className='ms-3' /></button>
                        </div>
                    </div>
                        <div className="col-12 col-md-6">
                            <img src="https://images.unsplash.com/photo-1517722283185-13cf8ecedbc3?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=600&ixid=MnwxfDB8MXxyYW5kb218MHx8ZXZlbnR8fHx8fHwxNjc3NDMzNzM4&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=600" className='img-fluid' alt="img" />
                        </div>
                    </div>

                    
                </div>
            </div>
        </>
    )
}

export default TopCard
