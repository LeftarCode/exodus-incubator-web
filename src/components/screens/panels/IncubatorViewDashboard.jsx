import React, { Component } from 'react';
import '../../../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../../styles/components/screens/panels/incubator-view-dashboard.scss'
import cookie from 'react-cookies';
import axios from 'axios';
import { PercentageProgressBar } from '../../PercentageProgressBar';

export class IncubatorViewDashboard extends Component {

	constructor(props) {
		super(props);
		this.state = {
			points: props.user.points,
			rank: props.user.rank,
			user: props.user
		}
	}

	

	render() {
		return (
			<div id="incubator-view-dashboard" className="col-10 offset-1">
				<h3>Pulpit</h3>
				<div className="container-fluid">
					<div className="row">
						<div className="col-4 statistics-card">
							<div className="statistics-card-wrapper">
								<h6 className="statistics-title">Punkty</h6>
								<div className="statistics-wrapper">
									<div className="score">
										<h3 className="count" dangerouslySetInnerHTML={{__html: this.state.points}}></h3>
										<p className="percentage"><i className="fas fa-arrow-down"></i> 13.6%</p>
									</div>
									<div className="graph">

									</div>
								</div>
							</div>
						</div>
						<div className="col-4 statistics-card">
							<div className="statistics-card-wrapper">
								<h6 className="statistics-title">Ranga</h6>
								<div className="statistics-wrapper">
									<div className="score">
										<h3 className="count" dangerouslySetInnerHTML={{__html: this.state.rank}}></h3>
									</div>
								</div>
							</div>
						</div>
						<div className="col-4 statistics-card">
							<div className="statistics-card-wrapper">
								<h6 className="statistics-title">Zarobek</h6>
								<div className="statistics-wrapper">
									<div className="score">
										<h3 className="count">100 PLN</h3>
										<p className="percentage"><i className="fas fa-arrow-down"></i> 13.6%</p>
									</div>
									<div className="graph">

									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-12 last-activities-card">
							<h5>Ostatnie aktywności</h5>
						</div>
					</div>
					<div className="row">
						<div className="abilities-card col-9">
							<div className="abilities-card-wrapper">
								<h5>Zdolności</h5>
								<table className="table table-striped">
									<thead>
									<tr>
										<th>UMIEJĘTNOŚĆ</th>
										<th>WYNIK</th>
										<th>PUNKTY</th>
									</tr>
									</thead>
									<tbody>
									<tr>
										<td><img src="../../../imgs/php.png" alt=""/> Programowanie PHP</td>
										<td><PercentageProgressBar percentage="40%"/></td>
										<td>1500 PKT</td>
									</tr>
									<tr>
										<td><img src="../../../imgs/php.png" alt=""/> Programowanie PHP</td>
										<td><PercentageProgressBar percentage="10%"/></td>
										<td>1500 PKT</td>
									</tr>
									<tr>
										<td><img src="../../../imgs/php.png" alt=""/> Programowanie PHP</td>
										<td><PercentageProgressBar percentage="100%"/></td>
										<td>1500 PKT</td>
									</tr>
									</tbody>
								</table>
							</div>
						</div>
						<div className="additional-statistics-card col-3">
							<div className="additional-statistics-card-wrapper">
								<h5>Statystyki</h5>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default IncubatorViewDashboard;
