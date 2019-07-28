import {
    FETCH_MAZES,
    FETCH_MAZE_SUCCESS,
    FETCH_MAZE_FAILURE,
    CREATE_MAZE_SUCCESS,
    CREATE_MAZE_FAILURE,
    MOVE_SUCCESS,
    MOVE_FAILURE,
} from './types';

const defaultState = {
    mazes: [],
    maze: null,
};

export default function reducer(state = defaultState, action) {
    switch (action.type) {

        case FETCH_MAZES:
            return {
                ...state,
                mazes: action.payload
            };

        case FETCH_MAZE_SUCCESS:
            return {
                ...state,
                maze: action.payload
            };

        case FETCH_MAZE_FAILURE:
            return {
                ...state,
                error: action.payload,
            };

        case CREATE_MAZE_SUCCESS:
            return {
                ...state,
                error: null,
                mazes: [action.payload, ...state.mazes]
            };

        case CREATE_MAZE_FAILURE:
            return {
                ...state,
                error: action.payload,
            };

        case MOVE_SUCCESS:
            return {
                ...state,
                error: null,
            };

        case MOVE_FAILURE:
            return {
                ...state,
                error: action.payload,
            };

        default:
            return state;
    }
};