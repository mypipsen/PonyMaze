import { useContext, useEffect } from 'react'
import LocalStorage from 'support/services/LocalStorage'
import StoreContext from 'support/contexts/StoreContext'

export default function FetchStoredMazeId () {

  const store = useContext(StoreContext)

  useEffect(() => {

    const mazeId = LocalStorage.get('maze_id')

    if (mazeId !== null) {
      store.setMazeId(mazeId)
    }

  }, [store])

  return null

}