import React from 'react'
import './App.css';
import Filter from './components/Filter';
import AddItem from './components/AddItem';
import ListItem from './components/ListItem';



function App() {
  return (
    <div className="App">
      <Filter />
      <AddItem  />
      <ListItem />
    </div>
  );
}

export default App;
