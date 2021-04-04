import React, {Component} from 'react';

export default class TOC extends Component {

    shouldComponentUpdate(newProps, newState) {
        // 바뀐것도 없는데 매번 새롭게 render()를 호출하면 억울하지

        // 새로운 props값, 기존의 props 값
        // 즉 두가지 props값에 둘다 접근할 수 있다.
        //! console.log(newProps.data, this.props.data)

        //* return True : render()를 호출한다.
        //* return False : render()를 호출하지 않는다.

        if(this.props.data === newProps.data) {
            return false
        } else {
            return true
        }
    }

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