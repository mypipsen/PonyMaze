import { useState, useEffect } from 'react'
import PonyService from 'support/services/PonyService'

export default function useFetchMaze (id) {

  const [maze, setMaze] = useState(null)

  function setMazeFromService () {
    PonyService.fetch(id)
      .then(data => {
        setMaze(data)
      })
      .catch(err => {
        console.error(err)
      })
  }

  useEffect(() => {
    console.log('!!! test', id)
    if (id) {
      setMazeFromService()
    }
  }, [id])

  return [maze, setMazeFromService]

}
