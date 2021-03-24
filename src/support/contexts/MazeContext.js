import { createContext } from 'react'

const MazeContext = createContext(null)

MazeContext.displayName = 'MazeContext'

export const Provider = MazeContext.Provider
export const Consumer = MazeContext.Consumer

export default MazeContext
