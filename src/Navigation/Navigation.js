import React, {Component} from 'react';
import { NavigationView } from './NavigationView';

class Navigation extends Component {
	render() {
		return ( 
			<NavigationView
				width={this.props.width}/>
		)
	}
}

export default Navigation;