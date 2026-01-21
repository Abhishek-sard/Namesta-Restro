import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import CareerNavbar from './CareerNavbar';

const Header = () => {
    const location = useLocation();
    const isCareerPage = location.pathname.startsWith('/community/careers');

    return isCareerPage ? <CareerNavbar /> : <Navbar />;
};

export default Header;
