import React, { useState } from 'react'
import NavMenu from '../../navigation/NavMenu'
import styles from './styles/HeaderStyle'
import AuthButton from '../AuthButton'

import UserGreeting from '../UserGreeting'

function Header () {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const handleClick = () => {
    setIsLoggedIn(!isLoggedIn)
  }

  return (
    <div style={styles.container}>
      <NavMenu />
      {/* <UserGreeting isLoggedIn={isLoggedIn} />
      <AuthButton isLoggedIn={isLoggedIn} onClick={handleClick} /> */}
    </div>
  )
}

export default Header
