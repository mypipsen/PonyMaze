import { useContext } from 'react'
import MazeContext from 'support/contexts/MazeContext'

export default function SolveMazeButton () {

  const context = useContext(MazeContext)

  if (context.mazeId === null) {
    return null
  }

  return (
    <button>Solve maze</button>
  )

}