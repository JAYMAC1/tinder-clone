import React from 'react'

// images
import whiteLogo from '../images/white-tinder-logo.png'
import colourLogo from '../images/colour-tinder-logo.png'

const Navbar = ({ minimal, authToken, setShowModal, showModal }) => {
  return (
    <nav>
      <div className='logo-container'>
        <img
          className='logo'
          src={minimal ? colourLogo : whiteLogo}
          alt='logo'
        />
      </div>
      {!authToken && !minimal && (
        <button
          onClick={() => setShowModal(true)}
          className='nav-button'
          disabled={showModal}
          isSignUp={false}>
          Log in
        </button>
      )}
    </nav>
  )
}

export default Navbar
