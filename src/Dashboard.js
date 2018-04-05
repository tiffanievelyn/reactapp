import React, {Component} from 'react';
import {PageHeader} from 'react-bootstrap';

import strings from './_resources/Strings';

class Dashboard extends Component {
    
    render() {
        return (
            <PageHeader>
                {strings.label_dashboard}
            </PageHeader>
        )
    }
}

export default Dashboard;