import { useParams } from 'react-router-dom'

function Restaurant () {
  const { id } = useParams()

  return (
    <h1>ID : {id}</h1>
  )
}

export default Restaurant
