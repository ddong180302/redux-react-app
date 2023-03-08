import Nav from './views/Nav';
import './App.css';
import React, { useState } from 'react';
import Todo from './views/Todo';

function App() {

  let [name, setName] = useState('dong');
  const [address, setAddress] = useState('');
  const [todos, setTodos] = useState([
    { id: '01', work: 'it', age: '21' },
    { id: '02', work: 'gv', age: '23' }
  ])

  /*name: giá trị của biến
  setName: hàm xử lý khi biến có sự thay đổi
  */


  const handleOnClick = (event) => {
    if (!address) {
      alert('empty work!')
      return;
    }
    let newTodo = { id: '', work: address, age: '19' };
    setTodos([...todos, newTodo]);
    setAddress('')
  }

  const handleOnChange = (event) => {
    setAddress(event.target.value);
  }

  return (
    <div className="App">
      <Nav />
      <h1>hello world with {name}</h1>
      <Todo
        todos={todos}
      />
      <input type='input' value={address} onChange={(event) => handleOnChange(event)} />
      <button type='button' onClick={(event) => handleOnClick(event)}>click me</button>
    </div>
  );
}

export default App;
