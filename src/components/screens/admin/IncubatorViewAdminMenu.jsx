import React, { Component } from 'react';
import '../../../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../../styles/components/screens/admin/incubator-view-admin-class.scss';
import { IncubatorViewAdminTile } from '../admin/IncubatorViewAdminTile';

export class IncubatorViewAdminMenu extends Component {

	render() {
		return (
            <div className="admin-class-view col-10 offset-1">
				<div className="fluid-container">
					<div className="row">
						<IncubatorViewAdminTile text="KLASY" iconClasses="fas fa-users" href="#/panel/admin/classes"/>
						<IncubatorViewAdminTile text="KODY WERYFIKACYJNE" iconClasses="fas fa-qrcode" href="#/panel/admin/verifycodes"/>
					</div>
				</div>
            </div>
		);
	}
}

export default IncubatorViewAdminMenu;
