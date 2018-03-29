import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import './styles/Dashboard.css';

import strings from './resources/Strings';

class Dashboard extends Component {
    render() {
        strings.setLanguage('en');
        return (
            <div style={{width: this.props.width}} className="Dashboard">
                <h1>{strings.label_dashboard}</h1>
            </div>
        )
    }
}

export default Dashboard;