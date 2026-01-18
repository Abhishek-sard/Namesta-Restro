import { useState } from 'react'
import Navbar from './Navbar'
import HeroSlider from './HeroSlider'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <HeroSlider />
    </div>
  )
}

export default App
