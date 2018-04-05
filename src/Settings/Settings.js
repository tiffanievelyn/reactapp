import React, {Component} from 'react';
import { PageHeader, FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';
import strings from '../_resources/Strings';
import { connect } from 'react-redux';

import { changeToFrench, changeToGerman, changeToEnglish } from '../_actions/language-action';
import { languageSelector } from '../_selectors/language-selector';

class Settings extends Component {
    constructor(props){
        super(props);
        this.state = {
			lang: this.props.language
		};

		this.OnLanguageSelect = this.OnLanguageSelect.bind(this);
		this.changeLanguage = this.changeLanguage.bind(this);
		this.onChangeToFrench = this.onChangeToFrench.bind(this);
		this.onChangeToGerman = this.onChangeToGerman.bind(this);
		this.onChangeToEnglish = this.onChangeToEnglish.bind(this);
    }

    OnLanguageSelect(event){		
		this.setState({lang: event.target.value});
	}

	changeLanguage(){
		if (this.state.lang === 'fr'){
			this.onChangeToFrench();
		} else if (this.state.lang === 'en'){
			this.onChangeToEnglish();
		} else if (this.state.lang === 'de'){
			this.onChangeToGerman();
		}
	}

	onChangeToFrench(){
		this.props.onChangeToFrench();
	}

	onChangeToGerman(){
		this.props.onChangeToGerman();
	}

	onChangeToEnglish(){
		this.props.onChangeToEnglish();
	}


    render(){
        return(
            <div>
                <PageHeader>
                    {strings.label_settings}
                </PageHeader>
                <form onSubmit={this.changeLanguage}>
                    <FormGroup controlId="formControlsFile">
                        <ControlLabel>File (does nothing)</ControlLabel>
                        <FormControl type="file" />
                    </FormGroup>
                    <FormGroup controlId="formControlsSelect">
                        <ControlLabel>{strings.label_selectLanguage}</ControlLabel>
                        <FormControl componentClass="select" placeholder="select" value={this.props.lang} onChange={this.OnLanguageSelect}>
                            <option value="en">{strings.language_english}</option>
                            <option value="fr">{strings.language_french}</option>
                            <option value="de">{strings.language_german}</option>
                        </FormControl>
                    </FormGroup>
                    <Button type="submit">{strings.action_saveChanges}</Button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state,props) => {
	return{
		language: languageSelector(state)
	}
  }

const mapActionToProps = {
	onChangeToFrench: changeToFrench,
	onChangeToGerman: changeToGerman,
	onChangeToEnglish: changeToEnglish
}

export default connect(mapStateToProps, mapActionToProps)(Settings);