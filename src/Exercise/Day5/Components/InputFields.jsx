import React from 'react'

const InputFields = (props) => {
  return (
    <div>
      <input type='text' placeholder={props.pr}  style={{display: 'flex', justifyContent: 'center', gap : 10}}></input>
    </div>
  )
}

export default InputFields
