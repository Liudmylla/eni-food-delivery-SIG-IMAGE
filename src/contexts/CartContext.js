import { useContext, createContext, useReducer, useEffect } from 'react'

const CartContext = createContext()

const actionTypes = {
  ADD_TO_CART: 'ADD_TO_CART',
  REMOVE_FROM_CART: 'REMOVE_FROM_CART',
  RESET: 'RESET'
}

const initialState = {
  cart: [], // [{ plat, quantity }]
  total: 0
}

const CartReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      return {
        ...state,
        // On recherche si le cart contient déjà le plat
        cart: state.cart.some(cartItem => cartItem.plat._id === action.data._id)
          // On Itère pour mettre à jour la quantité
          ? state.cart.map((cartItem) => {
              // On retrouve le plat à modifier
              // if (cartItem._id === action.data._id) {
              //   // On retourne le plat mit à jour dans le nouveau tableau
              //   return { ...cartItem, quantity: cartItem.quantity + 1 }
              // } else {
              //   return cartItem
              // }
              return cartItem.plat._id === action.data._id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
            })
          : state.cart.concat([{ plat: action.data, quantity: 1 }]),
        total: state.cart.length > 0
          ? state.cart.reduce((prev, cur) => prev + (cur.plat.price * cur.quantity), action.data.price)
          : action.data.price
      }
    case actionTypes.REMOVE_FROM_CART:
      return {
        cart: state.cart.map(cartItem => {
          return cartItem.plat._id === action.data._id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        }).filter(cartItem => cartItem.quantity > 0),
        total: state.cart.length > 0
          ? state.cart.reduce((prev, cur) => prev + (cur.plat.price * cur.quantity), -action.data.price)
          : action.data.price
      }
    case actionTypes.RESET:
      return initialState
    default:
      throw new Error(`Unhandled action type : ${action.type}`)
  }
}

const CartProvider = ({ children }) => {
  const persistedState = window.localStorage.getItem('CART')
  const _initialState = persistedState ? JSON.parse(persistedState) : initialState
  const [state, dispatch] = useReducer(CartReducer, _initialState)

  useEffect(() => {
    window.localStorage.setItem('CART', JSON.stringify(state))
  }, [state])

  return <CartContext.Provider value={{ state, dispatch }}>{children}</CartContext.Provider>
}

const useCart = () => {
  const context = useContext(CartContext)
  if (!context) throw new Error('useCart must be used inside a CartProvider')
  return context
}

const addToCart = (item, dispatch) => {
  dispatch({
    type: actionTypes.ADD_TO_CART,
    data: item
  })
}

const removeFromCart = (item, dispatch) => {
  dispatch({
    type: actionTypes.REMOVE_FROM_CART,
    data: item
  })
}

export {
  actionTypes,
  CartProvider,
  useCart,
  addToCart,
  removeFromCart
}
