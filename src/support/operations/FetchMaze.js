import { useContext, useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import StoreContext from 'support/contexts/StoreContext'
import PonyService from 'support/services/PonyService'

function FetchMaze () {

  const store = useContext(StoreContext)

  useEffect(() => {
    if (store.mazeId) {

      PonyService.fetch(store.mazeId)
        .then(data => {
          store.setMaze(data)
          store.setMazeSolution([])
          store.setNotification(null)
        })
        .catch(err => store.setNotification({ message: err, error: true }))

    }
  }, [store, store.mazeId])

  return null

}

export default observer(FetchMaze)