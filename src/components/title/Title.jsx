import React from 'react'
import './title.css'

const Title = ({subTitle, title}) => {
  return (
    <div>
      <div className="title">
        <p>{subTitle}</p>
        <h2>{title}</h2>
      </div>
    </div>
  )
}

export default Title
