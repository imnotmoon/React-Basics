import React, { Component } from 'react'
import TOC from './components/TOC';
import ReadContent from './components/ReadContent'
import CreateContent from './components/CreateContent'
import Subject from './components/Subject'
import Control from './components/Control'


export default class App extends Component {
  
  // 어떤 컴포넌트가 실행될 때 render보다 먼저 실행돼서 초기화를 담당
  constructor(props) {
    super(props);

    // 외부에서 알 필요가 없는 코드를 숨김. 내부적으로 사용
    // Subject라고 하는 태그에 props값으로 준 것.
    // 상위 컴포넌트인 App의 상태를 하위 컴포넌트로 전달하고 싶을 때 사용
    //! App.state -> Subject.props
    this.max_content_id = 3;   // ui에 영향을 줄 이유가 하나도 없다. 불필요한 렌더링. 그래서 밖으로 뺐다.

    this.state = {
      mode : 'create',
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
    var _title, _desc, _article = null;

    if(this.state.mode === 'welcome') {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _article = <ReadContent title={_title} desc={_desc}/>
    } else if(this.state.mode === 'read') {
      this.state.contents.forEach((data) => {
        if(data.id === this.state.selected_content_id) {
          _title = data.title;
          _desc = data.desc;
          _article = <ReadContent title={_title} desc={_desc}/>
        }
      })
    } else if(this.state.mode === 'create') {
      _article = <CreateContent onSubmit={function(_title, _desc) {
        // 여기서 setState()를 통해서 content에 새로운 인자를 추가
        console.log(_title, _desc)

        // setState() 안에 바꿀 내용을 넣었는데 그냥 간편하게 append 할 수는 없나
        this.max_content_id += 1;
        // 방법 1 : 푸시. 원본을 바꾼다. 비추천. 성능이 안좋아질 수 있다.
        //* this.state.contents.push({id: this.max_content_id, title : _title, desc : _desc});
        //* this.setState({
        //*   contents : this.state.contents
        //* });
        //! 방법 2 : concat. 원래 배열에서 카피해 새로운 배열을 만든 다음 원소를 추가한 후 대입. 원본을 바꾸지 않는다.
        this.setState({
          // 새 배열로 교체.
          contents : this.state.contents.concat({
            id : this.max_content_id, 
            title : _title,
            desc : _desc
          })
        })

      }.bind(this)}/>
    }

    return (
      <div className="App">
        <Subject title={this.state.subject.title} sub={this.state.subject.sub}
        // 함수를 props로 전달
        onChangePage={function() {
          if(this.state.mode === 'welcome') {
            this.setState({mode : 'read'})
          } else if(this.state.mode === 'read') {
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
        <Control onChangeMode={function(_mode) {
          this.setState({mode : _mode})
        }.bind(this)}/>


        {/* mode값에 따라서 ReadContent / CreateContent로 변환 */}
        {_article}
      </div>
    )
  }
}
