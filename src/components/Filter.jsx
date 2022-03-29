import React from 'react'
import { useSelector, useDispatch } from 'react-redux';

function Filter() {
  const { filter } = useSelector((store) => store.filterReducer);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch({ type: 'CHANGE-FIND-FIELD', payload: { name, value }});
  };

  const handleClear = () => {
    dispatch({ type: 'CLEAR-FIND-FIELD', payload: '' });
  };

  return (
    <div className='filter'>
      <input
        className='input-filter'
        name="filter"
        onChange={handleChange}
        value={filter}
      />
       <button onClick={handleClear} type="primary">✕</button>
    </div>
  )
}

export default Filter
