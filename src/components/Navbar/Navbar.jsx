import React, {useEffect, useState} from 'react'
import './navbar.css'
import logo from '../../assets/logo.png'

const navbar = () => {

    const [sticky, setSticky] = useState(false);

    useEffect(()=>{
      window.addEventListener('scroll', () => {
        window.scrollY > 200 ? setSticky(true) : setSticky(false)})
    },[])

  return (
    <nav className={`container ${sticky? 'dark-nav' : ''}`}>
      <img src={logo} alt="" className='logo' />
      <ul>
        <li><link to='hero' smooth={true} offset={0} duration={500}>Home</link></li>
        <li><link to='program' smooth={true} offset={0} duration={500}>Program</link></li>
        <li><link to='about' smooth={true} offset={0} duration={500}>About Us</link></li>
        <li><link to='campus' smooth={true} offset={0} duration={500}>Campus</link></li>
        <li><link to='testimonials' smooth={true} offset={0} duration={500}>Testimonials</link></li>
        <li><link to='contact' smooth={true} offset={0} duration={500} className='btn'>Contact Us</link></li>
      </ul>
    </nav>
  )
}

export default navbar
