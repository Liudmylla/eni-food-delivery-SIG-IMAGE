import styles from './styles/RestaurantListItemStyle'
import { useNavigate } from 'react-router-dom'

function RestaurantListItem ({ restaurant }) {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/restaurant/${restaurant._id}`)
  }

  return (
    <div onClick={handleClick} style={styles.card}>
      <img style={styles.image} src={`${process.env.REACT_APP_API_URL}${restaurant.photos[0].url}`} />
      <h2>{restaurant.title}</h2>
      <p>{restaurant.description}</p>
    </div>
  )
}

export default RestaurantListItem
