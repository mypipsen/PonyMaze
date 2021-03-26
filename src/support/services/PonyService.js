import axios from 'axios/index'

class PonyService {

  constructor () {
    this.domain = 'https://ponychallenge.trustpilot.com'
    this.url = `${this.domain}/pony-challenge`
  }

  create (params) {
    return new Promise((resolve, reject) => {
      axios
        .post(`${this.url}/maze`, params)
        .then(response => resolve(response.data.maze_id))
        .catch(err => reject(err.message))
    })
  }

  fetch (id) {
    return new Promise((resolve, reject) => {
      axios
        .get(`${this.url}/maze/${id}`)
        .then(response => resolve(response.data))
        .catch(err => reject(err.message))
    })
  }

  move (id, direction) {
    return new Promise((resolve, reject) => {
      axios
        .post(`${this.url}/maze/${id}`, { direction: direction })
        .then(response => {

          if (response.status !== 200) {
            return reject(`Request failed with status code: ${response.status}`)
          }

          if (response.data.state === 'over' || response.data['state-result'] === 'Can\'t walk in there') {
            return reject(response.data['state-result'])
          }

          resolve(response.data)
        })
        .catch(err => reject(err))
    })
  }

}

export default new PonyService()