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
      mode : 'welcome',
      welcome : {title : 'welcome', desc: 'hello, React!'},
      subject: {title : 'Web', sub: 'World Wide Web'},
      
      // 여러개의 엘리먼트를 생성할때는 유니크한 key가 필요함.
      // 하위 컴포넌트인 TOC에 전달할 state. -> props
      contents: [
        {id : 1, title : "HTML", desc : "HTML is Hyper Text..."},
        {id : 2, title : "CSS", desc : "CSS is for design"},
        {id : 3, title : "Javascript", desc : "Javascript is for interactive"},
      ], 
      selected_content_id : 1,    // 누가 본문에 나올 것인지 결정하는 state 변수
    }
  }

  render() {
    var _title, _desc = null;

    if(this.state.mode === 'welcome') {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    } else if(this.state.mode === 'read') {
      this.state.contents.forEach((data) => {
        if(data.id === this.state.selected_content_id) {
          _title = data.title;
          _desc = data.desc;
        }
      })
    }

    return (
      <div className="App">
        <Subject title={this.state.subject.title} sub={this.state.subject.sub}
        // 함수를 props로 전달
        onChangePage={function() {
          if(this.state.mode === 'welcome') {
            this.setState({mode : 'read'})
          } else {
            this.setState({mode : 'welcome'})
          }
        }.bind(this)}/>
        {/* <header>
            <h1><a href="/" onClick={function(e){
              // debugger;   // 여기서 브라우저가 실행을 멈춰준다.
              e.preventDefault();
              if(this.state.mode == 'welcome') {
                this.setState({mode : 'read'});
              } else {
                this.setState({mode : 'welcome'});
              }
            }.bind(this)} >{this.state.subject.title}</a></h1>
            {this.state.subject.sub}
        </header> */}
        <TOC data={this.state.contents} 
        onChangePage={function(id, e) {
          this.setState({
            mode : 'read', 
            selected_content_id: Number(id)
          })
        }.bind(this)}/>
        <Content title={_title} desc={_desc}/>
      </div>
    )
  }
}
