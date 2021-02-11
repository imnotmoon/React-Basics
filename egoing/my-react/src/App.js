import React, { Component } from 'react'
import TOC from './components/TOC';
import ReadContent from './components/ReadContent'
import CreateContent from './components/CreateContent'
import UpdateContent from './components/UpdateContent'
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

  getContent() {
    var _title, _desc, _article = null;

    if(this.state.mode === 'welcome') {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _article = <ReadContent title={_title} desc={_desc}/>
    } 
    else if(this.state.mode === 'read') {
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
        //! 방법 1 : 푸시. 원본을 바꾼다. 비추천. 성능이 안좋아질 수 있다.
        // 원본을 바꾸는건
        // shoudComponentUpdate를 호출할때 this.state.props와 newProps가 같아져서
        // 이 메소드를 못씀
        // => render()를 호출할 조건을 설정할 수 없음
        // => 성능 향상의 여지가 없다.
        //* this.state.contents.push({id: this.max_content_id, title : _title, desc : _desc});
        //* this.setState({
        //*   contents : this.state.contents
        //* });
        //! 방법 2 : concat. 원래 배열에서 카피해 새로운 배열을 만든 다음 원소를 추가한 후 대입. 원본을 바꾸지 않는다.
        //! IMMUTABLE : 원본을 바꾸지 않아서 !//
        this.setState({
          // 새 배열로 교체.
          contents : this.state.contents.concat({
            id : this.max_content_id, 
            title : _title,
            desc : _desc
          }),
          mode : 'read',
          selected_content_id : this.max_content_id
        })

        // 객체의 원소 추가는 Object.assign({}, obj)

      }.bind(this)}/>
    } else if(this.state.mode === 'update') {
      var _content = {};
      this.state.contents.forEach((data) => {
        if(data.id == this.state.selected_content_id) {
          _content = data;
        }
      })
      _article = <UpdateContent data={_content} onSubmit = {
        // 인자는 컴포넌트에서 채워서 얘를 호출할것.
        function(_id, _title, _desc) {
          // 업데이트된 인자를 받아와서 state를 수정
          // 복제해서 새로운 배열을 만듦.
          var _content = Array.from(this.state.contents);
          var i=0;
          while(i<_content.length) {
            if(_content[i].id === _id) {
              _content[i] = {id : _id, title: _title, desc : _desc}
            }
            i += 1;
          }
          this.setState({
            // 수정된 _content로 set state.
            contents: _content, 
            mode : 'read'
          })
      }.bind(this)}/>
    } else if(this.state.mode === 'delete') {
      
    }

    return _article
  }

  render() {
    
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
          if(_mode === 'delete') {
            if(window.confirm('???')) {
              var _contents = Array.from(this.state.contents)
              this.state.contents.forEach((content) => {
                if(content.id === this.state.selected_content_id){
                  _contents.splice(_contents.indexOf(content), 1)
                  console.log(_contents)
                }
              })
              this.setState({
                mode : 'welcome',
                contents : _contents
              })
              alert("DELETEED")
            }
          } else {
            this.setState({mode : _mode})
          }
        }.bind(this)}/>


        {/* mode값에 따라서 ReadContent / CreateContent로 변환 */}
        {this.getContent()}
      </div>
    )
  }
}
