import { useState } from 'react'
import TextInput from './TextInput'
import { register } from '../../services/Api'

import '../../styles/FormStyle.css'

function RegisterForm () {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  })
  const [apiResponse, setApiResponse] = useState()

  const handleTextChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const user = {
      username: formData.email,
      email: formData.email,
      password: formData.password
    }
    const data = await register(user)
    setApiResponse(data)
  }

  return (
    <form className='form-container' onSubmit={handleSubmit}>
      <pre>{JSON.stringify(apiResponse, null, 2)}</pre>
      <TextInput
        label='Prénom'
        value={formData.firstName}
        name='firstName'
        onChangeText={handleTextChange}
      />
      <TextInput
        label='Nom'
        value={formData.lastName}
        name='lastName'
        onChangeText={handleTextChange}
      />
      <TextInput
        label='Email'
        value={formData.email}
        name='email'
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

export default RegisterForm
