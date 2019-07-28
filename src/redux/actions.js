import cookie from '../util/cookie';

export function create(maze_id) {
    return (dispatch) => {
        cookie.set('maze_id', maze_id);
        dispatch({type: 'maze_created', payload: maze_id});
    }
}

export function getIdFromCookie() {
    return (dispatch) => {
        const maze = cookie.get('maze_id');

        if (typeof maze !== 'undefined') {
            dispatch({type: 'maze_created', payload: maze});
        }
    }
}