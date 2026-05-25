import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Header from './components/Header'
import Home from './container/Home'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import Services from './container/Services'
import ServiceDetail from './container/ServiceDetail'
import Doctore from './container/Doctore'
import DoctoreDetail from './container/DoctoreDetail'
import Contact from './container/Contact'
import AboutUs from './container/AboutUs'
import Appoinment from './container/Appoinment'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/services' element={<Services />} />
        <Route path='/service-detail' element={<ServiceDetail />} />
        <Route path='/doctore' element={<Doctore />} />
        <Route path='/doctoredetail' element={<DoctoreDetail />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/aboutus' element={<AboutUs />} />
        <Route path='/appoinment' element={<Appoinment />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
