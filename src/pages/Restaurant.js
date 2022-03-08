import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import PlatList from '../components/Plat/PlatList'
import Address from '../components/Restaurant/Address'
import { getRestaurantsById } from '../services/Api'

import styles from './styles/RestaurantStyle'

function Restaurant () {
  const [restaurant, setRestaurant] = useState()
  const { id } = useParams()

  useEffect(() => {
    const getData = async () => {
      const data = await getRestaurantsById(id)
      setRestaurant(data)
    }
    getData()
  }, [])

  if (!restaurant) {
    return <h1>Chargement...</h1>
  }

  return (
    <div style={styles.container}>
      <div style={styles.infos}>
        <div style={styles.left}>
          <img style={styles.image} src={`${process.env.REACT_APP_API_URL}${restaurant.photos[0].url}`} />
          <h1>{restaurant.title}</h1>
          <p>{restaurant.description}</p>
        </div>
        <div style={styles.right}>
          <Address address={restaurant.adresse} />
        </div>
      </div>
      <h2>Nos plats</h2>
      <PlatList plats={restaurant.plats} />
    </div>
  )
}

export default Restaurant
