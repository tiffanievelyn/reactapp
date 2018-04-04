import React, {Component} from 'react';

import strings from './_resources/Strings';

class Dashboard extends Component {
    
    render() {
        return (
            <div className="Dashboard">
                <h1>{strings.label_dashboard}</h1>
            </div>
        )
    }
}

export default Dashboard;