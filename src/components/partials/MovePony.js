import { useContext, useEffect, useCallback } from 'react'
import { observer } from 'mobx-react-lite'
import StoreContext from 'support/contexts/StoreContext'
import PonyService from 'support/services/PonyService'

function MovePony () {

  const store = useContext(StoreContext)
  const { mazeId } = store

  const onKeyDown = useCallback((e) => {
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
      PonyService.move(mazeId, direction)
        .then(data => {
          if (data.state === 'won') {
            return store.setNotification({ message: data['state-result'], error: false, img: data['hidden-url'] })
          } else {
            return store.setNotification(null)
          }
        })
        .catch(err => {
          return store.setNotification({ message: err, error: true })
        })
        .finally(() => {
          return PonyService.fetch(mazeId)
            .then(maze => store.setMaze(maze))
            .catch(err => store.setNotification({ message: err, error: true }))
        })
    }
  }, [mazeId, store])

  useEffect(() => {
    document.addEventListener('keydown', onKeyDown, false)

    return () => {
      document.removeEventListener('keydown', onKeyDown, false)
    }
  }, [onKeyDown])

  return null

}

export default observer(MovePony)