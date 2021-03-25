import { useContext } from 'react'
import { observer } from 'mobx-react-lite'
import StoreContext from 'support/contexts/StoreContext'
import PonyService from 'support/services/PonyService'

function Notification () {

  const store = useContext(StoreContext)
  const { notification } = store

  if (notification === null) {
    return null
  }

  return (
    <>
      <div className={`p-4 rounded ${notification.error ? 'bg-red-300' : 'bg-green-200'}`}>
        {notification.message}
      </div>

      {notification.img && <img src={PonyService.domain + notification.img} alt='You saved the pony!'/>}
    </>
  )

}

export default observer(Notification)