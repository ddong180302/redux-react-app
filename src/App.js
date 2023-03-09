import React, { useState, useEffect } from 'react';
import Nav from './views/Nav';
import './App.css';
import Todo from './views/Todo';
import Covid from './views/Covid';

const App = () => {
  let [name, setName] = useState('dong');
  const [ten, setTen] = useState('dong');
  const [todos, setTodos] = useState([
    { id: '01', title: 'học code', age: '20' },
    { id: '02', title: 'chơi game', age: '21' },
    { id: '03', title: 'xem phim', age: '20' },
  ])

  // useEffect(() => {
  //   console.log('run useEffect')
  // }, [ten]);

  // const handleOnclick = (event) => {
  //   if (!ten) {
  //     alert('empty ten')
  //     return;
  //   }
  //   let newTodo = { id: Math.floor(Math.random(10000) * 10) + 1, title: ten, age: '23' }
  //   setTodos([...todos, newTodo]);
  //   setTen('')
  // }

  // const handleOnChange = (event) => {
  //   setTen(event.target.value);
  // }
  // const handleDelete = (id) => {
  //   let currentTodo = todos;
  //   currentTodo = currentTodo.filter(item => item.id !== id)
  //   setTodos(currentTodo);
  // }
  // const handleOnChangeAge = (event) => {
  //   setTodos.age(event.target.value);
  // }
  return (
    <div className='App'>
      <Nav />
      <h1>hello world with {name}</h1>
      <Covid />
      {/* <Todo
        todos={todos}
        title={'My todo'}
        handleDelete={handleDelete}
      />
      <Todo
        todos={todos.filter(item => item.age === '20')}
        title={'My todo age'}
        handleDelete={handleDelete}

      />
      <input type='input' value={ten} onChange={(event => handleOnChange(event))} placeholder='title' />
      {/* <input type='input' value={age} onChange={(event => handleOnChangeAge(event))} placeholder='age' /> */}
      {/* <button type='button' onClick={(event) => handleOnclick(event)}> click me</button> */}
    </div>
  )
}

export default App;
