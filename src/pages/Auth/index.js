import React from 'react'
import {Routes,Route, useNavigate} from 'react-router-dom';
import Register from './Register';
import Login from './Login';
import { useAuthContext } from '../../context/Authcontext';
export default function Index() {
  const {user} = useAuthContext()

  const navigate = useNavigate()
console.log(user)
  // if(user.uid){
  //   navigate('/')
  // }
  return (
    <>
      <Routes>
<Route  path="/register" element={<Register/>}/>
<Route  path="/login" element={<Login/>}/>

      </Routes>

</>
  )
}
