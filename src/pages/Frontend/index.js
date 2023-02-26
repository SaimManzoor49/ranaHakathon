import React from 'react'

import { Routes, Route } from 'react-router-dom';
import Hero from './Hero'
import About from './About'
import Home from './Home/Home';
import TrandingsEvents from './TrandingsEvents';
export default function index() {



  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/trendingEvents' element={<TrandingsEvents />} />




      </Routes>



    </>
  )
}
