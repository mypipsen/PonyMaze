import Introduction from 'components/Introduction'
import Controls from 'components/Controls'
import Notification from 'components/Notification'
import Maze from 'components/Maze'
import StoreContext from 'support/contexts/StoreContext'
import Store from 'support/data/Store'
import FetchStoredMazeId from 'support/operations/FetchStoredMazeId'

function App () {

  const store = new Store()

  return (
    <StoreContext.Provider value={store}>
      <FetchStoredMazeId/>
      <div className='max-w-6xl	mx-auto bg-white p-12 mt-16 rounded-md flex space-x-12'>
        <div className='w-1/2 space-y-4'>
          <Introduction/>
          <Controls/>
          <Notification/>
        </div>
        <div className='w-1/2'>
          <Maze/>
        </div>
      </div>
    </StoreContext.Provider>
  )

}

export default App