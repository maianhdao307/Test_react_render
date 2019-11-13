import React, { useState } from 'react';
import './App.css';
import List from './components/List';

export default function App() {
  const [list, setList] = useState(
    [
      {
        id: 1,
        name: "Mai",
        checked: false
      },
      {
        id: 2,
        name: "Anh",
        checked: false
      },
      {
        id: 3,
        name: "Dao",
        checked: false
      }
    ]
  );

  const handleCheck = id => {
    const newList = [...list];
    const index = newList.findIndex(item => item.id === id);
    const item = {...newList[index]};
    item.checked = !item.checked;
    newList[index] = item;
    setList(newList);
  }
  
  return (
    <div className="App">
      <List list={list} onCheck={handleCheck} />
    </div>
  )
}
