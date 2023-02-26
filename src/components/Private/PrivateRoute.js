import React from 'react'
import { Navigate } from 'react-router-dom';
import { useAuthContext } from '../../context/Authcontext';
export default function PrivateRoute({Component}) {
const {user,isAuthenticated}=useAuthContext()

if(!isAuthenticated)

return <Navigate to='/auth/login' replace />

  return (
    <div>
      <Component/>
    </div>
  )
}
