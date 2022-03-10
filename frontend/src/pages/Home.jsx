// react related packages
import React, { useState } from 'react'

// Custom components and pages
import Navbar from '../components/Navbar'

const Home = () => {
  const [showModal, setShowModal] = useState(false)
  const authToken = false
  const handleClick = () => {
    console.log('clicked')
    setShowModal(true)
  }
  return (
    <div className='overlay'>
      <Navbar minimal={false} authToken={authToken} />
      <div className='home'>
        <h1>Swipe Right&#174;</h1>
        <button onClick={handleClick} className='primary-button'>
          {authToken ? 'Signout' : 'Create Account'}
        </button>
      </div>
    </div>
  )
}

export default Home
