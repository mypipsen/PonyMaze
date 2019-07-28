const defaultState = {
    maze_id: null
};

export default function reducer(state = defaultState, action) {
    switch (action.type) {

        case 'maze_created':
            return Object.assign({}, state, {
                maze_id: action.payload
            });

        default:
            return state;
    }
};