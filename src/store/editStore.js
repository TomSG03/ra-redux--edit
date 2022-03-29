import { createStore, combineReducers } from 'redux';
import listReducer from '../reducers/listReducer';
import addReducer from '../reducers/addReducer';
import filterReducer from '../reducers/filterReducer';

const rootReducer = combineReducers({
    addReducer,
    listReducer, 
    filterReducer
});

const store = createStore(rootReducer);

export default store;
