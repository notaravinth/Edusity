import React from 'react'
import './contact.css'
import message_icon from '../../assets/msg-icon.png'

const Contact = () => {
  return (
    <div className='contact'>
      <div className="contact-col">
        <h3>Send us a message <img src={message_icon} alt="" /></h3>
        <p>Feel free to reach out to us through the contact form. your feedback is important to us as we strive to provide exceptional service to our community.</p>
        <ul>
            <li>Contact@aravinth.dev</li>
            <li>+91 1234567890</li>
            <li>somewhere on planet earth</li>
        </ul>
      </div>
    </div>
  )
}

export default Contact
