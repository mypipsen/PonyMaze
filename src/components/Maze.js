import { useContext } from 'react'
import MazeContext from 'support/contexts/MazeContext'

export default function Maze () {

  const context = useContext(MazeContext)

  return (
    <div>
      maze_id: {context.mazeId}
    </div>
  )

}