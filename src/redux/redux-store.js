import { createStore, combineReducers } from 'redux';
import workersReducer from './workersReducer';
import workerCardReducer from './workerCardReducer';

let reducers = combineReducers({
    workersPage: workersReducer,
    workerCardPage: workerCardReducer 
})

let store = createStore(reducers);

window.store = store;

export default store;