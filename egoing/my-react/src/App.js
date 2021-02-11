import React, { Component } from 'react'
import TOC from './components/TOC';
import Content from './components/Content'
import Subject from './components/Subject'


export default class App extends Component {
  
  // 어떤 컴포넌트가 실행될 때 render보다 먼저 실행돼서 초기화를 담당
  constructor(props) {
    super(props);

    // 외부에서 알 필요가 없는 코드를 숨김. 내부적으로 사용
    // Subject라고 하는 태그에 props값으로 준 것.
    // 상위 컴포넌트인 App의 상태를 하위 컴포넌트로 전달하고 싶을 때 사용
    //! App.state -> Subject.props
    this.state = {
      subject: {title : 'Web', sub: 'World Wide Web'},
      
      // 여러개의 엘리먼트를 생성할때는 유니크한 key가 필요함.
      // 하위 컴포넌트인 TOC에 전달할 state. -> props
      contents: [
        {id : 1, title : "HTML", desc : "HTML is Hyper Text..."},
        {id : 2, title : "CSS", desc : "CSS is for design"},
        {id : 3, title : "Javascript", desc : "Javascript is for interactive"},
      ]
    }
  }

  render() {
    return (
      <div className="App">
        <Subject title={this.state.subject.title} sub={this.state.subject.sub}/>
        <Subject title="React" sub="For UI"/>
        <TOC data={this.state.contents}/>
        <Content title="HTML" desc="HyperText Markup Language."/>
      </div>
    )
  }
}
