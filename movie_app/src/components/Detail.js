import React, { Component } from 'react'

export default class detail extends Component {

    // 암묵적인 필드로 props가 있음. 

    componentDidMount() {
        if(this.props.location.state == undefined) {
            // history props를 이용해서 redirect to root
            this.props.history.push("/")
        }
    }

    render() {
        const {location} = this.props;
        // render()가 componentDidMount()보다 먼저 호출되므로
        // location 객체가 없다면 에러가 나기 때문에
        // 안정성 처리
        if(location.state) {
            return <span>{location.state.title}</span>;
        } else {
            return null;
        }
    }
}
