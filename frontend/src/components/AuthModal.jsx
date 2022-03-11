import React, { useState } from 'react'

const AuthModal = ({ setShowModal }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState(null)
  const handleClick = () => {
    setShowModal(false)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
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
      <form onSubmit={handleSubmit}>
        <input
          type='email'
          id='email'
          name='email'
          onChange={(e) => setEmail(e.targert.value)}
          placeholder='Email'
          required={true}
          value={email}
        />
        <input
          type='password'
          id='password'
          name='password'
          onChange={(e) => setPassword(e.targert.value)}
          placeholder='Password'
          required={true}
          value={password}
        />
        <input
          type='password'
          id='ConfirmPassword'
          name='ConfirmPassword'
          onChange={(e) => setConfirmPassword(e.targert.value)}
          placeholder='ConfirmPassword'
          required={true}
          value={confirmPassword}
        />
        <input className='secondary-button' type='submit' value='Submit' />
        <p>{error}</p>
      </form>
    </div>
  )
}

export default AuthModal
