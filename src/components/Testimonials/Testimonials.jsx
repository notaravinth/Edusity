import React, { useRef } from 'react'
import './testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'


const Testimonials = () => {

    const slider = useRef()
    let tx = 0;
  
    const slideForward = () => {
        if(tx > -50){
            tx -= 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }
    const slideBackward = () => {
        if(tx < 0){
            tx += 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }
  
    return (
    <div className='testimonials'>
      <img src={next_icon} alt="" className='next-btn' onClick={slideForward}/>
      <img src={back_icon} alt="" className='back-btn' onClick={slideBackward}/>
      <div className="slider">
        <ul ref={slider}>
        <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_1} alt="" />
                        <div>
                            <h3>John Doe</h3>
                            <span>Edusity, USA</span>
                        </div>
                    </div>
                    <p>Attending Edusity was the best decision of my life. The courses are incredibly well-structured, and the professors are not just knowledgeable but also deeply invested in each student’s success. The campus culture promotes collaboration, innovation, and personal growth. I left with not only a degree but also the confidence and skills to excel in my career</p>
                </div>
            </li> <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_2} alt="" />
                        <div>
                            <h3>Jane Doe</h3>
                            <span>Edusity, USA</span>
                        </div>
                    </div>
                    <p>The university provided me with countless opportunities to push my boundaries. From engaging in groundbreaking research to participating in international student exchange programs, my time here has been nothing short of extraordinary. The blend of academic excellence and community spirit has made my experience truly unforgettable.</p>
                </div>
            </li> <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_3} alt="" />
                        <div>
                            <h3>Johnathon</h3>
                            <span>Edusity, USA</span>
                        </div>
                    </div>
                    <p>What sets [University Name] apart is the emphasis on real-world application. Every lecture felt connected to industry trends, and the internships I secured through the university's career services were instrumental in landing my dream job. The guidance I received here shaped not just my career but also my perspective on lifelong learning.</p>
                </div>
            </li> <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_4} alt="" />
                        <div>
                            <h3>Janey</h3>
                            <span>Edusity, USA</span>
                        </div>
                    </div>
                    <p>Being a part of Edusity felt like joining a family that wants to see you succeed. The diverse community and welcoming environment made me feel at home from day one. With top-tier facilities and exceptional extracurricular programs, I grew both as a student and as a leader. This experience has been life-changing.</p>
                </div>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Testimonials
