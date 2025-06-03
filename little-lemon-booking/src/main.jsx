import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Nav from './components/Nav.jsx'
import Main from './components/Main.jsx'
import Booking from './components/Booking.jsx'
import Footer from './components/Footer.jsx'
import BookingConfirmation from './components/BookingConfirmation.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Nav />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/booking' element={<Booking />} />
        <Route path='/booking-confirmation' element={<BookingConfirmation />} />
      </Routes>
      <Footer />
    </Router>
  </StrictMode>,
)
