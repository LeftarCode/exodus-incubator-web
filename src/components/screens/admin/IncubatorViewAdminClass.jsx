import React, { Component } from 'react';
import '../../../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../../styles/components/screens/admin/incubator-view-admin-class.scss';
import { IncubatorViewAdminTile } from '../admin/IncubatorViewAdminTile';
import { ButtonModal } from '../../ButtonModal';
import { Modal } from '../../Modal';
import axios from 'axios';
import queryString from 'query-string';

export class IncubatorViewAdminClass extends Component {

    constructor(props) {
        super(props);
        this.state = {
            class: {
                users: []
            },
            userToken: props.user.token,
            users: [],
            selectedUserToAdd: {},
            selectedUserToRemove: {},
            classID: this.props.match.params.id
        };
    }

    componentDidMount() {
        axios.get('http://localhost:1234/class/' + this.state.classID, {headers: { 'Authorization': 'bearer ' + this.state.userToken }})
            .then((response) => {
                this.onGetClassResponse(response);
            }, (error) => {
                this.onGetClassResponse(error.response);
            });
        axios.get('http://localhost:1234/users', {headers: { 'Authorization': 'bearer ' + this.state.userToken }})
            .then((response) => {
                this.onGetUsersResponse(response);
            }, (error) => {

            });
    }

    addSelectedUserToClass() {
        axios.post("http://localhost:1234/class/" + this.state.classID + "/add/" + this.state.selectedUserToAdd.id, null, {headers: { 'Authorization': 'bearer ' + this.state.userToken }})
            .then((response) => {
                window.location.reload();
            }, (error) => {

            })
    }

    removeUserFromClass() {
        let toDelete = this.state.selectedUserToRemove;
        axios.delete("http://localhost:1234/class/" + this.state.classID + "/user/" + toDelete, {headers: { 'Authorization': 'bearer ' + this.state.userToken }})
            .then((response) => {
                window.location.reload();
            }, (error) => {

            });
    }

    removeCurrentClass() {
        console.log(this.props);
        axios.delete("http://localhost:1234/class/" + this.state.classID, {headers: { 'Authorization': 'bearer ' + this.state.userToken }})
            .then((response) => {
                window.location.reload();
            }, (error) => {

            })
    }

    onRemoveClassResponse(response) {
        this.props.history.goBack();
    }

    onGetClassResponse(response) {
        console.log(response);
        switch(response.status) {
            case 200:
                this.setState({
                    class: response.data
                });
                break;
            case 404:
                this.props.history.push("/panel/admin/classes");
                break;
        }
    }

    onGetUsersResponse(response) {
        this.setState({
            users: response.data.users,
            selectedUserToAdd: response.data.users[0]
        });
    }

    selectUserToRemove(userID) {
        this.setState({
            selectedUserToRemove: userID
        });
    }

    onUserToAddChange(e) {
        this.setState({
            selectedUserToAdd: e.target.value
        });
    }

    createAddUserToClassModal() {
        let options = [];
        let modal = this.state.users.map((user, index) => {
            return <option key={index} value={user} onChange={this.onUserToAddChange}>{user.name} - {user.rank}</option>
        });

        return <div className="form-group"><select className="form-control">{modal}</select></div>;
    }

    createTable() {
        let table = this.state.class.users.map((user, index) => {
			let row = [];
			row.push(<td key={1}>{index + 1}</td>);
			row.push(<td key={2}>{user.name}</td>);
			row.push(<td key={3}>{user.rank}</td>);
			row.push(
                <td key={4} style={{textAlign: "center"}}>
                    <a href="" data-toggle="modal" data-target="#remove-user-modal" onClick={() => {this.selectUserToRemove(user.id)}}>
                        <i className="fas fa-times-circle"></i>
                    </a>
                </td>
            );
			return <tr key={index}>{row}</tr>
        });
        
        return table;
    }

	render() {
        let table = this.createTable();
        let modal = this.createAddUserToClassModal();
		return (
            <div className="admin-class-view col-12">
                <div className="card" style={{width: "100%"}}>
                    <div className="card-body">
                        <h5 className="card-title">Klasa {this.state.class.name}</h5>
                        <p className="card-text">Członkowie klasy:</p>
                        <ButtonModal text="Dodaj nowego członka" target="#add-user-modal"/>
                        <table className="table">
                            <thead className="thead-dark">
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Imię i nazwisko</th>
                                    <th scope="col">Ranga</th>
                                    <th scope="col" style={{textAlign: "center"}}>Akcje</th>
                                </tr>
                            </thead>
                            <tbody>
                                {table}
                            </tbody>
                        </table>
                        <ButtonModal text="Usuń klasę" target="#remove-class-modal"/>
                    </div>
                </div>
                <Modal 
                    id="add-user-modal" 
                    title="Dodaj użytkownika do klasy:" 
                    successButton="Dodaj"
                    render={() => modal} 
                    onClick={()=>{this.addSelectedUserToClass()}}/>
                <Modal 
                    id="remove-user-modal"
                    title="Jesteś poewny?"
                    successButton="Usuń"
                    render={() => <p>Na pewno chcesz usunąć użytkownika z klasy?</p>}
                    onClick={()=>{this.removeUserFromClass()}}/>
                <Modal 
                    id="remove-class-modal" 
                    title="Usuń klasę" 
                    successButton="Usuń"
                    render={() => <p>Na pewno chcesz usunąć klasę?</p>} 
                    onClick={()=>{this.removeCurrentClass()}}/>
            </div>
		);
	}
}

export default IncubatorViewAdminClass;
