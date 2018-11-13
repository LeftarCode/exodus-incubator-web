import React, { Component } from 'react';
import '../../../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../../styles/components/screens/admin/incubator-view-admin-class-list.scss';
import axios from 'axios';

export class IncubatorViewAdminVerifyCodes extends Component {

    constructor(props) {
        super(props);

        this.state = {
            userToken: props.user.token,
            verifyCodes: []
        };
    }

    componentDidMount() {
        axios.get("http://localhost:1234/admin/verificationcodes", {headers: { 'Authorization': 'bearer ' + this.state.userToken }})
            .then((response) => {
                this.onGetVerificationCodes(response);
            }, (error) => {

            });
    }

    onGetVerificationCodes(response) {
        console.log(response);
        this.setState({
            verifyCodes: response.data
        });
    }

    createTable() {
        let table = this.state.verifyCodes.map((verifyCode, index) => {
            let row = [];
            row.push(<td>{index}</td>);
            row.push(<td>{index}</td>);

            return <tr>{row}</tr>
        });

        return table;
    }

	render() {
		return (
            <div className="col-12">
                <table className="table">
					<thead className="thead-dark">
						<tr>
							<th scope="col">#</th>
							<th scope="col">Klasa</th>
							<th scope="col">Kod weryfikacyjny</th>
							<th scope="col" style={{textAlign: "center"}}>Edytuj</th>
						</tr>
					</thead>
					<tbody>
					</tbody>
				</table>
            </div>
		);
	}
}

export default IncubatorViewAdminVerifyCodes;
