import React, { Component } from 'react';
import '../../../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../../styles/components/screens/admin/incubator-view-admin-class-list.scss';
import { IncubatorViewAdminTile } from '../admin/IncubatorViewAdminTile';
import { Button } from '../../Button';
import { ButtonModal } from '../../ButtonModal';
import axios from 'axios';
import { Modal } from '../../Modal';

export class IncubatorViewAdminClassList extends Component {

	constructor(props) {
		super(props);

		this.state = {};
		this.state.classes = [];
		this.state.userToken = this.props.user.token;
		this.state.classToAdd = "";

		this.onClassNameChanged = this.onClassNameChanged.bind(this);
	}

	componentDidMount() {
		axios.get('http://localhost:1234/classes', {headers: { 'Authorization': 'bearer ' + this.state.userToken }})
			.then((response) => {
				this.onGetClassesResponse(response);
			}, (error) => {

			});
	}

	addClass() {
		axios.post('http://localhost:1234/class', {className: this.state.classToAdd}, {headers: { 'Authorization': 'bearer ' + this.state.userToken }})
			.then((response) => {
				this.onAddClassResponse(response);
			}, (error) => {

			});
	}

	onGetClassesResponse(response) {
		this.setState({
			classes: response.data
		});
	}

	onAddClassResponse(response) {
		window.location.reload();
	}

	onClassNameChanged(e) {
		this.setState({
			classToAdd: e.target.value
		});
	}

	createAddClassModal() {
		return <div className="form-group"><input type="text" className="form-control" onChange={this.onClassNameChanged}></input></div>;
	}

	createTable() {
		let table = this.state.classes.map((class_ins, index) => {
			let row = [];
			row.push(<td key={1}>{index + 1}</td>);
			row.push(<td key={2}>{class_ins.className}</td>);
			row.push(<td key={3}>{class_ins.membersCount}</td>);
			row.push(<td key={4} style={{textAlign: "center"}}><a href={"#/panel/admin/class/" + class_ins.id}><i className="fas fa-edit"></i></a></td>);
			return <tr key={index}>{row}</tr>
		});

		return table;
	}

	render() {
		let table = this.createTable();
		let modal = this.createAddClassModal();
		return (
            <div className="admin-class-view col-12">
                <table className="table">
					<thead className="thead-dark">
						<tr>
							<th scope="col">#</th>
							<th scope="col">Nazwa</th>
							<th scope="col">Liczba uczestników</th>
							<th scope="col" style={{textAlign: "center"}}>Edytuj</th>
						</tr>
					</thead>
					<tbody>
						{table}
					</tbody>
				</table>
				<ButtonModal text="Dodaj klasę" target="#add-class-modal"/>
                <Modal 
                    id="add-class-modal" 
                    title="Dodaj klasę:" 
                    successButton="Dodaj"
                    render={() => modal} 
                    onClick={()=>{this.addClass()}}/>
            </div>
		);
	}
}

export default IncubatorViewAdminClassList;
