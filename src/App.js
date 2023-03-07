import Nav from './views/Nav';
import './App.css';
import React, { useState } from 'react';

function App() {

  let [name, setName] = useState('dong');
  const [ten, setTen] = useState('');
  const [todos, setTodos] = useState([
    { id: '1', title: 'dong' },
    { id: '2', title: 'thao' }
  ])

  /*name: giá trị của biến
  setName: hàm xử lý khi biến có sự thay đổi
  */
  const handleOnclick = (event) => {
    if (!ten) {
      alert('empty todo!')
      return;
    }
    let newTodo = { id: '', title: ten }
    setTodos([...todos, newTodo])
    setTen('')
  }

  const handleOnchange = (event) => {
    setTen(event.target.value)
  }
  return (
    <div className="App">
      <Nav />
      <h1>hello world with {name}</h1>
      <div className='todo-container'>
        <div className='todo-list'>
          {todos.map(item => {
            return (
              <li className='todo-child' key={item.id}> {item.title}</li>
            )
          })}
        </div>
      </div>
      <input type='input' value={ten} onChange={(event) => handleOnchange(event)} />
      <button type='button' onClick={(event) => handleOnclick(event)}>click me</button>
    </div>
  );
}

export default App;
