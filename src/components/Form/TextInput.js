function TextInput ({ name, value, onChangeText }) {
  const handleChange = (event) => {
    onChangeText(event.target.name, event.target.value)
  }

  return (
    <label>
      Nom :
      <input type='text' name={name} onChange={handleChange} value={value} />
    </label>
  )
}

export default TextInput
