import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Grid, Row, Col }  from 'react-bootstrap/lib';

import strings from './resources/Strings';
import Navigation from './Navigation';
import Dashboard from './Dashboard';

class App extends Component {
	render() {
		strings.setLanguage('de');
		return (
			/*
			<div className="App">
				<div className="App-header">
					<img src={logo} className="App-logo"/>
					<h2>Welcome to React</h2>
				</div>
			</div>
			*/
			//notes: to implement side navigation, create a grid?
			<div className="App">
				<Navigation width="6%"/>
				<Dashboard width="94%"/>
			</div>
		);
	}
}

export default App;
