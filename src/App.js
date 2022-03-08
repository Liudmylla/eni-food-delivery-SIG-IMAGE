import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Event from './components/Event'
import ClockFunction from './components/ClockFunction'
import List from './components/List/List'
import RegisterForm from './components/Form/RegisterForm'

function App () {
  const [data, setData] = useState([
    { title: 'Test 1', description: 'Super description 1' },
    { title: 'Test 2', description: 'Super description 2' },
    { title: 'Test 3', description: 'Super description 3' },
    { title: 'Test 4', description: 'Super description 4' }
  ])
  return (
    <div className='App'>
      <Header />
      <Event />
      <ClockFunction interval={1000} />
      <RegisterForm />
      <List data={data} />
    </div>
  )
}

export default App
