import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import Reducer from './reducer';

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    Reducer,
    storeEnhancers(applyMiddleware(thunk))
);

export default store;