import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import { FaGlobe, FaOptinMonster, FaDashboard, FaFileText, FaLightbulbO, FaFolderOpen, FaCog, FaSmileO, FaQuestionCircle} from 'react-icons/lib/fa';
import './Navigation.css';
import strings from '../_resources/Strings';

import { PageLocation } from '../_actions/page-action';

class NavigationView extends Component {
    constructor(props){
        super(props);

        this.pageUser=this.pageUser.bind(this);
        this.pageDashboard=this.pageDashboard.bind(this);
        this.pageResponses=this.pageResponses.bind(this);
        this.pageInsights=this.pageInsights.bind(this);
        this.pageSources=this.pageSources.bind(this);
        this.pageSettings=this.pageSettings.bind(this);
        this.pageFeedback=this.pageFeedback.bind(this);
        this.pageHelp=this.pageHelp.bind(this);
    }
    pageUser() {
        this.props.onChangePage(PageLocation.USER);
    }
    pageDashboard() {
        this.props.onChangePage(PageLocation.DASHBOARD);
    }
    pageResponses() {
        this.props.onChangePage(PageLocation.RESPONSES);
    }
    pageInsights() {
        this.props.onChangePage(PageLocation.INSIGHTS);
    }
    pageSources() {
        this.props.onChangePage(PageLocation.SOURCES);
    }
    pageSettings() {
        this.props.onChangePage(PageLocation.SETTINGS);
    }
    pageFeedback() {
        this.props.onChangePage(PageLocation.FEEDBACK);
    }
    pageHelp() {
        this.props.onChangePage(PageLocation.HELP);
    }

    render(){
        return(
            <div style={{width: this.props.width}} className="SideNav">
                <FaGlobe className="App-logo"/>
                <hr width="80%"/>
                <NavLink to="/userprofile" onClick={this.pageUser}>
                    <div className="SideNav-item">
                        <FaOptinMonster className="SideNav-big-icon"/>
                        <p>{strings.label_user}</p>
                    </div>
                </NavLink>            
                <NavLink to="/dashboard" onClick={this.pageDashboard}>
                    <div className="SideNav-item">
                        <FaDashboard className="SideNav-big-icon"/>
                        <p>{strings.label_dashboard}</p>
                    </div>
                </NavLink>
                <NavLink to="/responses" onClick={this.pageResponses}>
                    <div className="SideNav-item">
                        <FaFileText className="SideNav-big-icon"/>
                        <p>{strings.label_responses}</p>
                    </div>
                </NavLink>            
                <NavLink to="/insights" onClick={this.pageInsights}>
                    <div className="SideNav-item">
                        <FaLightbulbO className="SideNav-big-icon"/>
                        <p>{strings.label_insights}</p>
                    </div>
                </NavLink>
                <NavLink to="/sources" onClick={this.pageSources}>
                    <div className="SideNav-item">
                        <FaFolderOpen className="SideNav-big-icon"/>
                        <p>{strings.label_sources}</p>
                    </div>
                </NavLink>
                <hr width="80%"/>
                <NavLink to="/settings" onClick={this.pageSettings}>
                    <div className="SideNav-item">
                        <FaCog className="SideNav-small-icon"/>
                    </div>
                </NavLink>
                <NavLink to="" onClick={this.pageFeedback}>
                    <div className="SideNav-item">
                        <FaSmileO className="SideNav-small-icon"/>
                    </div>
                </NavLink>
                <NavLink to="" onClick={this.pageHelp}>
                    <div className="SideNav-item">
                        <FaQuestionCircle className="SideNav-small-icon"/>
                    </div>
                </NavLink>
            </div>
        )
    }
} 

export default NavigationView;