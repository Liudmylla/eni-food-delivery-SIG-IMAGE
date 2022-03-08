import { useState } from 'react'
import TextInput from './TextInput'

import '../../styles/FormStyle.css'

function RegisterForm () {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: ''
  })

  const handleTextChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value
    })
    console.log(formData)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    window.alert('Elements envoyés : ')
  }

  return (
    <form className='form-container' onSubmit={handleSubmit}>
      <TextInput value={formData.firstName} name='firstName' onChangeText={handleTextChange} />
      <TextInput value={formData.lastName} name='lastName' onChangeText={handleTextChange} />
      <input type='submit' value='Envoyer' />
    </form>
  )
}

export default RegisterForm
