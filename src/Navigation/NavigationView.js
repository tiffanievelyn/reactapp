import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaGlobe, FaOptinMonster, FaDashboard, FaFileText, FaLightbulbO, FaFolderOpen, FaCog, FaSmileO, FaQuestionCircle} from 'react-icons/lib/fa';
import { Nav, NavItem }  from 'react-bootstrap/lib';
import './Navigation.css';
import strings from '../_resources/Strings';

export const NavigationView = (props) => {
    return (
        <Nav style={{width: props.width}} className="SideNav" stacked >
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
            <hr width="80%"/>
            <NavItem className="SideNav-item-settings"><NavLink to="/settings">
                <FaCog className="SideNav-setting-icon"/>
            </NavLink></NavItem>
            <NavItem className="SideNav-item-settings">
                <FaSmileO className="SideNav-setting-icon"/>
            </NavItem>
            <NavItem className="SideNav-item-settings">
                <FaQuestionCircle className="SideNav-setting-icon"/>
            </NavItem>
        </Nav>  
    )
}