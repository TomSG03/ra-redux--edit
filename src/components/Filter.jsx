import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { changeFindField, clearFindField } from '../actions/actionCreators'

function Filter() {
  const { filter } = useSelector((store) => store.filterReducer);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(changeFindField( name, value ));
  };

  const handleClear = () => {
    dispatch(clearFindField());
  };

  return (
    <div>
      <label>Фильтр</label>
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
