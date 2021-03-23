import axios from 'axios/index';

const baseUrl = 'https://ponychallenge.trustpilot.com/pony-challenge';

export default {

    create(params) {
        return new Promise((resolve, reject) => {
            axios
                .post(`${baseUrl}/maze`, params)
                .then(response => {
                    resolve(response.data.maze_id);
                })
                .catch(err => reject(err));
        });
    },

    fetch(id) {
        return new Promise((resolve, reject) => {
            axios
                .get(`${baseUrl}/maze/${id}`)
                .then(response => resolve(response.data))
                .catch(err => reject(err));
        });
    },

    move(id, direction) {
        return new Promise((resolve, reject) => {
            axios
                .post(`${baseUrl}/maze/${id}`, {direction: direction})
                .then(response => {
                    if (response.status === 200 && response.data['state-result'] === 'Move accepted') {
                        resolve(response.data);
                    } else {
                        reject({response: {data: response.data['state-result']}})
                    }
                })
                .catch(err => reject(err));
        });
    },

}