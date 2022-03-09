// react related packages
import React from 'react'

// Custom components and pages
import Navbar from '../components/Navbar'

const Home = () => {
  const authToken = false
  const handleClick = () => {
    console.log('clicked')
  }
  return (
    <>
      <Navbar minimal={false} authToken={authToken} />
      <div className='home'>
        <h1>Swipe Right&#174;</h1>
        <button onClick={handleClick} className='primary-button'>
          {authToken ? 'Signout' : 'Create Account'}
        </button>
      </div>
    </>
  )
}

export default Home
