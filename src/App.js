import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'
import { AuthProvider } from './contexts/AuthContext'
import Navigator from './navigation/Navigator'

function App () {
  return (
    <div className='App'>
      <BrowserRouter>
        <AuthProvider>
          <Header />
          <Navigator />
        </AuthProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
