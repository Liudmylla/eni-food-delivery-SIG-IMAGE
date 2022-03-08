import { useEffect, useState } from 'react'

const ClockFunction = ({ interval }) => {
  const [date, setDate] = useState(new Date())

  // Equivalent au componentDidMount()
  useEffect(() => {
    const timer = setInterval(tick, interval)
    // La fonction retournée est l'équivalent de componentWillUnmount()
    return () => {
      clearInterval(timer)
    }
  }, [])

  const tick = () => {
    setDate(new Date())
  }

  return (
    <h1>Il est : {date && date.toLocaleString()}</h1>
  )
}

export default ClockFunction
