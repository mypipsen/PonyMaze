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
    }

}