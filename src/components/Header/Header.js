import { signOut } from 'firebase/auth'
import React from 'react'
import { Link } from 'react-router-dom'
import { auth } from '../../config/firebase'

// import logoPath from '../../assets/logo2.png'
export default function index() {

const handleLogOut=()=>{
    signOut(auth)
    window.toastify("Logout sucessfully",'success')
}


    return (
        <>

 <nav className="navbar navbar-expand-lg bg-primary p-3 p-md-4 fw-bold">
                <div className="container-fluid">
                    <Link  className="navbar-brand nave ms-5 text-white" to={'/'}>EVENIER</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to={'/trendingEvents'} className="nav-link links active text-white"  aria-current="page ms-3 " >Trending Events </Link>
                            </li>
                            <li className="nav-item">
                                <Link to={'/about'} className="nav-link links ms-4 text-white" href="#">Add new Events</Link>
                            </li>

                      

                        </ul>
                        <div className="d-flex justify-content-center align-items-center "  >
                            <button className="btn  btn-light border-0 text-black  ms-4  mt-2 " type="submit" onClick={handleLogOut}> LogOut</button> :   
                            <Link className="btn  btn-light border-0 text-black me-3 ms-2  mt-2 " to='/auth/register' type="submit" > Sign Up</Link>
                             
        
                          

                        </div>
                    </div>
                </div>
            </nav>

        </>
    )
}
