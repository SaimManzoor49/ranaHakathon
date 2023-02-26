import React from 'react'
import { Link } from 'react-router-dom'
import { GrDeliver } from 'react-icons/gr'
import { MdOutlinePayment } from 'react-icons/md'
import { BsCashStack } from 'react-icons/bs'
import { Ri24HoursLine } from 'react-icons/ri'
import { GrLocation } from 'react-icons/gr'
import { SiGmail } from 'react-icons/si'
import { AiTwotonePhone } from 'react-icons/ai'
// import logoPath from '../../assets/logo2.png'
// import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <>
            <div className="container-fluid">
                <div className="row me-md-3 bg-secondary text-center pt-3">
                    <div className="col  "><h1>OUR SEMINAR</h1></div>
                </div>
                <div className="row me- me-md-3 py-5 bg-secondary">

                    <div className="col-3 col-mb-2">
                        <h1 className=''><GrDeliver /></h1>
                        <h6 className='fw-bold' >Fast & Free Delivary</h6>
                        <p className='disabled' >Free Delivary on all orders </p>
                    </div>
                    <div className="col-3 col-mb-2">
                        <h1 className=''><MdOutlinePayment /></h1>
                        <h6 className='fw-bold' >Secure Payment</h6>
                        <p className='disabled' >Free Delivary on all orders </p>
                    </div>
                    <div className="col-3 col-mb-2">
                        <h1 className=''><BsCashStack /></h1>
                        <h6 className='fw-bold' >Money Back Gurentee</h6>
                        <p className='disabled' >Free Delivary on all orders </p>
                    </div>
                    <div className="col-3">
                        <h1 className=''><Ri24HoursLine /></h1>
                        <h6 className='fw-bold' >Online Support</h6>
                        <p className='disabled' >Free Delivary on all orders </p>
                    </div>

                </div>

                <div className="row row-in-row bg-secondary">
                    <div className="row  py-5 ms-2 bg-dark text-white d-flex justify-content-center align-items-center">
                        <div className="col-6 col-md-3 ">
                            <div className="ms-auto me-auto ms-md-0 me-md-0">
                                <h4 className='nave'>EVENZIER</h4>
                                {/* <img src={logoPath} alt="f-logo" /> */}
                                <p className='mt-4 disabled'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, ipsam blanditiis? Animi, perspiciatis numquam repellat harum saepe .</p>
                                <Link to={''} className='fs-5 icon iconfb text-primary text-decoration-none text-white'><GrLocation className='me-2 '/>Salani Mass and training center</Link> <br />
                                <Link to={''} className='fs-5 icon icontw mx-2 mt-2 text-primary text-decoration-none text-white'><SiGmail className='me-2' />umerana903@gmail.com</Link> <br />
                                <Link to={''} className='fs-5 mt-2 icon iconinsta text-primary text-decoration-none text-white'><AiTwotonePhone className='me-2' />+92300 1200457</Link>
                            </div>
                        </div>
                        <div className="col-6 col-md-3 ">
                            <div className="ms-auto me-auto ms-md-0 me-md-0">

                                <h6 className='mb-5'>Quick Links</h6>
                                <p><Link to={''} className='disabled text-decoration-none text-white ' >Image licence</Link></p>
                                <p><Link to={''} className='disabled text-decoration-none text-white ' >Style Guide</Link></p>
                                <p><Link to={''} className='disabled text-decoration-none text-white ' >Privacy Policy</Link></p>
                            </div>
                        </div>
                        <div className="col-6 col-md-3 text-white ">
                            <div className="ms-auto me-auto ms-md-0 me-md-0">

                                <h6 className='mb-5'>Seminor center</h6>
                                <p><Link to={''} className='disabled text-decoration-none text-white ' >Fasailabad</Link></p>
                                <p><Link to={''} className='disabled text-decoration-none text-white ' >Lahore</Link></p>
                                <p><Link to={''} className='disabled text-decoration-none text-white ' >Karachi</Link></p>
                            </div>
                        </div>
                        <div className="col-6 col-md-3 text-white  ">
                            <div className="ms-auto me-auto ms-md-0 me-md-0">

                                <h6 className='mb-5'>Select Seminor</h6>
                                <p><Link to={''} className='disabled text-decoration-none text-white ' >For Motivation</Link></p>
                                <p><Link to={''} className='disabled text-decoration-none text-white ' >For Sports</Link></p>
                                <p><Link to={''} className='disabled text-decoration-none text-white ' >Privacy Parties</Link></p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
