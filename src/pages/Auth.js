import { useState } from 'react'
import LoginForm from '../components/Form/LoginForm'
import RegisterForm from '../components/Form/RegisterForm'
import { useAuth, logoutUser } from '../contexts/AuthContext'

function Auth () {
  const [isRegister, setIsRegister] = useState(false)
  const { state, dispatch } = useAuth()
  if (state.user && state.token) {
    return <button onClick={() => logoutUser(dispatch)}>LOGOUT</button>
  }
  return (
    <div>
      <h1>Authentification</h1>
      {
        isRegister
          ? <RegisterForm />
          : <LoginForm />
      }
      <a
        href='#'
        onClick={() => setIsRegister(!isRegister)}
      >
        {isRegister
          ? 'J\'ai déjà un compte'
          : 'Je n\'ai pas de compte'}
      </a>
    </div>
  )
}

export default Auth
