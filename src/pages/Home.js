import { useCount, actionTypes, CountProvider } from '../contexts/CountContext'

function CounterView () {
  const { state } = useCount()

  return (
    <h1>Valeur du compteur : {state.counter}</h1>
  )
}

function CounterActions () {
  const { dispatch } = useCount()

  const handleMinus = () => {
    dispatch({
      type: actionTypes.DECREMENT
    })
  }

  const handlePlus = () => {
    dispatch({
      type: actionTypes.INCREMENT
    })
  }

  return (
    <div>
      <button onClick={handleMinus}>-</button>
      <button onClick={handlePlus}>+</button>
    </div>
  )
}

function Home () {
  return (
    <>
      <h1>HOME</h1>
      <CountProvider>
        <CounterView />
        <CounterActions />
      </CountProvider>
    </>
  )
}

export default Home
