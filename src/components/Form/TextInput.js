import styles from './styles/TextInputStyle'

function TextInput (props) {
  const { label, onChangeText } = props

  const handleChange = (event) => {
    onChangeText(event.target.name, event.target.value)
  }

  return (
    <label style={styles.label}>
      {label} :
      <input
        {...props}
        onChange={handleChange}
        style={styles.input}
      />
    </label>
  )
}

export default TextInput
