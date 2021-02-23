import React from 'react'
import ReactDOM from 'react-dom'
import Button from './Button'

function Container() {
    return React.createElement(
        'div',
        null,
        React.createElement('p', null, '버튼을 눌러주세요.'),
        React.createElement(Button, { label : '좋아요'}),
        React.createElement(Button, { label : '싫어요'})
    )
}

const domContainer = document.querySelector('#react-root');
ReactDOM.render(React.createElement(Container), domContainer);