import { useEffect, useState } from 'react'
import RestaurantList from '../components/Restaurant/RestaurantList'
import { getRestaurants } from '../services/Api'

function Restaurants () {
  const [restaurants, setRestaurants] = useState([])

  useEffect(() => {
    const getData = async () => {
      const data = await getRestaurants()
      setRestaurants(data)
    }
    getData()
  }, [])

  return (
    <div>
      <RestaurantList restaurants={restaurants} />
    </div>
  )
}

export default Restaurants
