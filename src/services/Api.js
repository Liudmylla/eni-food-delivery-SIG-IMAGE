import axios from 'axios'

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  },
  timeout: 5000
})

const register = async (userData) => {
  try {
    const response = await api.post('/auth/local/register', userData)
    return response.data
  } catch (error) {
    console.error(error)
  }
}

const getRestaurants = async () => {
  try {
    const response = await api.get('/restaurants')
    return response.data
  } catch (error) {
    console.error(error)
  }
}

export {
  register,
  getRestaurants
}
