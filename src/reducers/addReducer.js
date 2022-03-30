const initialState = {
	id: '',
	name: '',
	price: ''
};

export default function addReducer(state = initialState, action) {
	switch (action.type) {
		case 'CHANGE-FIELD':
			const change = { ...action.payload };
			return {
				...state,
				[change.name]: change.value,
			};
		case 'EDIT-ITEM':
			const { id, name, price } = action.payload;
			return { id, name, price };
		case 'REMOVE-ITEM':
			if (state.id !== '') {
				return initialState
			}
			return state
		case 'CLEAR-FIELD':
			return initialState;
		case 'ADD-ITEM':
			return initialState;
		case 'UPDATE-ITEM':
			return initialState;
		default:
			return state;
	}
}
