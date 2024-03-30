import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/Home'
import Overview from './components/Overview'
import Guide from './components/Guide'
import Preview from './components/Preview'
import User from './components/User'
import Subscribe from './components/Subscribe'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './pages/about/About'
import Contact from './pages/Contact'

const App = () => {
  return <>
    <BrowserRouter >
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<h1>Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  </>
}

export default App