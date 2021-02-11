import React, {Component} from 'react';

export default class TOC extends Component {
    render() {
        var lists = [];
        var data = this.props.data
        var i=0;

        // id는 React가 내부적으로 필요로 하는 prop이다.
        while(i<data.length) {
            lists.push(<li key={data[i].id}><a href={"/contents/"+data[i].id}
            onClick={function(id, e) {
                e.preventDefault();
                
                // App.js의 함수를 실행시킨다.
                this.props.onChangePage(id);
            }.bind(this, data[i].id)}
            data-id={data[i].id}>{data[i].title}</a></li>)
            
            i += 1;
        }
        return (
        <nav>
            <ul>
                {lists}
            </ul>
        </nav>
        )
    }
}