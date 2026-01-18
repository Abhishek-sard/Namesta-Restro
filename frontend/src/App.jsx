import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';


import HeroSlider from './pages/Home/HeroSlider.jsx';


function HomePage(){
  return(
    <>
    <HeroSlider/>
    </>
  )
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
         
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
