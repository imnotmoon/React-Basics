import React from "react";
import LifecycleEx from "./LifecycleEx";

const App = () => {
	const [isShown, setIsShown] = React.useState(true);
	return (
		<div className="App">
			{isShown ? <LifecycleEx /> : null}
			<button
				onClick={() => {
					setIsShown(false);
				}}
			>
				사라져라
			</button>
		</div>
	);
};

export default App;
