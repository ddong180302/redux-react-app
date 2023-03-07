import Nav from './views/Nav';
import './App.css';
import React, { useState } from 'react';

function App() {

  let [name, setName] = useState('');
  const [ten, setTen] = useState('');

  /*name: giá trị của biến
  setName: hàm xử lý khi biến có sự thay đổi
  */
  const handleOnclick = () => {
    console.log(".....state: ", name)
    setName(ten);
  }

  const handleOnchaneInput = (event) => {
    setTen(event.target.value);
  }
  return (
    <div className="App">
      <Nav />
      <div>Hello world with {name}</div>
      <input type="text" value={ten} onChange={(event) => handleOnchaneInput(event)} />
      <button type='button' onClick={() => handleOnclick()}>
        click me
      </button>
    </div>
  );
}

export default App;
