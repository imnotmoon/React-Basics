import './App.css';
import React, { useState } from 'react'
import Title from './Title'

function App() {

  const [desc, setDesc] = useState("");
  const [currentId, setCurrentId] = useState(1);
  const [todoList, setTodoList] = useState([]);
  const [count, setCount] = useState(0)

  function onAdd() {
    const todo = { id: currentId, desc }
    setTodoList([...todoList, todo])
    setCurrentId(currentId+1)
  }

  function onDelete(e) {
    const id = Number(e.target.dataset.id);
    const newTodoList = todoList.filter(todo => todo.id !== id)
    setTodoList(newTodoList)
  }

  function onSaveToServer() {
    // logic to save server
  }

  function onCount() {
    setCount(count+1)
  }

  return (
    <div>
      <h3>할 일 목록</h3>
      <ul>
        {todoList.map(todo => (
          <li key={todo.id}>
            <span>{todo.desc}</span>
            <button data-id={todo.id} onClick={onDelete}>삭제</button>
          </li>
        ))}
      </ul>
      <input type="text" value={desc} onChange={e => setDesc(e.target.value)} />
      <button onClick={onAdd}>추가</button>
      <button onClick={onSaveToServer}>서버에 저장</button>

      <br/>
      <br/>
      <br/>

      <div>
        <Title title={`현재 카운트 : ${count}`} />
        <Title title={`그냥 숫자 : ${count }`} />
        <button onClick={onCount}>증가</button>
      </div>
    </div>
  );
}

export default App;
