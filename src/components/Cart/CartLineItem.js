import { removeFromCart, useCart } from '../../contexts/CartContext'
import { cartItemStyles } from './styles/CartStyle'

function CartLineItem ({ item }) {
  const { dispatch } = useCart()
  return (
    <div style={cartItemStyles.container}>
      <img
        style={cartItemStyles.image}
        src={item.photos[0] ? `${process.env.REACT_APP_API_URL}${item.photos[0].url}` : 'https://via.placeholder.com/150'}
      />
      <h4>{item.nom}</h4>
      <span>{item.price.toFixed(2)}€</span>
      <button onClick={() => removeFromCart(item, dispatch)}>🗑️</button>
    </div>
  )
}

export default CartLineItem
