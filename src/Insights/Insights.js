import React, { Component } from 'react';
import { PageHeader } from 'react-bootstrap';
import strings from '../_resources/Strings';

class Insights extends Component {
    render(){
        return (
            <PageHeader>
                {strings.label_insights}
            </PageHeader>
        )
    }
}

export default Insights;