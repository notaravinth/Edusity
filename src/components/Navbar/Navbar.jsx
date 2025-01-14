import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import './navbar.css';
import logo from '../../assets/logo.png';

const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 200);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar-container ${sticky ? 'dark-nav' : ''}`}>
      <img src={logo} alt="Logo" className="logo" />
      <ul>
        <li><Link to="hero" smooth={true} offset={0} duration={500}>Home</Link></li>
        <li><Link to="program" smooth={true} offset={0} duration={500}>Program</Link></li>
        <li><Link to="about" smooth={true} offset={0} duration={500}>About Us</Link></li>
        <li><Link to="campus" smooth={true} offset={0} duration={500}>Campus</Link></li>
        <li><Link to="testimonials" smooth={true} offset={0} duration={500}>Testimonials</Link></li>
        <li><Link to="contact" smooth={true} offset={0} duration={500} className="btn">Contact Us</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
