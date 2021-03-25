import { useContext } from 'react'
import PonyService from 'support/services/PonyService'
import MazeContext from 'support/contexts/MazeContext'

export default function CreateMazeButton () {

  const context = useContext(MazeContext)

  function handleClick () {

    PonyService.create({
      'maze-width': 15,
      'maze-height': 25,
      'maze-player-name': 'Fluttershy',
      'difficulty': Math.floor(Math.random() * 11)
    })
      .then(mazeId => {
        context.setMazeId(mazeId)
      })
      .catch(err => {
        console.error(err)
      })

  }

  return (
    <button onClick={handleClick}>Create maze</button>
  )

}