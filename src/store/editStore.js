import { createStore, combineReducers } from 'redux';
import listReducer from '../reducers/listSlice';
import addSlice from '../reducers/addSlice';

const rootReducer = combineReducers({
    addSlice,
    listReducer
});

const store = createStore(rootReducer);

export default store;
