function AuthButton ({ isLoggedIn, onClick }) {
  return (
    <button onClick={onClick}>{isLoggedIn ? 'Se déconnecter' : 'Se connecter'}</button>
  )
}

export default AuthButton
