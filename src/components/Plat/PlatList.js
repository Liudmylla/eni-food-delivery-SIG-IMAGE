import PlatListItem from './PlatListItem'

import styles from './styles/PlatListStyle'

function PlatList ({ plats }) {
  const categories = [...new Set(plats.map(p => p.category))]

  return (
    <div>
      {
        categories.map((c, i) => (
          <div key={i}>
            <h3>{c.toUpperCase()}</h3>
            <div style={styles.list}>
              {
                plats.filter(p => p.category === c).map(plat => (
                  <PlatListItem key={plat._id} plat={plat} />
                ))
              }
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default PlatList
