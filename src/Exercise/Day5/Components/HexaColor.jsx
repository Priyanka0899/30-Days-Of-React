import React from 'react'

const HexaColor = (props) => {
  return (
      <div style={{backgroundColor: props.clr, height: '50px', textAlign: 'center'}}>
      <p style={{paddingTop: '16px'}}> {props.clr}</p>
      </div>
  )
}

export default HexaColor
