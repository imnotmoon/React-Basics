import React from 'react'
import PropTypes from 'prop-types'

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


// 우리가 원하는 prop들이 제대로 전달되고있는지 체크해주는 모듈
// 타입까지 체크해줌. 굉장히 유용하다. 필요한 prop type인지도 체크.
foods.PropTypes = {
  name : PropTypes.string.isRequired
}


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

//! key props가 없다는 warning
// 각각의 component들은 unique해야하는데 루프를 돌면 uniqueness가 사라짐
// key=""를 설정해줘야한다.
// 보통은 id로 설정