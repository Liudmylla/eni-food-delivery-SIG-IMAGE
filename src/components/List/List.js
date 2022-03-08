import ListItem from './ListItem'

function List ({ data }) {
  if (!data || data.length < 1) {
    return <h1>Pas de données</h1>
  }
  return (
    <div>
      {
        data.map((item, index) => <ListItem key={index} item={item} />)
      }
    </div>
  )
}

export default List
