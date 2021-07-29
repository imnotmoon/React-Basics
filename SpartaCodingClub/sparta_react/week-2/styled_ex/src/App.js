import BucketList from "./BucketList";
import styled from "styled-components";
import React from "react";

// 클래스형 컴포넌트는 이렇게 생겼습니다!
class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			list: ["영화관 가기", "매일 책읽기", "수영 배우기"],
		};

		this.text = React.createRef();
	}

	addBucketList = () => {
		this.setState({ list: [...this.state.list, this.text.current.value] });
	};

	render() {
		return (
			<div className="App">
				<Container>
					<Title>내 버킷리스트</Title>
					<Line />
					<BucketList list={this.state.list} />
				</Container>
				<Input>
					<input type="text" ref={this.text} />
					<button onClick={this.addBucketList}> 추가하기 </button>
				</Input>
			</div>
		);
	}
}

const Input = styled.div`
	max-width: 350px;
	min-height: 80vh;
	background-color: #fff;
	padding: 16px;
	margin: 20px auto;
	border-radius: 5px;
	border: 1px solid #ddd;
`;

const Container = styled.div`
	max-width: 350px;
	min-height: 80vh;
	background-color: #fff;
	padding: 16px;
	margin: 20px auto;
	border-radius: 5px;
	border: 1px solid #ddd;
`;

const Title = styled.h1`
	color: slateblue;
	text-align: center;
`;

const Line = styled.hr`
	margin: 16px 0px;
	border: 1px dotted #ddd;
`;

export default App;
