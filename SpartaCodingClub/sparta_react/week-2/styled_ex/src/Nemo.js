import React, { useState } from "react";

const Nemo = () => {
	const [count, setCount] = useState(3);

	const addNemo = () => {
		setCount((count) => count + 1);
	};

	const removeNemo = () => {
		count > 0 && setCount((count) => count - 1);
	};

	return (
		<div>
			{Array.from({ length: count }, (_, i) => i).map((item, idx) => {
				return <NemoNemo key={idx} />;
			})}
			<button onClick={addNemo}>추가하기</button>
			<button onClick={removeNemo}>제거하기</button>
		</div>
	);
};

const NemoNemo = () => {
	return (
		<div
			style={{
				width: "100px",
				height: "100px",
				margin: "10px",
				background: "#eee",
			}}
		>
			Nemo
		</div>
	);
};

export default Nemo;
