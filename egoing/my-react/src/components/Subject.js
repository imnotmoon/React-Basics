import React, {Component} from 'react';

export default class Subject extends Component {
    render() {
      // component를 만들때는 하나의 최상위 태그만 있어야 함.
        return (
        <header>
            <h1>{this.props.title}</h1>
            {this.props.sub}
        </header>
        )
    }
}