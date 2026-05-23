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
      </Routes>
      <Footer />
    </>
  )
}

export default App
