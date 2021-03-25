import { createContext } from 'react'

const StoreContext = createContext(null)

StoreContext.displayName = 'StoreContext'

export const Provider = StoreContext.Provider
export const Consumer = StoreContext.Consumer

export default StoreContext
