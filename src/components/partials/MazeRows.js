import React from 'react'
import { chunk } from 'lodash'
import PropTypes from 'prop-types'
import MovePony from './MovePony'

function MazeRows ({ maze }) {

  const width = maze.size[0]
  const rows = chunk(maze.data, width)
  const solution = [] // TODO

  let objectLocations = {}

  objectLocations[maze['pony']] = 'pony'
  objectLocations[maze['domokun']] = 'domokun'
  objectLocations[maze['end-point']] = 'end-point'

  return (
    <>
      {rows.map((cells, i) => (
        <div className="maze__row" key={i}>
          {cells.map((cell, y) => {

            const key = i * width + y
            const object = objectLocations[key] ? `object__${objectLocations[key]}` : ''
            const path = solution.indexOf(key) > -1 ? 'path' : ''

            return (
              <div className={`maze__cell ${cell.join(' ')} ${object} ${path}`} key={key}/>
            )

          })}
        </div>
      ))}
    </>
  )

}

MovePony.propTypes = {
  maze: PropTypes.object.isRequired,
}

export default MazeRows