import React from 'react'
import ImageComp from '../Day5/Components/ImageComp'
import one from '../Day5/images/html.jpg'
import two from '../Day5/images/css.jpg'
import three from '../Day5/images/js.jpg'
import four from '../Day5/images/react.jpg'
import Subscribe from '../Day5/Components/Subscribe'
import HexaColor from './Components/HexaColor'
import GenerateHexaCode from './Components/GenerateHexaCode '
import '../Day5/CSS/style.css'

const Day5 = () => {
  return (
    <div>
      {/* <div className='img-container'>
      <h3>Front End Technologies</h3>
        <div className='imgs'>
        <ImageComp img={one}/>
        <ImageComp img={two}/>
        <ImageComp img={three}/>
        <ImageComp img={four}/>
        </div>
      </div>

    <Subscribe/> */}
        <div className='hexa-container'>
          <GenerateHexaCode />
        </div>

    </div>
  )
}

export default Day5
