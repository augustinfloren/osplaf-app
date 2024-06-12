import './App.scss'
import React, { useEffect, useState } from 'react'
import Header from './components/Header/Header'
import Hero from './components/Sections/Hero/Hero'
import LeJeu from './components/Sections/LeJeu/LeJeu'
import Regles from './components/Sections/Regles/Regles'
import Contact from './components/Sections/Contact/Contact'
import Footer from './components/Footer/Footer'


export default function App() {
  return (
    <div className='container'> 
      <Header />
      <Hero />
      <LeJeu />
      <Regles />
      <Contact />
      <Footer />
    </div>
  )
}



