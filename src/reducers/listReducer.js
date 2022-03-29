import { nanoid } from 'nanoid';

const initialState = {
  items: [
    { id: nanoid(), name: 'Диагностика', price: 'Бесплатно' },
    { id: nanoid(), name: 'Замена стекла', price: 21000 },
    { id: nanoid(), name: 'Замена дисплея', price: 25000 }
  ],
  filter: [],
  copyItems: [],
  enableFilter: false
}

export default function listReducer(state = initialState, action) {
  switch (action.type) {
    case 'CLEAR-FIND-FIELD':
      state.filter = [];
      state.enableFilter = false;
      return { ...state };
    case 'CHANGE-FIND-FIELD':
      const { value } = action.payload;
      state.enableFilter = value === '' ? false : true;
      if (state.enableFilter) {
        state.filter = [];
        state.items.filter((obj) => {
          if (Object.values(obj)[1].toString().indexOf(value) !== -1 || Object.values(obj)[2].toString().indexOf(value) !== -1) {
            state.filter.push(obj)
          }
          return { ...state };
        });
      }
      return { ...state }
    case 'ADD-ITEM':
      const newItem = { id: nanoid(), ...action.payload }
      return { ...state, items: [...state.items, newItem] }
    case 'REMOVE-ITEM':
      const idItem = action.payload.id
      state.items = state.items.filter(item => item.id !== idItem)
      if (state.enableFilter) {
        state.filter = state.filter.filter(item => item.id !== idItem)
      }
      return { ...state }
    case 'UPDATE-ITEM':
      const { id, name, price } = action.payload;
      const edit = state.items.find((e) => e.id === id);
      edit.name = name;
      edit.price = price;
      return { ...state };
    default:
      return state
  }
}
