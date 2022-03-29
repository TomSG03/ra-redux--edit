const initialState = {
  filter: '',
};

export default function filterReducer(state = initialState, action) {
  switch (action.type) {
     case 'CHANGE-FIND-FIELD':
        const { value } = action.payload;
        return { ...state, filter: value };
     case 'CLEAR-FIND-FIELD':
        return initialState;

     default:
        return state;
  }
}
