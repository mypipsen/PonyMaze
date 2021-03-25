import React, { useContext } from 'react'
import useFetchMaze from 'support/hooks/use-fetch-maze'
import MazeContext from 'support/contexts/MazeContext'
import MovePony from 'components/partials/MovePony'
import MazeRows from 'components/partials/MazeRows'

export default function Maze () {

  const context = useContext(MazeContext)
  const [maze, setMaze] = useFetchMaze(context.mazeId)

  if (maze === null) {
    return null
  }

  return (
    <div className="maze">
      <MovePony maze={maze} setMaze={setMaze}/>
      <MazeRows maze={maze}/>
    </div>
  )

}
