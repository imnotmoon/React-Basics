import React, { Component } from 'react'; 

export default class ReadContent extends Component {
    render() {
      // refactoring
    return (
        <article>
            <h1>{this.props.title}</h1>
            {this.props.desc}
        </article>
    )
    }
}