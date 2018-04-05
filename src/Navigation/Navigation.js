import React, {Component} from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { FaGlobe, FaOptinMonster, FaDashboard, FaFileText, FaLightbulbO, FaFolderOpen} from 'react-icons/lib/fa';
import { Nav, NavItem }  from 'react-bootstrap/lib';

import './Navigation.css';
import strings from '../_resources/Strings';
import { changeToFrench, changeToGerman, changeToEnglish } from '../_actions/language-action';
import { languageSelector } from '../_selectors/language-selector';

class Navigation extends Component {
	constructor(props){
		super(props);
		this.state = {
			lang: 'en'
		};

		this.OnLanguageSelect = this.OnLanguageSelect.bind(this);
		this.changeLanguage = this.changeLanguage.bind(this);
		this.onChangeToFrench = this.onChangeToFrench.bind(this);
		this.onChangeToGerman = this.onChangeToGerman.bind(this);
		this.onChangeToEnglish = this.onChangeToEnglish.bind(this);
	}

	OnLanguageSelect(event){		
		this.setState({lang: event.target.value});
	}

	changeLanguage(){
		if (this.state.lang === 'fr'){
			this.onChangeToFrench();
		} else if (this.state.lang === 'en'){
			this.onChangeToEnglish();
		} else if (this.state.lang === 'de'){
			this.onChangeToGerman();
		}
	}

	onChangeToFrench(){
		this.props.onChangeToFrench();
	}

	onChangeToGerman(){
		this.props.onChangeToGerman();
	}

	onChangeToEnglish(){
		this.props.onChangeToEnglish();
	}

	render() {
		

		return ( 
			<Nav style={{width: this.props.width}} className="SideNav" stacked >
				<FaGlobe className="App-logo"/>
				<hr width="80%"/>
				<NavItem className="SideNav-item"><NavLink to="/userprofile">
					<FaOptinMonster className="SideNav-user-icon"/>
					<p>{strings.label_user}</p>
				</NavLink></NavItem>
				<NavItem className="SideNav-item"><NavLink to="/dashboard">
					<FaDashboard className="SideNav-user-icon"/>
					<p>{strings.label_dashboard}</p>
				</NavLink></NavItem>
				<NavItem className="SideNav-item"><NavLink to="/responses">
					<FaFileText className="SideNav-user-icon"/>
					<p>{strings.label_responses}</p>
				</NavLink></NavItem>
				<NavItem className="SideNav-item"><NavLink to="/insights">
					<FaLightbulbO className="SideNav-user-icon"/>
					<p>{strings.label_insights}</p>
				</NavLink></NavItem>
				<NavItem className="SideNav-item"><NavLink to="/sources">
					<FaFolderOpen className="SideNav-user-icon"/>
					<p>{strings.label_sources}</p>
				</NavLink></NavItem>

				<div className="languageName">
					<p>Language:</p>
					<form onSubmit={this.changeLanguage}>
						<select value={this.state.lang} onChange={this.OnLanguageSelect}>
							<option value="en">English</option>
							<option value="fr">French</option>
							<option value="de">German</option>
						</select>
						<input type="submit" value="Change"/>
					</form>
				</div>
			</Nav>
		)
	}
}

const mapStateToProps = (state,props) => {
	return{
		language: languageSelector(state)
	}
  }

const mapActionToProps = {
	onChangeToFrench: changeToFrench,
	onChangeToGerman: changeToGerman,
	onChangeToEnglish: changeToEnglish
}

export default connect(mapStateToProps, mapActionToProps)(Navigation);