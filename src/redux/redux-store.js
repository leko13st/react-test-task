import { createStore, combineReducers } from 'redux';
import workersReducer from './mainReducer';

let reducers = combineReducers({
    workersPage: workersReducer
})

let store = createStore(reducers); //Генерация redux-store на основе редусора(ов)

export default store;