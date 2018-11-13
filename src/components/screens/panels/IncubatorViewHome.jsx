import React, { Component } from 'react';
import '../../../../node_modules/bootstrap/dist/css/bootstrap.css';
import Article from '../../Article';

export class IncubatorViewHome extends Component {

	render() {
		return (
			<div id="incubator-view-home">
				<Article/>
				<Article/>
				<Article/>
				<Article/>
				<Article/>
			</div>
		);
	}
}

export default IncubatorViewHome;
