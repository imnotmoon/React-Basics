import React, { useState } from "react";
import Start from './Start'

import "./App.css";

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			name: '문상혁',
		};
	}
	render() {
		return (
			<div className="App">
				<Start name={this.state.name}/>
			</div>
		);
	}
}

function App_function() {
	const [name, setName] = useState('문상혁')

	return (
		<div className="App">
			<Start name={name}/>
		</div>
	)
}

export default App
