import React, {Component} from 'react';
import { NavigationView } from './NavigationView';
import { Feedback } from './FeedbackModal';
import { connect } from 'react-redux';

import { SetPageLocation } from '../_actions/page-action.js';
import { pageSelector } from '../_selectors/page-selector';
import { PageLocation } from '../_actions/page-action';

class Navigation extends Component {
	constructor(props){
		super(props);
		this.state = {
			showFeedback:false,
			page:this.props.page,
			lang:this.props.language
        }

		this.handleFeedbackShow = this.handleFeedbackShow.bind(this);
		this.handleFeedbackHide = this.handleFeedbackHide.bind(this);
		this.onChangePage = this.onChangePage.bind(this);
		this.pageUser=this.pageUser.bind(this);
        this.pageDashboard=this.pageDashboard.bind(this);
        this.pageResponses=this.pageResponses.bind(this);
        this.pageInsights=this.pageInsights.bind(this);
        this.pageSources=this.pageSources.bind(this);
        this.pageSettings=this.pageSettings.bind(this);
        this.pageFeedback=this.pageFeedback.bind(this);
        this.pageHelp=this.pageHelp.bind(this);
	}
	handleFeedbackShow() {
        this.setState({showFeedback: true});
    }
    handleFeedbackHide() {
        this.setState({showFeedback: false});
    }
    pageUser() {
        this.onChangePage(PageLocation.USER);
    }
    pageDashboard() {
        this.onChangePage(PageLocation.DASHBOARD);
    }
    pageResponses() {
        this.onChangePage(PageLocation.RESPONSES);
    }
    pageInsights() {
        this.onChangePage(PageLocation.INSIGHTS);
    }
    pageSources() {
        this.onChangePage(PageLocation.SOURCES);
    }
    pageSettings() {
        this.onChangePage(PageLocation.SETTINGS);
    }
    pageFeedback() {
		this.onChangePage(PageLocation.FEEDBACK);
        this.handleFeedbackShow();
    }
    pageHelp() {
        this.onChangePage(PageLocation.HELP);
    }
	onChangePage(pagelocation){	
		this.setState({page: pagelocation});
		this.props.changePage(pagelocation);
	}

	render() {
		return ( 
			<div>
				<NavigationView
					width={this.props.width}
					pageUser={this.pageUser}
					pageDashboard={this.pageDashboard}
					pageResponses={this.pageResponses}
					pageInsights={this.pageInsights}
					pageSettings={this.pageSettings}
					pageFeedback={this.pageFeedback}
					pageHelp={this.pageHelp}/>
				<Feedback show={this.state.showFeedback} handleHide={this.handleFeedbackHide}/>
			</div>
		)
	}
}

const mapStateToProps = (state,props) => {
	return{
		page: pageSelector(state)
	}
  }

const mapActionToProps = {
	changePage: SetPageLocation
}

export default connect(mapStateToProps, mapActionToProps)(Navigation);