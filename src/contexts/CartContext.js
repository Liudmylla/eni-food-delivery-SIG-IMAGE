import { useContext, createContext, useReducer, useEffect } from 'react'

const CartContext = createContext()

const actionTypes = {
  ADD_TO_CART: 'ADD_TO_CART',
  REMOVE_FROM_CART: 'REMOVE_FROM_CART',
  RESET: 'RESET'
}

const initialState = {
  cart: [],
  total: 0
}

const CartReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      return {
        ...state,
        cart: state.cart.concat([action.data]),
        total: state.cart.length > 0
          ? state.cart.reduce((prev, cur) => prev + cur.price, action.data.price)
          : action.data.price
      }
    case actionTypes.REMOVE_FROM_CART:
      return {
        cart: state.cart.filter(c => c._id !== action.data._id),
        total: state.cart.length > 0
          ? state.cart.reduce((prev, cur) => prev + cur.price, -action.data.price)
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
