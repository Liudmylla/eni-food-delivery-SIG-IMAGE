import { Routes, Route } from 'react-router-dom'
import Auth from '../pages/Auth'
import Home from '../pages/Home'
import Restaurant from '../pages/Restaurant'
import Restaurants from '../pages/Restaurants'

function Navigator () {
  return (
    <Routes>
      <Route path='/restaurant/:id' element={<Restaurant />} />
      <Route path='/restaurants' element={<Restaurants />} />
      <Route path='/auth' element={<Auth />} />
      <Route path='/' element={<Home />} />
    </Routes>
  )
}

export default Navigator
