import './App.css';
import Button from './Button3'
import Box from './Box4'

function App() {
  console.log(`NODE_ENV = ${process.env.NODE_ENV}`)
  return (
    <div className="App">
      <Button size="big" />
      <Button size="small" />
      <Box size="big" />
      <Box size="small" />
    </div>
  );
}

export default App;
