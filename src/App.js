import React, { Component } from 'react';
import './App.css';
import { Route, HashRouter } from 'react-router-dom';

import strings from './_resources/Strings';
import { connect } from 'react-redux';
import { languageSelector } from './_selectors/language-selector';

import Navigation from './Navigation/Navigation';
import Dashboard from './Dashboard/Dashboard';
import Responses from './Responses/Responses';
import Insights from './Insights/Insights';
import Sources from './Sources/Sources';
import UserProfile from './User/UserProfile';
import Settings from './Settings/Settings';

class App extends Component {
	render() {
		strings.setLanguage(this.props.language);
		return (
			//notes: to implement side navigation, create a grid?
			<div className="App">
				<HashRouter>
					<div>
						<div>
							<Navigation width='8%'/>
						</div>
						<div className="content" style={{width:'92%', right:0, top:0, bottom:0, position:'absolute', backgroundColor:'#DDDDDD'}}>			
							<Route path="/userprofile" component={UserProfile}/>		
							<Route path="/dashboard" component={Dashboard}/>
							<Route path="/responses" component={Responses}/>
							<Route path="/insights" component={Insights}/>
							<Route path="/sources" component={Sources}/>
							<Route path="/settings" component={Settings}/>
						</div>
					</div>
				</HashRouter>
			</div>
		);
	}
}

const mapStateToProps = (state,props) => {
	return{
		language: languageSelector(state)
	}
  }

export default connect(mapStateToProps)(App);
