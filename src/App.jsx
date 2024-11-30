import React from 'react'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import About from './components/about/About'
import Services from './components/services/Services'
import Mywork from './components/Mywork/Mywork'
import Contact from './components/contact/Contact'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Hero />} />
        <Route path='/about' element={<About />} />
        <Route path='/service' element={<Services />} />
        <Route path='/mywork' element={<Mywork />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App