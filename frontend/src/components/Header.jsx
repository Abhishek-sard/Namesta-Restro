import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import CareerNavbar from './CareerNavbar';

const Header = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const isCareerExperience = location.pathname.startsWith('/community/careers') || searchParams.get('experience') === 'career';

    return isCareerExperience ? <CareerNavbar /> : <Navbar />;
};

export default Header;
