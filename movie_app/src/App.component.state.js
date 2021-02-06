import React from 'react'
import PropTypes from 'prop-types'

class App extends React.Component {

  // 우리가 바꾸고싶은 데이터를 여기 넣는것.
  state = {
    count : 0
  };


  //! warning : 다이렉트하게 state를 변경하지 말고 setState()를 쓸 것.
  //! react render 함수는 자동으로 refresh를 지원하지 않음
  add = () => {
    console.log("add");
    //* 새 객체를 인자로 받는다!!!!!!!!!!!!!!!
    this.setState(current => ({count:current.count + 1}));
    // current를 자동으로 지금 state로 인식함.
  }

  minus = () => {
    console.log("minus");
    //* 새 객체를 인자로 받는다!!!!!!!!!!!!!!
    this.setState(current => ({count:current.count - 1}));
    // current를 자동으로 지금 state로 인식함.
  }
//! setState()를 하면 자동으로 refresh함. render()를 호출한다. 알아서.
//! 새로운 state와 함께 render()를 한번 호출.

  // render method는 꼭 넣어줘야 함.
  // 리액트는 자동으로 클래스의 render 메소드를 실행시킴
  // function component랑 차이점은 class component는 STATE를 사용할 수 있음.
  //! setState()가 불려지면 자동으로 render()가 호출된다.
  render() {
    // 리턴 안에는 하나의 component만 들어간다. 이제 이해함
    console.log("i am rendering");
    return (
      <div>
        <h1>The number is : {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }




  // 2. Life Cycle
  // 함수 이름이나 그런게 iOS에서의 AppDelegate에서 앱 생애주기 설정과 유사
  constructor(props) {
    super(props)
    console.log("hello");
  }

  // render()가 끝난 직후에 호출됨
  // Mount : 시작
  componentDidMount() {
    console.log("component rendered");
  }

  // update가 일어난 직후에 호출됨
  componentDidUpdate() {
    console.log("I just updated");
  }

  // 다른 페이지로 가거나.. component가 unmount될때 발생
  // Unmount : 종료
  componentWillUnmount() {
    console.log("goodbye, cruel world!")
  }

}