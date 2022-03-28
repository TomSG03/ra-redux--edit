import React from 'react'
import { useSelector, useDispatch } from 'react-redux';

function ListItem() {
  const { items } = useSelector((store) => store.listReducer);
  const dispatch = useDispatch();

  function onDelete(item) {
    dispatch({ type: 'REMOVE-ITEM', payload: item});
    // dispatch({ type: 'CLEAR-FIELD', payload: ''});
  }

  function onEdit(item) {
    dispatch({ type: 'EDIT-ITEM', payload: item});
  }

  return (    
    <ul>
      {items &&
         items.map((o) => (
          <li key={o.id} style={{ marginTop: 10 }}>
            <div className='list-item'>{o.name}</div>
            <div className='list-item'>{o.price}</div>
            <button onClick={() => onEdit(o)}>✎</button>
            <button onClick={() => onDelete(o)}>✕</button>
          </li>
        ))}
    </ul>
  );
}


export default ListItem
