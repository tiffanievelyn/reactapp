import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { FaGlobe, FaOptinMonster, FaDashboard, FaFileText, FaLightbulbO, FaFolderOpen} from 'react-icons/lib/fa';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem }  from 'react-bootstrap/lib';

import './styles/Navigation.css';

class Navigation extends Component {
	render() {
		return ( 
			<Nav style={{width: this.props.width}} className="SideNav" stacked >
				<FaGlobe className="App-logo"/>
				<hr width="80%"/>
				<NavItem className="SideNav-item" href="/home">
					<FaOptinMonster className="SideNav-user-icon"/>
					<p>User</p>
				</NavItem>
				<NavItem className="SideNav-item" href="/home">
					<FaDashboard className="SideNav-user-icon"/>
					<p>Dashboard</p>
				</NavItem>
				<NavItem className="SideNav-item" href="/home">
					<FaFileText className="SideNav-user-icon"/>
					<p>Responses</p>
				</NavItem>
				<NavItem className="SideNav-item" >
					<FaLightbulbO className="SideNav-user-icon"/>
					<p>Insights</p>
				</NavItem>
				<NavItem className="SideNav-item">
					<FaFolderOpen className="SideNav-user-icon"/>
					<p>Sources</p>
				</NavItem>
			</Nav>
		)
	}
}

export default Navigation;