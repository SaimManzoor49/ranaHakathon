import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Frontend from './Frontend';
import Auth from './Auth';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Dashboard from './Dashboard';
import { useAuthContext } from '../context/Authcontext';
import PrivateRoute from '../components/Private/PrivateRoute';
export default function CustomRoutes() {

  const {isAuthenticated} = useAuthContext()
  return (
    <div>
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route path='/*' element={<Frontend />} />

            <Route path='/auth/*' element={!isAuthenticated ? <Auth /> : <Navigate to='/'  replace />} />
            <Route path='/dashBoard/*' element={  <PrivateRoute Component={Dashboard}          Dashboard />} />

          </Routes>
        </main>
        <Footer />
      </BrowserRouter>

    </div>
  )
}
