import { 
  ADD_ITEM, 
  CHANGE_FIELD, 
  UPDATE_ITEM,
  CLEAR_FIELD,
	EDIT_ITEM,
	REMOVE_ITEM
} from '../actions/actionTypes';

const initialState = {
	id: '',
	name: '',
	price: ''
};

export default function addReducer(state = initialState, action) {
	switch (action.type) {
		case CHANGE_FIELD:
			const change = { ...action.payload };
			return {
				...state,
				[change.name]: change.value,
			};
		case EDIT_ITEM:
			const { id, name, price } = action.payload;
			return { id, name, price };
		case REMOVE_ITEM:
			if (state.id !== '') {
				return initialState
			}
			return state
		case CLEAR_FIELD:
			return initialState;
		case ADD_ITEM:
			return initialState;
		case UPDATE_ITEM:
			return initialState;
		default:
			return state;
	}
}
