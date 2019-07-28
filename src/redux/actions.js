import {FETCH_MAZES, FETCH_MAZE_SUCCESS, FETCH_MAZE_FAILURE, CREATE_MAZE_SUCCESS, CREATE_MAZE_FAILURE} from './types';
import cookie from '../util/cookie';
import ponyApi from '../api/ponyApi';

function getMazesFromCookie() {
    let mazes = cookie.get('mazes');

    if (typeof mazes === 'undefined') {
        return [];
    }

    try {
        mazes = JSON.parse(mazes);

        if (!Array.isArray(mazes)) {
            return [];
        }

        return mazes;
    } catch (err) {
        return [];
    }
}

export function fetchMazes() {
    return (dispatch) => {
        const mazes = getMazesFromCookie();
        dispatch({type: FETCH_MAZES, payload: mazes});
    }
}

export function fetchMaze(id) {
    return (dispatch) => {
        ponyApi
            .fetch(id)
            .then(data => {
                dispatch({type: FETCH_MAZE_SUCCESS, payload: data});
            })
            .catch(err => {
                dispatch({type: FETCH_MAZE_FAILURE, payload: err.response.data});
            });
    }
}

export function createMaze(params) {
    return (dispatch) => {
        ponyApi
            .create(params)
            .then(id => {
                const mazes = getMazesFromCookie();
                mazes.push(id);
                cookie.set('mazes', JSON.stringify(mazes));

                dispatch({type: CREATE_MAZE_SUCCESS, payload: id});
            })
            .catch(err => {
                dispatch({type: CREATE_MAZE_FAILURE, payload: err.response.data});
            });
    }
}