import React from 'react'

const Button = (props) => {
  return (
    <div>
      {/* <button>{props.hello}</button> */}
      <button>{props.hello}</button>
      <p>{props.type} </p>
    </div>
  )
}

export default Button
