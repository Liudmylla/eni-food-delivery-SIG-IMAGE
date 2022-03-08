import RestaurantListItem from './RestaurantListItem'

import styles from './styles/RestaurantListStyle'

function RestaurantList ({ restaurants }) {
  return (
    <div style={styles.list}>
      {
        restaurants.map(restaurant => (
          <RestaurantListItem key={restaurant._id} restaurant={restaurant} />
        ))
      }
    </div>
  )
}

export default RestaurantList
