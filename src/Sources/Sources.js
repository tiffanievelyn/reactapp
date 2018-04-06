import React, {Component} from 'react';
import { PageHeader, Table } from 'react-bootstrap';
import axios from 'axios';
import strings from '../_resources/Strings';

import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import { connect } from 'react-redux';
import { showSurvey, hideSurvey, addSurvey } from '../_actions/survey-action.js';

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
        for (var i=0; i < this.state.surveyList.length ; i++){
            this.props.addSurvey(this.state.surveyList[i]);
        }
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
                <tr>
                <td>{survey.surveyId}</td>
                <td>{survey.name}</td>
                <td>{survey.creationDate}</td>
                <td>Delete | Edit</td>
                </tr>
            ))            
        }

        return(
            <div>
                <PageHeader>
                    {strings.label_sources}
                </PageHeader>
                <form>
                    <FormGroup controlId="formControlsFile">
                        <ControlLabel>File (does nothing)</ControlLabel>
                        <FormControl type="file" />
                    </FormGroup>
                </form>
                <p>Visibility: {this.props.surveyVisibility + ''}</p>
                <button className='button' onClick={this.handleClick}>Click Me</button>
                <button className='button' onClick={this.onHideSurvey}>Hide</button>
                
                <Table striped bordered condensed hover>
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                        </tr>
                    </thead>
                    <tbody>
                            {listSurvey}
                        
                    </tbody>
                </Table>
                
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
    onHideSurvey: hideSurvey,
    addSurvey:addSurvey
}

export default connect(mapStateToProps, mapActionToProps)(Sources);