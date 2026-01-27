import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header.jsx';
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
import LocalMatters from './pages/community/LocalMatters.jsx';
import Careers from './pages/community/Careers.jsx';
import Sustainability from './pages/community/Sustainability.jsx';
import Menu from './pages/Food/Menu.jsx';
import Catering from './pages/Food/Catering.jsx';
import GiftCards from './pages/Food/GiftCards.jsx';
import FindRestaurant from './pages/Res/FindRestaurant.jsx';
import AboutUs from './pages/Res/AboutPage/AboutUs.jsx';
import GroupBookings from './pages/Res/GroupBookings.jsx';
import Blogs from './pages/Res/Blogs.jsx';
import BlogDetail from './pages/Res/BlogDetail.jsx';

import AdminDashboard from './pages/Admin/AdminDashboard.jsx';


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

function AppContent() {
  const location = useLocation();
  const isAdminPath = location.pathname.startsWith('/admin');

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Community Routes */}
          <Route path="/community/local-matters" element={<LocalMatters />} />
          <Route path="/community/careers" element={<Careers />} />
          <Route path="/community/sustainability" element={<Sustainability />} />

          {/* Food Routes */}
          <Route path="/menu" element={<Menu />} />
          <Route path="/food/catering" element={<Catering />} />
          <Route path="/food/gift-cards" element={<GiftCards />} />

          {/* Restaurant Routes */}
          <Route path="/restaurants/find" element={<FindRestaurant />} />
          <Route path="/restaurants/bookings" element={<GroupBookings />} />
          <Route path="/restaurants/about" element={<AboutUs />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/:id" element={<BlogDetail />} />

          <Route element={<ProtectedRoute />}>
            <Route path="/profile" element={<div className="pt-40 text-center text-4xl font-bold bg-[#fdfaf5] min-h-screen">User Profile Setting</div>} />
          </Route>

          <Route element={<ProtectedRoute adminOnly={true} />}>
            <Route path="/admin" element={<AdminDashboard />} />
          </Route>

        </Routes>
      </main>
      {!isAdminPath && <Footer />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  )
}

export default App
