import { useContext } from 'react'
import { observer } from 'mobx-react-lite'
import StoreContext from 'support/contexts/StoreContext'

function WhenMazeIsLoaded ({ children }) {

  const store = useContext(StoreContext)

  if (store.maze === null) {
    return null
  }

  return children

}

export default observer(WhenMazeIsLoaded)