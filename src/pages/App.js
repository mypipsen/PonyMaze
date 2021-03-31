import Introduction from 'components/Introduction'
import Controls from 'components/Controls'
import Notification from 'components/Notification'
import Maze from 'components/Maze'
import StoreContext from 'support/contexts/StoreContext'
import Store from 'support/data/Store'
import FetchStoredMazeId from 'support/operations/FetchStoredMazeId'
import DarkModeToggler from 'components/DarkModeToggler'

function App () {

  const store = new Store()

  return (
    <StoreContext.Provider value={store}>
      <FetchStoredMazeId />
      <div className='max-w-6xl	mx-auto bg-white p-12 mt-16 rounded-md space-y-12 lg:flex lg:space-x-12 dark:bg-gray-800 relative'>
        <div className='absolute top-4 right-4'>
          <DarkModeToggler />
        </div>
        <div className='w-full lg:w-1/2 space-y-4'>
          <Introduction />
          <Controls />
          <Notification />
        </div>
        <div className='w-full lg:w-1/2'>
          <Maze />
        </div>
      </div>
    </StoreContext.Provider>
  )

}

export default App