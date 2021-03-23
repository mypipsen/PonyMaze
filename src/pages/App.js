import Introduction from 'components/Introduction'
import Controls from 'components/Controls'

export default function App () {

  return (
    <div className='max-w-6xl	mx-auto bg-white p-12 mt-16 rounded-md flex space-x-12'>

      <div className='w-1/2'>
        <Introduction/>
        <Controls className='mt-4'/>
      </div>

      <div className='w-1/2'>
        Maze goes here..
      </div>

    </div>
  )

}