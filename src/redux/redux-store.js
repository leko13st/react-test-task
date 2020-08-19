import { createStore, combineReducers } from 'redux';
import workersReducer from './workersReducer';

let reducers = combineReducers({
    workersPage: workersReducer
})

let store = createStore(reducers);

window.store = store;

export default store;