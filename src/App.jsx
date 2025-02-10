import React from 'react'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import Programs from './components/programs/Programs'
import  Title from './components/title/Title'
import About from './components/about/About'
import Campus from './components/campus/Campus'
import Testimonials from './components/Testimonials/Testimonials'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar/> 
      <Hero/>
      <Title subTitle="Our Programs" title="What We Offer"/>
      <div className="container">
      <Programs/>
      <About/>
      <Title subTitle="Gallery" title="Campus Photos"/>
      <Campus/>
      <Title subTitle="Testimonials" title="What students say"/>
      <Testimonials/>
      <Title subTitle="Contact Us" title="Get in Touch"/>
      <Contact/>
      <Footer/>
      </div>
    </div>
  )
}

export default App
