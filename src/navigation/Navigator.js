import { Routes, Route } from 'react-router-dom'
import Auth from '../pages/Auth'
import Home from '../pages/Home'

function Navigator () {
  return (
    <Routes>
      <Route path='/auth' element={<Auth />} />
      <Route path='/' element={<Home />} />
    </Routes>
  )
}

export default Navigator
