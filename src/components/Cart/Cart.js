import Draggable from 'react-draggable'
import { useCart } from '../../contexts/CartContext'
import CartLineItem from './CartLineItem'
import { cartStyles } from './styles/CartStyle'

function Cart () {
  const { state: { cart, total } } = useCart()
  const categories = [...new Set(cart.map(cartItem => cartItem.plat.category))]

  return (
    <Draggable>
      <div style={cartStyles.container}>
        <h1>Ma commande</h1>
        {
          categories.map((c, i) => (
            <div key={i}>
              <h3>{c.toUpperCase()}</h3>
              <>
                {
                  cart.filter(cartItem => cartItem.plat.category === c).map(cartItem => (
                    <CartLineItem key={cartItem.plat._id} item={cartItem} />
                  ))
                }
              </>
            </div>
          ))
        }
        <h4>Total : {total.toFixed(2)}€</h4>
        <button>Passer la commande</button>
      </div>
    </Draggable>
  )
}

export default Cart
