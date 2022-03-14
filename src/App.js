import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Cart from './components/Cart/Cart'
import Header from './components/Header/Header'
import { AuthProvider } from './contexts/AuthContext'
import { CartProvider } from './contexts/CartContext'
import Navigator from './navigation/Navigator'

function App () {
  return (
    <div className='App'>
      <BrowserRouter>
        <AuthProvider>
          <CartProvider>
            <Cart />
            <Header />
            <Navigator />
          </CartProvider>
        </AuthProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
