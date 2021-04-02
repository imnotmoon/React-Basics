
import React, { useState } from 'react'
import MyComponent2 from './MyComponent'
import ContextApi from './ContextApi'
import TextInput from './TextInput'


function App() {
  return (
    <div className="App">
      <MyComponent />
      <MyComponent2 />
      <ContextApi />
      <TextInput />
    </div>
  );
}


function MyComponent() {

  const [color, setColor] = useState("red");

  const onClick = () => {
    setColor("blue")
  }

  return (
    <div>
      <button style={{ backgroundColor: color }} onClick={onClick}>좋아요</button>
      <Todo />
    </div>
  )
}

function Title(props) {
  return <p>{props.title}</p>
}

function Todo() {
  const [count, setCount] = useState(0);
  const onClick = () => {
    setCount(count + 1);
  }

  return (
    <div>
      <Title title={`현재 카운트 : ${count}`} />
      <button onClick={onClick}>증가</button>

      {/* 조건부 렌더링 */}
      {count > 5 && <p>5보다 크다.</p>}

      <Todo2 title="리액트 공부하기" desc="asdfadsf" />
    </div>
  )
}

let seconds = 0;
function update() {
  seconds += 1;
  return (
    <div>
      <h1>안녕하세요</h1>
      <h2>지금까지 {seconds}초가 지났습니다.</h2>
    </div>
  )
}

// 화면 업데이트가 이루어지는 과정
// 1. render phase : 돔에 반영할 변경 사항을 파악하는 단계 -> 가상 돔을 활용한다
// 2. commit phase : 실제 돔에 반영하는 단계

function Todo2({ title, desc }) {
  const [priority, setPriority] = useState("high")

  const onClick = () => {
    setPriority("low")
  }

  // React.memo : 속성값(props)이 바뀔때만 렌더.
  const Title2 = React.memo(({ title }) => <p style={{ color: "blue" }}>{title}</p>)

  return (
    <div>
      <Title2 title={title} />
      <p>{desc}</p>
      <p>{priority == "high" ? "우선순위 높음" : "우선순위 낮음"}</p>
      <button onClick={onClick}>우선순위 변경</button>
    </div>
  )
}



// 가상 돔 : 실제 돔을 만들 수 있는 리액트 요소 트리
// 리액트 요소들은 dictionary 형식으로 존재, 트리 구조로 표현할 수 있다. => 상위 요소가 다시 렌더링하면 하위 요소들도 모두 다시 렌더링
// React.memo()를 통해 불필요한 렌더링은 막을 수 있음.
// Render : 실제 돔에 반영할 내용을 결정하는 단계

export default App;
