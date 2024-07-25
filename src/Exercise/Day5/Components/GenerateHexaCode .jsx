import React from 'react'
import HexaColor from '../Components/HexaColor'

const GenerateHexaCode = () => {

    const hexaColor = () => {
        let str = '0123456789abcdef'
        let color = ''
        for (let i = 0; i < 6; i++) {
          let index = Math.floor(Math.random() * str.length)
          color += str[index]
        }
        return '#' + color
      }

  return (
    <div>
        <HexaColor clr={hexaColor()} />
        <HexaColor clr={hexaColor()} />
        <HexaColor clr={hexaColor()} />
        <HexaColor clr={hexaColor()} />
        <HexaColor clr={hexaColor()} />
    </div>
  )
}

export default GenerateHexaCode