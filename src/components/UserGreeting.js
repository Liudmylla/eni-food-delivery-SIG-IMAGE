function UserGreeting ({ isLoggedIn }) {
  return (
    <h1>{isLoggedIn ? 'Connecté !' : 'Non connnecté'}</h1>
  )
}

export default UserGreeting
