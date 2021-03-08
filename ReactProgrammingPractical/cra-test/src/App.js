import logo from './logo.svg';
import './App.css';
import TodoList from './TodoList'

function App() {
  console.log(`NODE_ENV = ${process.env.NODE_ENV}`)
  return (
    <div className="App">
      <TodoList />
    </div>
  );
}

export default App;
