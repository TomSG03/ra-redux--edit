import { 
   CHANGE_FIND_FIELD,
   CLEAR_FIND_FIELD,
 } from '../actions/actionTypes';

const initialState = {
  filter: '',
};

export default function filterReducer(state = initialState, action) {
  switch (action.type) {
     case CHANGE_FIND_FIELD:
        const { value } = action.payload;
        return { ...state, filter: value };
     case CLEAR_FIND_FIELD:
        return initialState;

     default:
        return state;
  }
}
