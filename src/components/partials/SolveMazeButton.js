import { useContext } from 'react'
import { observer } from 'mobx-react-lite'
import StoreContext from 'support/contexts/StoreContext'
import MazeSolver from 'support/services/MazeSolver'

function SolveMazeButton () {

  const store = useContext(StoreContext)

  function handleClick () {
    MazeSolver.solve(store.maze)
      .then(solution => store.setMazeSolution(solution))
      .catch(err => store.setNotification({ message: err, error: true }))
  }

  return (
    <button onClick={handleClick}>Solve maze</button>
  )

}

export default observer(SolveMazeButton)