import { useContext } from 'react'
import { observer } from 'mobx-react-lite'
import StoreContext from 'support/contexts/StoreContext'
import PonyService from 'support/services/PonyService'
import LocalStorage from 'support/services/LocalStorage'

function CreateMazeButton () {

  const store = useContext(StoreContext)

  function handleClick () {

    PonyService.create({
      'maze-width': 15,
      'maze-height': 25,
      'maze-player-name': 'Fluttershy',
      'difficulty': Math.floor(Math.random() * 11)
    })
      .then(mazeId => {
        store.setMazeId(mazeId)
        LocalStorage.save('maze_id', mazeId)
      })
      .catch(err => store.setNotification({ message: err, error: true }))

  }

  return (
    <button onClick={handleClick}>Create maze</button>
  )

}

export default observer(CreateMazeButton)