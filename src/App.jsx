import './App.scss'
import React, { useEffect, useState } from 'react'
import Header from './components/Header/Header'
import Hero from './components/Sections/Hero'
import LeJeu from './components/Sections/LeJeu'

export default function App() {
  return (
    <div className='container'> 
      <Header />
      <Hero />
      <LeJeu />
    </div>
  )
}



