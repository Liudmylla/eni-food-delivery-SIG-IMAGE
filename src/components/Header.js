import React, { useState } from 'react'
import AuthButton from './AuthButton'

import UserGreeting from './UserGreeting'

function Header () {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const handleClick = () => {
    setIsLoggedIn(!isLoggedIn)
  }

  return (
    <div>
      <UserGreeting isLoggedIn={isLoggedIn} />
      <AuthButton isLoggedIn={isLoggedIn} onClick={handleClick} />
    </div>
  )
}

export default Header
