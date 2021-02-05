import React from 'react'

function Food(props) {
  // props를 받아서 component-component 데이터 전달
  // father to children
  console.log(props.favourite)      // web console에 찍힘
  let favourite = props.favourite;
  return(<h1> I like {favourite} </h1>)
}

// component : HTML을 반환하는 함수
function App() {
  return (
    <div className="App">
      <h1>Hello world</h1>
      <Food favourite="sushi" />
      <Food favourite="ramen" />
      <Food favourite="staek" />
    </div>
  );
}

export default App;

// jsx : html + javascript
