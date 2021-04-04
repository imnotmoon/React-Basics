
import React, { Component } from 'react'; 

export default class UpdateContent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            id : this.props.data.id,
            title : this.props.data.title,
            desc : this.props.data.desc
        }
        this.inputFormHandler = this.inputFormHandler.bind(this)
    }

    inputFormHandler(e) {
        this.setState({[e.target.name] : e.target.value})
    }

    render() {
      // refactoring
    console.log(this.props.data)
    return (
        <article>
            <h1>Update</h1>
            <form action="/update_proc" method="post"
                onSubmit={function(e) {
                    // 페이지가 바뀌는 기본적인 동작을 마비시킴
                    e.preventDefault();

                    // App.state.component의 끝에 사용자가 입력한 내용을 추가해야함
                    this.props.onSubmit(
                        this.state.id,
                        this.state.title, 
                        this.state.desc
                    );
                }.bind(this)}
            >
                <input type="hidden" name="id" value = {this.state.id}></input>
                <p>
                    <input type='text' name="title" placeholder="title" value={this.state.title}
                        onChange={this.inputFormHandler}>
                    </input>
                </p>
                <p>
                    <textarea name="desc" placeholder="description" value={this.state.desc}
                        onChange={this.inputFormHandler}></textarea>
                </p>
                <p>
                    <input type="submit"></input>
                </p>
            </form>
        </article>
    )
    }
}