import React, { Component } from 'react';
import { PageHeader } from 'react-bootstrap';
import strings from '../_resources/Strings';

class Responses extends Component{
    render() {
        return (
            <PageHeader>
                {strings.label_responses}
            </PageHeader>
        )
    }
}

export default Responses;