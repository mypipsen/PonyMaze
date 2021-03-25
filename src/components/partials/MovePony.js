import PropTypes from 'prop-types'
import { useEffect } from 'react'
import PonyService from '../../support/services/PonyService'

function MovePony ({ maze, setMaze }) {

  useEffect(() => {
    document.addEventListener('keydown', onKeyDown, false)

    return () => {
      document.removeEventListener('keydown', onKeyDown, false)
    }
  }, [maze])

  function onKeyDown (e) {

    if ([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
      // Prevent scrolling on arrow keys
      e.preventDefault()
    }

    let direction

    switch (e.keyCode) {
      case 87: // W
      case 38: // Up
        direction = 'north'
        break
      case 65: // A
      case 37: // Left
        direction = 'west'
        break
      case 83: // S
      case 40: // Down
        direction = 'south'
        break
      case 68: // D
      case 39: // Right
        direction = 'east'
        break
      default:
        direction = null
    }

    if (direction) {
      PonyService.move(maze.maze_id, direction)
        .then(() => {
          setMaze()
        })
        .catch(err => {
          console.error(err)
        })
    }
  }

  return null

}

MovePony.propTypes = {
  maze: PropTypes.object.isRequired,
  setMaze: PropTypes.func.isRequired,
}

export default MovePony
