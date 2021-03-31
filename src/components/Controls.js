import CreateMazeButton from 'components/partials/CreateMazeButton'
import SolveMazeButton from 'components/partials/SolveMazeButton'
import WhenMazeIsLoaded from 'support/conditionals/WhenMazeIsLoaded'

export default function Controls () {

  return (
    <div className='space-x-6'>
      <CreateMazeButton />
      <WhenMazeIsLoaded>
        <SolveMazeButton />
      </WhenMazeIsLoaded>
    </div>
  )

}