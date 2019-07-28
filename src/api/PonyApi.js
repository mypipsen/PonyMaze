import axios from 'axios/index';
import store from '../redux/store';
import {create} from '../redux/actions';

const baseUrl = 'https://ponychallenge.trustpilot.com/pony-challenge';

export default {

    create(params) {
        return new Promise((resolve, reject) => {
            axios
                .post(`${baseUrl}/maze`, params)
                .then(response => {
                    store.dispatch(create(response.data.maze_id));
                    resolve();
                })
                .catch(err => reject(err));
        });
    },

}