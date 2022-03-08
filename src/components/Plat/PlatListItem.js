import styles from './styles/PlatListItemStyle'

function PlatListItem ({ plat }) {
  return (
    <div style={styles.card}>
      <img style={styles.image} src={plat.photos[0] ? `${process.env.REACT_APP_API_URL}${plat.photos[0].url}` : 'https://via.placeholder.com/150'} />
      <h2>{plat.nom}</h2>
      <p>{plat.description}</p>
      <h3>{plat.price.toFixed(2)}€</h3>
    </div>
  )
}

export default PlatListItem
