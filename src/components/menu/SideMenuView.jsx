import React, { Component } from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../styles/components/menu/side-menu-view.scss';

export class SideMenuView extends Component {

	render() {
		return (
            <div className="side-menu col-2">
                <div className="menu-title-wrapper">
                    <p className="menu-title">MENU</p>
                </div>
                <ul>
                    {this.props.children}
                </ul>
            </div>
		);
	}
}

export default SideMenuView;
