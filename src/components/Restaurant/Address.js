
import styles from './styles/AddressStyle'

function Address ({ address }) {
  return (
    address && (
      <div style={styles.address}>
        <h2>Adresse</h2>
        <span>{address.adresse}</span>
        <span>{`${address.code_postal} - ${address.ville}`}</span>
        <span><a href={`tel:${address.phone}`}>{address.phone}</a></span>
      </div>
    )
  )
}

export default Address
