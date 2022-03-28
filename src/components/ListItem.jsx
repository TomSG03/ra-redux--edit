import React from 'react'
import { useSelector, useDispatch } from 'react-redux';

function ListItem(props) {
  const storeItems = useSelector((store) => store.listReducer.items);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id });
  };

  return (
    <ul>
      {storeItems &&
        storeItems.map((o) => (
          <li key={o.id} style={{ marginTop: 10 }}>
            <div style={{ display: 'inline-block', width: 200 }}>{o.name}</div>
            <div style={{ display: 'inline-block', width: 100 }}>{o.price}</div>
            <button onClick={() => handleRemove(o.id)}>✕</button>
          </li>
        ))}
    </ul>
  );
}


export default ListItem
