import React from 'react'
import InputFields from './InputFields'

const Subscribe = () => {
  return (
    <div className='subscribe' style={{backgroundColor: 'powderblue'}}>
        <h2 style={{textAlign: 'center'}}>SUBSCRIBE</h2>
        <p style={{textAlign: 'center'}}>Sign Up with your email address to receive news and updates.</p>
       <div  style={{display: 'flex', justifyContent: 'center', gap : 10, alignItems: 'center'}}>
        <InputFields pr='First Name'/>
        <InputFields pr='Last Name'/>
        <InputFields pr='Email'/>
        </div>
        <div style={{textAlign: 'center'}}>
        <button style={{backgroundColor: 'red', color: 'white', borderRadius: '5px', padding : '5px', margin: '20px', width: '200px', cursor: 'pointer' }}  >Subscribe</button>
        </div>

    </div>
  )
}

export default Subscribe
