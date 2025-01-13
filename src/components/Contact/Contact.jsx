import React from 'react'
import './contact.css'
import message_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'

const Contact = () => {
  return (
    <div className='contact'>
      <div className="contact-col">
        <h3>Send us a message <img src={message_icon} alt="" /></h3>
        <p>Feel free to reach out to us through the contact form. your feedback is important to us as we strive to provide exceptional service to our community.</p>
        <ul>
            <li><img src={mail_icon} alt="" className=''/>Contact@aravinth.dev</li>
            <li><img src={phone_icon} alt="" />+91 1234567890</li>
            <li><img src={location_icon} alt="" />somewhere on planet earth</li>
        </ul>
      </div>
      <div className="contact-col">
        <form>
          <label>Your Name</label>
          <input type="text" name="name" placeholder="Enter your name" required/>
          <label>Phone Number</label>
          <input type="tel" name="phone" placeholder="Enter your mobile number" required/>
          <label>Your Name</label>
          <textarea name="message" rows="6" placeholder='Enter your message' required></textarea>
          <button type='submit' className='btn dark-btn'>submit now <img src={white_arrow} alt="" /></button>
        </form>
        <span></span>
      </div>
    </div>
  )
}

export default Contact
