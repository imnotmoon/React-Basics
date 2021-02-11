import React, { Component } from 'react'; 

export default class Content extends Component {
    render() {

        console.log('Content Render')

      // refactoring
    return (
        <article>
            <h1>{this.props.title}</h1>
            {this.props.desc}
        </article>
    )
    }
}