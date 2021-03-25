import axios from 'axios/index'

class PonyService {

  constructor () {
    this.url = 'https://ponychallenge.trustpilot.com/pony-challenge'
  }

  create (params) {
    return new Promise((resolve, reject) => {
      axios
        .post(`${this.url}/maze`, params)
        .then(response => resolve(response.data.maze_id))
        .catch(err => reject(err))
    })
  }

  fetch (id) {
    return new Promise((resolve, reject) => {
      axios
        .get(`${this.url}/maze/${id}`)
        .then(response => resolve(response.data))
        .catch(err => reject(err))
    })
  }

  move (id, direction) {
    return new Promise((resolve, reject) => {
      axios
        .post(`${this.url}/maze/${id}`, { direction: direction })
        .then(response => {

          if (response.status !== 200 || response.data['state-result'] !== 'Move accepted') {
            return reject(response.data)
          }

          resolve(response.data)
        })
        .catch(err => reject(err))
    })
  }

}

export default new PonyService()