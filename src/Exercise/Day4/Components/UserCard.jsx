import React from 'react'
import pic from '../images/Priyanka_circleimg.jpg'
import tick from '../images/tick.png'

const UserCard = () => {
  return (
    <div>
      <img src={pic} alt='profile pic' height={200} width={200} style={{margin: '20px'}}/>
      <h2>Priyanka Arora <span><img src={tick} alt='Verified' height={30} width={30}/> </span></h2>
      <p>Mern Developer, India</p>
      <h2>SKILLS</h2>

      <div style={{}}>
      <button className='btn' style={{backgroundColor: 'LightSeaGreen', margin: 10, padding: 2, color: 'white', borderRadius: 3}}>HTML</button>
      <button className='btn' style={{backgroundColor: 'LightSeaGreen', margin: 5, padding: 2, color: 'white', borderRadius: 3}}>CSS</button>
      <button className='btn' style={{backgroundColor: 'LightSeaGreen', margin: 5, padding: 2, color: 'white', borderRadius: 3}}>Sass</button>
      <button className='btn' style={{backgroundColor: 'LightSeaGreen', margin: 5, padding: 2, color: 'white', borderRadius: 3}}>JS</button>
      <button className='btn' style={{backgroundColor: 'LightSeaGreen', margin: 5, padding: 2, color: 'white', borderRadius: 3}}>React</button>
      <button className='btn' style={{backgroundColor: 'LightSeaGreen', margin: 5, padding: 2, color: 'white', borderRadius: 3}}>Redux</button>
      <button className='btn' style={{backgroundColor: 'LightSeaGreen', margin: 5, padding: 2, color: 'white', borderRadius: 3}}>Node</button>
      <button className='btn' style={{backgroundColor: 'LightSeaGreen', margin: 5, padding: 2, color: 'white', borderRadius: 3}}>MongoDB</button>
      <button className='btn' style={{backgroundColor: 'LightSeaGreen', margin: 5, padding: 2, color: 'white', borderRadius: 3}}>Python</button>
      <button className='btn' style={{backgroundColor: 'LightSeaGreen', margin: 5, padding: 2, color: 'white', borderRadius: 3}}>Flask</button>
      <button className='btn' style={{backgroundColor: 'LightSeaGreen', margin: 5, padding: 2, color: 'white', borderRadius: 3}}>Django</button>
      <button className='btn' style={{backgroundColor: 'LightSeaGreen', margin: 5, padding: 2, color: 'white', borderRadius: 3}}>NumPy</button>
      <button className='btn' style={{backgroundColor: 'LightSeaGreen', margin: 5, padding: 2, color: 'white', borderRadius: 3}}>Pandas</button>
      <button className='btn' style={{backgroundColor: 'LightSeaGreen', margin: 5, padding: 2, color: 'white', borderRadius: 3}}>Data Analysis</button>
      <button className='btn' style={{backgroundColor: 'LightSeaGreen', margin: 5, padding: 2, color: 'white', borderRadius: 3}}>MYSQL</button>
      <button className='btn' style={{backgroundColor: 'LightSeaGreen', margin: 5, padding: 2, color: 'white', borderRadius: 3}}>GraphQL</button>
      <button className='btn' style={{backgroundColor: 'LightSeaGreen', margin: 5, padding: 2, color: 'white', borderRadius: 3}}>D3.js</button>
      <button className='btn' style={{backgroundColor: 'LightSeaGreen', margin: 5, padding: 2, color: 'white', borderRadius: 3}}>Gatsby</button>
      <button className='btn' style={{backgroundColor: 'LightSeaGreen', margin: 5, padding: 2, color: 'white', borderRadius: 3}}>Docker</button>
      <button className='btn' style={{backgroundColor: 'LightSeaGreen', margin: 5, padding: 2, color: 'white', borderRadius: 3}}>Heroku</button>
      <button className='btn' style={{backgroundColor: 'LightSeaGreen', margin: 5, padding: 2, color: 'white', borderRadius: 3}}>Git</button>
      </div>
        <br/>
        <br/>
      <footer>Joined on 24, July 2024</footer>

    
    </div>
  )
}

export default UserCard
