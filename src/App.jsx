import React from 'react'
import Navbar from './components/navbar/navbar'
import Hero from './components/hero/hero'
import Programs from './components/programs/programs'
import  Title from './components/title/Title'
import About from './components/about/About'
import Campus from './components/campus/Campus'
import Testimonials from './components/Testimonials/Testimonials'

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
      </div>
    </div>
  )
}

export default App
