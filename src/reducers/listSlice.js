import  { nanoid } from 'nanoid';

const initialState = {
  items: [
    { id: nanoid(), name: 'Диагностика', price: 'Бесплатно' },
    { id: nanoid(), name: 'Замена стекла', price: 21000 },
    { id: nanoid(), name: 'Замена дисплея', price: 25000 }
  ],
  status: 'idle'
}

export default function listReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD-ITEM':
      const newItem = { id: nanoid(), ...action.payload }
      return { ...state, items: [...state.items, newItem] }
    case 'REMOVE-ITEM':
      const idItem = action.payload.id
      const newItems = state.items.filter(item=>item.id !== idItem)
      return { ...state, items: newItems }
    case 'UPDATE-ITEM':
      const {id, name, price} = action.payload;
      const edit = state.items.find((e) => e.id === id);
      edit.name = name;
      edit.price = price;
      return { ...state };
    default:
      return state
  }
}
