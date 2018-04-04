import React, { Component } from 'react';

import strings from './_resources/Strings';

class Responses extends Component{
    render() {
        return (
            <div className="Responses">
                <h1>{strings.label_responses}</h1>                
            </div>
        )
    }
}

export default Responses;