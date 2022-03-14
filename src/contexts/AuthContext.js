import { createContext, useContext, useEffect, useReducer } from 'react'
import { login, register } from '../services/Api'

const AuthContext = createContext()

const actionTypes = {
  REGISTER: 'REGISTER',
  LOGIN: 'LOGIN',
  LOGOUT: 'LOGOUT',
  LOADING: 'LOADING',
  ERROR: 'ERROR'
}

const initialState = {
  token: null,
  user: null,
  loading: false,
  error: null
}

const AuthReducer = (state, action) => {
  // action = { type, data, error }
  switch (action.type) {
    case actionTypes.LOGIN:
    case actionTypes.REGISTER:
      return {
        ...initialState, user: action.data.user, token: action.data.token
      }
    case actionTypes.LOGOUT:
      return initialState
    case actionTypes.LOADING:
      return {
        ...initialState, loading: true
      }
    case actionTypes.ERROR:
      return {
        ...initialState, error: action.error
      }
    default:
      throw new Error(`Unhandled action type : ${action.type}`)
  }
}

const AuthProvider = ({ children }) => {
  // Récupération de l'état persisté
  const persistedState = window.localStorage.getItem('AUTH')
  // Si l'état existe, on parse et on initialise notre état global avec son contenu,
  // sinon on utilise l'état initial
  const _initialState = persistedState ? JSON.parse(persistedState) : initialState
  const [state, dispatch] = useReducer(AuthReducer, _initialState)

  useEffect(() => {
    window.localStorage.setItem('AUTH', JSON.stringify(state))
  }, [state])

  return <AuthContext.Provider value={{ state, dispatch }}>{children}</AuthContext.Provider>
}

const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) throw new Error('useAuth must be used inside a AuthProvider')
  return context
}

const registerUser = async (userInfos, dispatch) => {
  try {
    const data = await register(userInfos)
    if (data.user && data.jwt) {
      dispatch({
        type: actionTypes.REGISTER,
        data: { user: data.user, token: data.jwt }
      })
    }
  } catch (error) {
    dispatch({
      type: actionTypes.ERROR,
      error: error
    })
  }
}

const loginUser = async (userInfos, dispatch) => {
  try {
    const data = await login(userInfos)
    if (data.user && data.jwt) {
      dispatch({
        type: actionTypes.LOGIN,
        data: { user: data.user, token: data.jwt }
      })
    }
  } catch (error) {
    dispatch({
      type: actionTypes.ERROR,
      error: error
    })
  }
}

const logoutUser = (dispatch) => {
  dispatch({
    type: actionTypes.LOGOUT
  })
}

export {
  actionTypes,
  AuthProvider,
  useAuth,
  registerUser,
  loginUser,
  logoutUser
}
