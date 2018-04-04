import React, { Component } from 'react';
import strings from './_resources/Strings';

class UserProfile extends Component{
    render() {
        return (
            <div className="UserProfile">
                <h1>{strings.label_user}</h1>                
            </div>
        )
    }
}

export default UserProfile;