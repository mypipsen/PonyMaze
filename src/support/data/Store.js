import { makeAutoObservable } from 'mobx'

export default class Store {

  mazeId = null
  maze = null
  mazeSolution = []
  notification = null

  constructor () {
    makeAutoObservable(this)
  }

  setMazeId (mazeId) {
    this.mazeId = mazeId
  }

  setMaze (maze) {
    this.maze = maze
  }

  setMazeSolution (solution) {
    this.mazeSolution = solution
  }

  setNotification (notification) {
    this.notification = notification
  }

}