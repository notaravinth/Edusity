import React from 'react'
import './campus.css'
import gallery_1 from '../../assets/gallery_1.png'
import gallery_2 from '../../assets/gallery_2.png'
import gallery_3 from '../../assets/gallery_3.png'
import gallery_4 from '../../assets/gallery_4.png'

const Campus = () => {
  return (
    <div className='campus'>
        <div className="gallery">
            <img src={gallery_1} alt="" />
        </div>  
        <div className="gallery">
            <img src={gallery_2} alt="" />
        </div>     
        <div className="gallery">
            <img src={gallery_3} alt="" />
        </div> 
        <div className="gallery">
            <img src={gallery_4} alt="" />
        </div> 
    </div>
  )
}

export default Campus
