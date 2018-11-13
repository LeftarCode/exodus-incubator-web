import React, { Component } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../styles/components/percentage-progress-bar.scss';
import axios from 'axios';
import cookie from 'react-cookies';

export class PercentageProgressBar extends Component {

	render() {
		return (
			<div className="percentage-progress-bar">
                <div className="percentage-progress-bar-wrapper" style={{width: this.props.percentage}}>
                    <div className="indicator"></div>
                </div>
			</div>
		);
	}
}

export default PercentageProgressBar;
