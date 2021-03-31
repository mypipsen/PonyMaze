import { useContext } from 'react'
import { observer } from 'mobx-react-lite'
import { chunk } from 'lodash'
import StoreContext from 'support/contexts/StoreContext'

function MazeRows () {

  const store = useContext(StoreContext)
  const { maze, mazeSolution } = store

  const width = maze.size[0]
  const rows = chunk(maze.data, width)

  let objectLocations = {}

  objectLocations[maze['pony']] = 'pony'
  objectLocations[maze['domokun']] = 'domokun'
  objectLocations[maze['end-point']] = 'end-point'

  return (
    <>
      {rows.map((cells, i) => (
        <div className='maze__row' key={i}>
          {cells.map((cell, y) => {

            const key = i * width + y
            const object = objectLocations[key] ? `object__${objectLocations[key]}` : ''
            const path = mazeSolution.indexOf(key) > -1 ? 'path' : ''

            return (
              <div className={`maze__cell ${cell.join(' ')} ${object} ${path}`} key={key} />
            )

          })}
        </div>
      ))}
    </>
  )

}

export default observer(MazeRows)