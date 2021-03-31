import FetchMaze from 'support/operations/FetchMaze'
import WhenMazeIsLoaded from 'support/conditionals/WhenMazeIsLoaded'
import MovePony from 'components/partials/MovePony'
import MazeRows from 'components/partials/MazeRows'
import Tutorial from 'components/Tutorial'

export default function Maze () {

  return (
    <>
      <FetchMaze />
      <WhenMazeIsLoaded>
        <div className='maze'>
          <MovePony />
          <MazeRows />
        </div>
        <Tutorial />
      </WhenMazeIsLoaded>
    </>
  )

}