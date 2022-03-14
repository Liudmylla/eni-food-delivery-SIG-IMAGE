import React from 'react'

const CountContext = React.createContext()

const actionTypes = {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT'
}

const initialState = {
  counter: 0
}

const CountReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT:
      return {
        counter: state.counter + 1
      }
    case actionTypes.DECREMENT:
      return {
        counter: state.counter - 1
      }
    default:
      throw new Error(`Unhandled action type : ${action.type}`)
  }
}

const CountProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(CountReducer, initialState)
  return <CountContext.Provider value={{ state, dispatch }}>{children}</CountContext.Provider>
}

const useCount = () => {
  // context = { state, dispatch }
  const context = React.useContext(CountContext)
  if (!context) throw new Error('useCount must be used inside a CountProvider')
  return context
}

export {
  useCount,
  CountProvider,
  actionTypes
}
