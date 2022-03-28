import React from 'react'
import PropTypes from 'prop-types'

function AddItem(props) {
  const [item, setItem] = useState({ name: '', price: '' });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setItem({ ...item, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAdd({ id: Math.random(), name: item.name, price: item.price });
    console.log(item);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        onChange={handleChange}
        value={item.name}
        style={{ width: 200 }}
      />
      <input
        name="price"
        onChange={handleChange}
        value={item.price}
        style={{ width: 200 }}
      />
      <button onClick={handleSubmit} type="primary">
        Save
      </button>
    </form>
  );
}

AddItem.propTypes = {}

export default AddItem
