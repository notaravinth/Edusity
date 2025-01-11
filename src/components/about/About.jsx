import React from 'react'
import './about.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = () => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_img} alt="" className='about-img' />
        <img src={play_icon} alt="" className='play-icon' />
      </div>
      <div className="about-right">
        <h3>About University</h3>
        <h2>Nurturing Tomorrow's Leaders Today</h2>
        <p>we stands as a beacon of academic excellence, innovation, and inclusivity. Nestled in the heart of chicago, our institution is dedicated to shaping the leaders of tomorrow by fostering a culture of intellectual curiosity and hands-on learning. Since our establishment in 2002, we have empowered countless students to achieve their academic and professional aspirations, offering a wide array of programs that cater to diverse interests and industries. Our faculty comprises world-class educators, researchers, and industry experts who are deeply committed to nurturing talent and encouraging groundbreaking discoveries.</p>
        <p>we believe that education extends beyond the classroom. Our vibrant campus life offers students the chance to engage in extracurricular activities, cultural events, and community service, creating a holistic educational experience. State-of-the-art facilities, cutting-edge technology, and extensive libraries ensure that students have access to the best resources available. From thriving student clubs to a diverse, inclusive community, we provide a supportive environment where everyone can thrive and contribute to meaningful societal change.</p>      
        </div>
    </div>
  )
}

export default About
