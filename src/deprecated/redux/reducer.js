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

const defaultState = {
    mazes: [],
    maze: null,
    solution: [],
};

export default function reducer(state = defaultState, action) {
    switch (action.type) {

        case FETCH_MAZES:
            return {
                ...state,
                mazes: action.payload
            };

        case FETCH_MAZE_SUCCESS:
            let solution = state.solution;

            if (state.maze && action.payload && state.maze.maze_id !== action.payload.maze_id) {
                // Reset solution on new mazes
                solution = [];
            }

            return {
                ...state,
                maze: action.payload,
                solution: solution,
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

        case SOLUTION_SUCCESS:
            return {
                ...state,
                solution: action.payload,
                error: null,
            };

        case SOLUTION_FAILURE:
            return {
                ...state,
                solution: [],
                error: action.payload,
            };

        default:
            return state;
    }
};