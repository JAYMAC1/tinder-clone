import React from 'react'

const AuthModal = ({ setShowModal }) => {
  const handleClick = () => {
    setShowModal(false)
  }

  const isSignUp = true

  return (
    <div className='auth-modal'>
      <div onClick={handleClick} className='close-icon'>
        X
      </div>
      <h2>{isSignUp ? 'CREATE ACCOUNT' : 'LOG IN'}</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque beatae
        perspiciatis qui voluptatem cumque. Quidem tempore atque illum hic
        excepturi, dicta laboriosam a cum nobis!
      </p>
      <form></form>
    </div>
  )
}

export default AuthModal
