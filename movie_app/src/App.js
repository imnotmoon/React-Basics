import React from 'react'

function Food(props) {
  // props를 받아서 component-component 데이터 전달
  // father to children
  console.log(props.name)      // web console에 찍힘
  let name = props.name;
  return(<h1> I like {name} </h1>)
}

const foods = [
  {
    name : "a"
  },
  {
    name : "b"
  },
  {
    name : "c"
  }
]
// 각각은 Object임을 기억하자

// component : HTML을 반환하는 함수
function App() {
  return (
    <div className="App">
      {foods.map(dish => (
        <Food name={dish.name + "!!!"} />
      ))}
    </div>
  );
}

export default App;

// jsx : html + javascript

// **** map : 각 array의 원소에 대해서 function을 수행하고 결과를 담은 array를 리턴.
// array.map(cb) : cb의 리턴값을 담은 배열을 리턴