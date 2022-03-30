import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, changeField, updateItem, clearField } from '../actions/actionCreators'

function AddItem() {
  const { id, name, price } = useSelector((store) => store.addReducer);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(changeField(name, value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name !== '' && price !== '') {
      if (id === '') {
        dispatch(addItem(name, price));
      }
      else {
        dispatch(updateItem(id, name, price));
      }
    }
  };

  function handleClear() {
    dispatch(clearField());
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className='input-name'>
        <label>Наименование</label>
        <input
          className='input'
          name="name"
          onChange={handleChange}
          value={name}
        />
      </div>
      <div className='input-price'>
        <label>Цена</label>
        <input
          className='input'
          name="price"
          onChange={handleChange}
          value={price}
        />
      </div>
      <button onClick={handleSubmit} type="primary">✔</button>
      <button onClick={handleClear} type="primary">✕</button>
    </form>
  );
}

export default AddItem
