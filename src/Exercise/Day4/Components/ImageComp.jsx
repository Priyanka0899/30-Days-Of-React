import React from 'react'
import html from '../images/html.jpg'
import css from '../images/css.jpg'
import js from '../images/js.jpg'
import react from '../images/react.jpg'


const ImageComp = () => {
  return (
    <div>
        <h1 style={{ textAlign: 'center' }}>Front End Technologies</h1>
        <img src={html} alt='HTML Logo' height="300px" width="350px" />
        <img src={css} alt='CSS Logo' height="300px" width="350px" />
        <img src={js} alt='JS Logo' height="300px" width="350px" />
        <img src={react} alt='React Logo' height="300px" width="350px" />
    </div>
  )
}

export default ImageComp
