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
import Login from './pages/Auth/Login.jsx';
import Register from './pages/Auth/Register.jsx';
import ProtectedRoute from './components/Protected/ProtectedRoute.jsx';


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
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            <Route element={<ProtectedRoute />}>
              <Route path="/profile" element={<div className="pt-40 text-center text-4xl font-bold bg-[#fdfaf5] min-h-screen">User Profile Setting</div>} />
            </Route>

            <Route element={<ProtectedRoute adminOnly={true} />}>
              <Route path="/admin" element={<div className="pt-40 text-center text-4xl font-bold text-red-600 bg-[#fdfaf5] min-h-screen">Admin Control Center</div>} />
            </Route>

          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
