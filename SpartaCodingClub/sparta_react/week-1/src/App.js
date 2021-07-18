import "./App.css";

function App() {
	const styles = {
		border: "1px solid #eee",
		padding: "20px",
		display: "flex",
		width: "100vw",
		maxWidth: "400px",
		margin: "30px auto",
		flexDirection: "column",
	};

	return (
		<div className="App">
			<div style={styles}>
				<h1 style={{ color: "green" }}>안녕하세요!</h1>
				<hr style={{ width: "100%" }} />
				<p style={{ textAlign: "left" }}>이름을 입력해주세요.</p>
				<input type="text" />
			</div>
		</div>
	);
}

export default App;
