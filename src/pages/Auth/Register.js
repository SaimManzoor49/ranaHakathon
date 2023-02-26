import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import  { createUserWithEmailAndPassword} from 'firebase/auth';
import {auth} from '../../config/firebase';

const intializeState={
  email:" ",
  password:"",
  confirmPassword:" "
}
export default function Register() {
const [state,setState]=useState(intializeState)
const [isProcessing,setIsProcressing]=useState(false)

const handleChange=e=>{

  const {name,value}=e.target
setState(s=>({...s,[name]:value}))


}
const handleSubmit=(e)=>{
  e.preventDefault();
  let {email,password,confirmPassword}=state
  if(confirmPassword!==password){
    return window.toastify("Your password dos't match!","error")
  }
setIsProcressing(true)


createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    window.toastify("A new user has been successfully Registered","success")
    console.log(user)
    // ...
  })
  .catch((err) => {
window.toastify("Something went wrong ","error")
    console.log(err)
    // ..
  })
  .finally(()=>{
    setIsProcressing(false);
  })

}

  return (
    <>
<div className="py-5 auth">
    <div className="container">
      <div className="row">
        <div className="col">

          
            <div className="card p-3 p-md-5 mx-auto" style={{maxWidth:500}}>
              <h3 className='text-center my-3'>Sign Up</h3>
<form onSubmit={handleSubmit}>
<div className="row">
  <div className="col-12 mb-3">
<input type="email" placeholder='Enter your email' name='email' onChange={handleChange} className='form-control'/>
  </div>
  <div className="col-12 mb-b-3">
<input type="password" placeholder='Enter your password' name='password' onChange={handleChange} className='form-control'/>

  </div>
</div>
<div className="row">
  <div className="col">
  <input type="password" placeholder='confirm password' name='confirmPassword' onChange={handleChange} className='mt-2 form-control'/>

  </div>
</div>
<div className="row">
  <div className="col text-center">

  <button className='btn btn-primary w-100 mt-3' disabled={isProcessing}>{ !isProcessing ? <span>Register</span> : <div className='spinner spinner-grow spinner-grow-sm'></div>}</button>
  </div>
</div>
<div className="row pb-2 pt-1 mt-3 mb-2">
                      <div className="col-12 ">
                        <p>
                          Already an Account...?{" "}
                          <Link
                            className="btn btn-dark "
                            to={"/auth/login"}
                          >
                      Sign Up
                          </Link>
                        </p>
                      </div>
                      
                      </div>
                    
</form>

            </div>
          </div>
        </div>
      </div>
    
      </div>
    </>
  )
}
