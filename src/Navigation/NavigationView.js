import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import { FaGlobe, FaOptinMonster, FaDashboard, FaFileText, FaLightbulbO, FaFolderOpen, FaCog, FaSmileO, FaQuestionCircle} from 'react-icons/lib/fa';
import './Navigation.css';
import strings from '../_resources/Strings';

export const NavigationView = (props) => {
    return(
        <div style={{width: props.width}} className="SideNav">
            <FaGlobe className="App-logo"/>
            <hr width="80%"/>
            <NavLink to="/userprofile" onClick={props.pageUser}>
                <div className="SideNav-item">
                    <FaOptinMonster className="SideNav-big-icon"/>
                    <p>{strings.label_user}</p>
                </div>
            </NavLink>            
            <NavLink to="/dashboard" onClick={props.pageDashboard}>
                <div className="SideNav-item">
                    <FaDashboard className="SideNav-big-icon"/>
                    <p>{strings.label_dashboard}</p>
                </div>
            </NavLink>
            <NavLink to="/responses" onClick={props.pageResponses}>
                <div className="SideNav-item">
                    <FaFileText className="SideNav-big-icon"/>
                    <p>{strings.label_responses}</p>
                </div>
            </NavLink>            
            <NavLink to="/insights" onClick={props.pageInsights}>
                <div className="SideNav-item">
                    <FaLightbulbO className="SideNav-big-icon"/>
                    <p>{strings.label_insights}</p>
                </div>
            </NavLink>
            <NavLink to="/sources" onClick={props.pageSources}>
                <div className="SideNav-item">
                    <FaFolderOpen className="SideNav-big-icon"/>
                    <p>{strings.label_sources}</p>
                </div>
            </NavLink>
            <hr width="80%"/>
            <NavLink to="/settings" onClick={props.pageSettings}>
                <div className="SideNav-item">
                    <FaCog className="SideNav-small-icon"/>
                </div>
            </NavLink>
            <NavLink to="" onClick={props.pageFeedback}>
                <div className="SideNav-item">
                    <FaSmileO className="SideNav-small-icon"/>
                </div>
            </NavLink>
            <NavLink to="" onClick={props.pageHelp}>
                <div className="SideNav-item">
                    <FaQuestionCircle className="SideNav-small-icon"/>
                </div>
            </NavLink>
        </div>
    )
}

