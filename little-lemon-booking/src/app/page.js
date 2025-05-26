'use client'
import React from 'react';
import Main from './components/Main';
import Booking from './components/Booking';
import BookingConfirmation from './components/BookingConfirmation';
import Nav from './components/Nav';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <>
    <Nav />
    <Router>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/booking' element={<Booking />} />
        <Route path='/booking-confirmation' element={<BookingConfirmation />} />
      </Routes>
    </Router>
    <Footer />
    </>
  );
}
