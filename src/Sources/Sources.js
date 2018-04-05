import React, {Component} from 'react';
import { PageHeader } from 'react-bootstrap';
import axios from 'axios';
import strings from '../_resources/Strings';

import { connect } from 'react-redux';
import { showSurvey, hideSurvey } from '../_actions/survey-action.js';

import { surveyVisibilitySelector } from '../_selectors/survey-selector';

class Sources extends Component {
    constructor(props) {
        super(props)
        this.state = {
            surveyVisibility: false,
            surveyList: []
        }

        this.handleClick = this.handleClick.bind(this);
        this.onShowSurvey = this.onShowSurvey.bind(this);
        this.onHideSurvey = this.onHideSurvey.bind(this);
    }

    onShowSurvey() {
        this.props.onShowSurvey();
    }

    onHideSurvey() {
        this.props.onHideSurvey();
    }

    handleClick() {
        axios.get('http://localhost:63290/api/surveys').then(response => {
            this.setState({surveyList: response.data});
            this.onShowSurvey();
        })
    }

    render() {
        let listSurvey;
        if (this.props.surveyVisibility){
            listSurvey = this.state.surveyList.map(survey => (
                <li key={survey.surveyId}>
                    {survey.name} {survey.creationDate}
                </li>
            ))            
        }

        return(
            <div>
                <PageHeader>
                    {strings.label_sources}
                </PageHeader>
                <p>Visibility: {this.props.surveyVisibility + ''}</p>
                <button className='button' onClick={this.handleClick}>Click Me</button>
                <button className='button' onClick={this.onHideSurvey}>Hide</button>
                <ul>
                    {listSurvey}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state,props) => {
	return{
		surveyVisibility: surveyVisibilitySelector(state)
	}
  }

const mapActionToProps = {
	onShowSurvey: showSurvey,
	onHideSurvey: hideSurvey
}

export default connect(mapStateToProps, mapActionToProps)(Sources);