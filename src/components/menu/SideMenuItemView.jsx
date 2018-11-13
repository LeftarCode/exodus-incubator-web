import React, { Component } from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../styles/components/screens/incubator-view.scss';

export class SideMenuItemView extends Component {

	render() {
		return (
            <li><a href={this.props.href}><i className={this.props.iconClasses}></i> {this.props.text}</a></li>
		);
	}
}

export default SideMenuItemView;
