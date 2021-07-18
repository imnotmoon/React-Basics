import React from "react";
import "./App.css";
// BucketList 컴포넌트를 import 해옵니다.
// import [컴포넌트 명] from [컴포넌트가 있는 파일경로];
import BucketList from "./BucketList";

function App() {
	return (
		<div className="App">
			<h1>내 버킷리스트</h1>
			{/* 컴포넌트를 넣어줍니다. */}
			<BucketList />
		</div>
	);
}

export default App;
