import React, { Component } from 'react';
import '../../../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../../styles/components/screens/panels/incubator-view-admin.scss';
import { IncubatorViewAdminTile } from '../admin/IncubatorViewAdminTile';
import { IncubatorViewAdminClassList } from '../admin/IncubatorViewAdminClassList';
import { IncubatorViewAdminClass } from '../admin/IncubatorViewAdminClass';
import {
	Route,
    Switch
  } from 'react-router-dom';
import { IncubatorViewAdminMenu } from '../admin/IncubatorViewAdminMenu';
import { IncubatorViewAdminVerifyCodes } from '../admin/IncubatorViewAdminVerifyCodes';

export class IncubatorViewAdmin extends Component {

	constructor(props) {
		super(props);

		this.state = {
			user: this.props.user
		};
	}

	render() {
		return (
            <div className="admin-view col-10 offset-1">
                ADMIN
                <div className="container-fluid">
					<div className="row">
						
						<Switch>
							<Route path="/panel/admin/menu" render={() => <IncubatorViewAdminMenu/>}/>
							<Route path="/panel/admin/classes" render={() => <IncubatorViewAdminClassList user={this.state.user}/>}/>
							<Route path="/panel/admin/class/:id" render={(props) => <IncubatorViewAdminClass {...props} user={this.state.user}/>}/>
							<Route path="/panel/admin/verifycodes" render={(props) => <IncubatorViewAdminVerifyCodes {...props} user={this.state.user}/>}/>
						</Switch>
					</div>
				</div>
            </div>
		);
	}
}

export default IncubatorViewAdmin;
