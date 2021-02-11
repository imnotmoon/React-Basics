import React, { Component } from 'react'
import TOC from './components/TOC';
import Content from './components/Content'
import Subject from './components/Subject'


export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Subject title="WEB" sub="world wide web!"/>
        <Subject title="React" sub="For UI"/>
        <TOC />
        <Content title="HTML" desc="HyperText Markup Language."/>
      </div>
    )
  }
}
