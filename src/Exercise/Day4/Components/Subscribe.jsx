import React from 'react'
import Input from './Input'

const Subscribe = () => {
  return (
    <div style={{backgroundColor: 'powderblue'}}>
      <h1 style={{textAlign: 'center'}}>SUBSCRIBE</h1>
      <p style={{textAlign: 'center'}}>Sign Up with your email address to receive news and updates</p>

        <div style={{ display: 'flex', justifyContent: 'center', gap: 10, alignItems: 'center', margin: ''}}>
        <Input pr='First Name'/>
        <Input pr='Last Name'/>
        <Input pr='Email'/>

        </div>
        <div style={{textAlign: 'center'}}>
        <button style={{backgroundColor: 'red', color: 'white', borderRadius: '5px', padding : '5px', margin: '20px', width: '200px', cursor: 'pointer' }}  >Subscribe</button>
        </div>
    </div>
  )
}

export default Subscribe
