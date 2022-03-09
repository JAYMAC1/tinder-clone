import React from 'react'

// images
import whiteLogo from '../images/white-tinder-logo.png'
import colourLogo from '../images/colour-tinder-logo.png'

const Navbar = ({ minimal, authToken }) => {
  return (
    <nav>
      <div className='logo-container'>
        <img
          className='logo'
          src={minimal ? colourLogo : whiteLogo}
          alt='logo'
        />
      </div>
      {!authToken && !minimal && <button className='nav-button'>Log in</button>}
    </nav>
  )
}

export default Navbar
