import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Header from './components/Header'
import Home from './container/Home'
import Footer from './components/Footer'
import { Route, Routes, useLocation } from 'react-router-dom'
import Services from './container/Services'
import ServiceDetail from './container/ServiceDetail'
import Doctore from './container/Doctore'
import DoctoreDetail from './container/DoctoreDetail'
import Contact from './container/Contact'
import AboutUs from './container/AboutUs'
import Appoinment from './container/Appoinment'
import Timetable from './container/Timetable'
import Testimonials from './container/Testimonials'
import Pricing from './container/Pricing'
import Projectdetail from './container/Projectdetail'
import Signup from './container/Signup'
import Login from './container/Login'
import FAQ from './container/FAQ'
import MailSuccess from './container/MailSuccess'

function App() {
  const [count, setCount] = useState(0);

  const location = useLocation();
  const hideLayout = location.pathname === "/mailsuccess";


  return (
    <>
       {!hideLayout && <Header />}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/services' element={<Services />} />
        <Route path='/service-detail' element={<ServiceDetail />} />
        <Route path='/doctore' element={<Doctore />} />
        <Route path='/doctoredetail' element={<DoctoreDetail />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/aboutus' element={<AboutUs />} />
        <Route path='/appoinment' element={<Appoinment />} />
        <Route path='/timetable' element={<Timetable />} />
        <Route path='/testimonials' element={<Testimonials />} />
        <Route path='/pricing' element={<Pricing />} />
        <Route path='/projectdetail' element={<Projectdetail />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/faq' element={<FAQ />} />
        <Route path="/mailsuccess" element={<MailSuccess />} />
      </Routes>
       {!hideLayout && <Footer />}
    </>
  )
}

export default App
