import React from 'react'

const AuthModal = ({ setShowModal }) => {
  const handleClick = () => {
    setShowModal(false)
  }
  return (
    <div className='auth-modal'>
      <div onClick={handleClick} className='close-icon'>
        &#215;
      </div>
      Auth Modal
    </div>
  )
}

export default AuthModal
