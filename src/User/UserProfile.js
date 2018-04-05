import React, { Component } from 'react';
import { PageHeader } from 'react-bootstrap';
import strings from '../_resources/Strings';

class UserProfile extends Component{
    render() {
        return (
            <PageHeader>
                {strings.label_user}              
            </PageHeader>
        )
    }
}

export default UserProfile;