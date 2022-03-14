import { useState } from 'react'
import { loginUser, useAuth } from '../../contexts/AuthContext'
import TextInput from './TextInput'

import '../../styles/FormStyle.css'

function LoginForm () {
  const [formData, setFormData] = useState({
    identifier: '',
    password: ''
  })
  const { dispatch, state } = useAuth()

  const handleTextChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const user = {
      identifier: formData.identifier,
      password: formData.password
    }
    await loginUser(user, dispatch)
  }

  return (
    <form className='form-container' onSubmit={handleSubmit}>
      <pre>{JSON.stringify(state, null, 2)}</pre>
      <TextInput
        label='Email'
        value={formData.identifier}
        name='identifier'
        onChangeText={handleTextChange}
      />
      <TextInput
        type='password'
        label='Mot de passe'
        value={formData.password}
        name='password'
        onChangeText={handleTextChange}
      />
      <input type='submit' value='Envoyer' />
    </form>
  )
}

export default LoginForm
