import { removeFromCart, useCart } from '../../contexts/CartContext'
import { cartItemStyles } from './styles/CartStyle'

function CartLineItem ({ item }) {
  const { dispatch } = useCart()
  const { plat, quantity } = item
  return (
    <div style={cartItemStyles.container}>
      <img
        style={cartItemStyles.image}
        src={plat.photos[0] ? `${process.env.REACT_APP_API_URL}${plat.photos[0].url}` : 'https://via.placeholder.com/150'}
      />
      <h4>{plat.nom}</h4>
      <span>{plat.price.toFixed(2)}€</span>
      <span>{quantity}</span>
      <button onClick={() => removeFromCart(plat, dispatch)}>🗑️</button>
    </div>
  )
}

export default CartLineItem
