import Introduction from 'components/Introduction'
import Controls from 'components/Controls'
import Maze from 'components/Maze'
import MazeContext from 'support/contexts/MazeContext'
import useLocalStorage from 'support/hooks/use-local-storage'

export default function App () {

  const [mazeId, setMazeId] = useLocalStorage('maze_id')

  return (
    <MazeContext.Provider value={{ mazeId, setMazeId }}>
      <div className='max-w-6xl	mx-auto bg-white p-12 mt-16 rounded-md flex space-x-12'>
        <div className='w-1/2'>
          <Introduction/>
          <Controls className='mt-4'/>
        </div>
        <div className='w-1/2'>
          <Maze/>
        </div>
      </div>
    </MazeContext.Provider>
  )

}