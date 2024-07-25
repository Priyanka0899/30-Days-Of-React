import React from 'react'
import '../CSS/style.css'
import html from '../images/html.jpg'

const ImageComp = (props) => {
  return (
    <div>
        <img src={props.img} alt='HTML Image' style={{height: 250,width: 300}}/>
    </div>
  )
}

export default ImageComp
