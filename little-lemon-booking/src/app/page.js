'use client'
import React from 'react';
import Nav from './components/Nav.js';
import Hero from './components/Hero.js';
import Specials from './components/Specials.js';
import Testimonials from './components/Testimonials.js';
import About from './components/About.js';
import Footer from './components/Footer.js';
import './globals.css';

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Specials />
        <Testimonials />
        <About />
      </main>
      <Footer />
    </>
  );
}
