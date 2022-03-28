const initialState = {
   id: '',
   name: '',
   price: ''
};

export default function addSlice(state = initialState, action) {
   switch (action.type) {
      case 'CHANGE-FIELD':
         const change = { ...action.payload };
         return {
            ...state,
            [change.name]: change.value,
         };
      case 'CLEAR-FIELD':
         return initialState;
      case 'EDIT-ITEM':
         const { id, name, price } = action.payload;
         return { id, name, price };
      case 'REMOVE-ITEM':
         if (state.id !== '') {
            return initialState
         }
         return state


      default:
         return state;
   }
}
