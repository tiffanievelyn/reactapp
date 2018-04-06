import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaGlobe, FaOptinMonster, FaDashboard, FaFileText, FaLightbulbO, FaFolderOpen, FaCog, FaSmileO, FaQuestionCircle} from 'react-icons/lib/fa';
import './Navigation.css';
import strings from '../_resources/Strings';

export const NavigationView = (props) => {
    return (
        <div style={{width: props.width}} className="SideNav">
            <FaGlobe className="App-logo"/>
            <hr width="80%"/>
            <NavLink to="/userprofile">
                <div className="SideNav-item">
                    <FaOptinMonster className="SideNav-big-icon"/>
                    <p>{strings.label_user}</p>
                </div>
            </NavLink>            
            <NavLink to="/dashboard">
                <div className="SideNav-item">
                    <FaDashboard className="SideNav-big-icon"/>
                    <p>{strings.label_dashboard}</p>
                </div>
            </NavLink>
            <NavLink to="/responses">
                <div className="SideNav-item">
                    <FaFileText className="SideNav-big-icon"/>
                    <p>{strings.label_responses}</p>
                </div>
            </NavLink>            
            <NavLink to="/insights">
                <div className="SideNav-item">
                    <FaLightbulbO className="SideNav-big-icon"/>
                    <p>{strings.label_insights}</p>
                </div>
            </NavLink>
            <NavLink to="/sources">
                <div className="SideNav-item">
                    <FaFolderOpen className="SideNav-big-icon"/>
                    <p>{strings.label_sources}</p>
                </div>
            </NavLink>
            <hr width="80%"/>
            <NavLink to="/settings">
                <div className="SideNav-item">
                    <FaCog className="SideNav-small-icon"/>
                </div>
            </NavLink>
            <NavLink to="">
                <div className="SideNav-item">
                    <FaSmileO className="SideNav-small-icon"/>
                </div>
            </NavLink>
            <NavLink to="">
                <div className="SideNav-item">
                    <FaQuestionCircle className="SideNav-small-icon"/>
                </div>
            </NavLink>
        </div>

    )
}