import React, { Component } from 'react'; 

export default class CreateContent extends Component {
    render() {
      // refactoring
    return (
        <article>
            <h1>Create</h1>
            <form action="/create_procee" method="post"
                onSubmit={function(e) {
                    // 페이지가 바뀌는 기본적인 동작을 마비시킴
                    e.preventDefault();

                    // App.state.component의 끝에 사용자가 입력한 내용을 추가해야함
                    this.props.onSubmit(
                        e.target.title.value, 
                        e.target.desc.value
                    );
                }.bind(this)}
            >
                <p>
                    <input type='text' name="title" placeholder="title">
                    </input>
                </p>
                <p>
                    <textarea name="desc" placeholder="description"></textarea>
                </p>
                <p>
                    <input type="submit"></input>
                </p>
            </form>
        </article>
    )
    }
}