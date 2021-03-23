import cookie from '../util/cookie';
import ponyApi from '../api/ponyApi';
import depthFirst from '../algorithms/depthFirst';
import {
    FETCH_MAZES,
    FETCH_MAZE_SUCCESS,
    FETCH_MAZE_FAILURE,
    CREATE_MAZE_SUCCESS,
    CREATE_MAZE_FAILURE,
    MOVE_SUCCESS,
    MOVE_FAILURE,
    SOLUTION_SUCCESS,
    SOLUTION_FAILURE,
} from './types';

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
                dispatch(fetchMaze(id));
            })
            .catch(err => {
                dispatch({type: CREATE_MAZE_FAILURE, payload: err.response.data});
            });
    }
}

export function movePony(id, direction) {
    return (dispatch) => {
        ponyApi
            .move(id, direction)
            .then(() => {
                dispatch({type: MOVE_SUCCESS, payload: id});
                dispatch(fetchMaze(id));
            })
            .catch(err => {
                dispatch({type: MOVE_FAILURE, payload: err.response.data});
                dispatch(fetchMaze(id));
            });
    }
}

export function solveMaze(maze) {
    return (dispatch) => {
        depthFirst
            .search(maze)
            .then(path => {
                dispatch({type: SOLUTION_SUCCESS, payload: path});
            })
            .catch(err => {
                dispatch({type: SOLUTION_FAILURE, payload: err});
            });
    }
}