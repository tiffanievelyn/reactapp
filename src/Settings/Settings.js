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
    }

    OnLanguageSelect(event){		
		this.setState({lang: event.target.value});
	}

	changeLanguage(){
		if (this.state.lang === 'fr'){
			this.props.onChangeToFrench();
		} else if (this.state.lang === 'en'){
			this.props.onChangeToEnglish();
		} else if (this.state.lang === 'de'){
			this.props.onChangeToGerman();
		}
	}

    render(){
        return(
            <div>
                <PageHeader>
                    {strings.label_settings}
                </PageHeader>
                <form onSubmit={this.changeLanguage}>
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