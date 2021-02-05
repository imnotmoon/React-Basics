import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
    <App />, document.getElementById('root')
);

// JSX : 자바스크립트와 HTML의 조합. 
// 리액트는 component를 html처럼 사용하기 위해 필요.
// 리액트에 국한된 개념.

// react application은 한번에 하나의 component만 rendering 할 수 있음.
// ReactDOM.render(<App /><Potato />...) 이런건 안됨