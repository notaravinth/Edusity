import React from 'react'
import Navbar from './components/navbar/navbar'
import Hero from './components/hero/hero'
import Programs from './components/programs/programs'
import  Title from './components/title/Title'
import About from './components/about/About'

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
      </div>
    </div>
  )
}

export default App
