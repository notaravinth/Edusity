import React from 'react'
import './navbar.css'
import logo from '../../assets/logo.png'

const navbar = () => {
  return (
    <nav>
      <img src={logo} alt="" />
      <ul>
        <li>Home</li>
        <li>Program</li>
        <li>About Us</li>
        <li>Campus</li>
        <li>Testimonials</li>
        <li>Contact Us</li>
      </ul>
    </nav>
  )
}

export default navbar
