import React, {Component} from 'react';
import axios from 'axios';
import strings from './_resources/Strings';

class Sources extends Component {
    constructor() {
        super()
        this.state = {
            surveyList: []
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        axios.get('http://localhost:63290/api/surveys').then(response => {
            this.setState({surveyList: response.data});
            console.log(this.state.surveyList);
        })
    }

    render() {
        const listSurvey = this.state.surveyList.map(survey => (
            <li key={survey.surveyId}>
                {survey.name} {survey.creationDate}
            </li>
        ));

        return(
            <div>
                <h1>{strings.label_sources}</h1>
                <button className='button' onClick={this.handleClick}>Click Me</button>
                <ul>
                    {listSurvey}
                </ul>
            </div>
        )
    }
}

export default Sources;