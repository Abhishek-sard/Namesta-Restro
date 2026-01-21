import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';


import HeroSlider from './pages/Home/HeroSlider.jsx';
import Product from './pages/Home/Product.jsx';
import Symbol from './pages/Home/Symbol.jsx';
import Taste from './pages/Home/Taste.jsx';
import Local from './pages/Home/Local.jsx';
import BannerSection from './pages/Home/BannerSection.jsx';
import SustainabilitySection from './pages/Home/SustainabilitySection.jsx';
import Join from './pages/Home/Join.jsx';
import Hungry from './pages/Home/Hungry.jsx';
import NepalFlagDivider from './pages/Home/NepalFlagDivider.jsx';
import Review from './pages/Home/Review.jsx';
import Event from './pages/Home/Event.jsx';


function HomePage() {
  return (
    <>
      <HeroSlider />
      <Product />
      <Symbol />
      <Taste />
      <Local />
      <BannerSection />
      <SustainabilitySection />
      <Join />
      <Event />
      <Hungry />
      <NepalFlagDivider />
      <Review />
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
