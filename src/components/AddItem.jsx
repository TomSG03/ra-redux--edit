import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

function AddItem() {
  const storeItems = useSelector((store) => store.addReducer);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch({ type: 'CHANGE-FIELD', payload: { name, value }});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const {id, name, price } = storeItems;
    if (storeItems.name !== '' && storeItems.price !== '') {
      if (storeItems.id === '') {
        dispatch({ type: 'ADD-ITEM', payload: { name, price }});
        dispatch({ type: 'CLEAR-FIELD', payload: ''});
      }
      else {
        dispatch({ type: 'UPDATE-ITEM', payload: {id, name, price }});
        dispatch({ type: 'CLEAR-FIELD', payload: ''});
      }
    }
  };

  function handleClear() {
    dispatch({ type: 'CLEAR-FIELD', payload: ''});
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        className='input'
        name="name"
        onChange={handleChange}
        value={storeItems.name}
      />
      <input
        className='input'
        name="price"
        onChange={handleChange}
        value={storeItems.price}
      />
      <button onClick={handleSubmit} type="primary">✔</button>
      <button onClick={handleClear} type="primary">✕</button>
    </form>
  );
}

export default AddItem
