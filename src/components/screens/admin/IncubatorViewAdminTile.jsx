import React, { Component } from 'react';
import '../../../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../../styles/components/screens/admin/incubator-view-admin-tile.scss';

export class IncubatorViewAdminTile extends Component {

	render() {
		return (
            <div className="col-4 tile">
                <a href={this.props.href}>
                    <div className="tile-wrapper">
                        <div className="tile-title-wrapper">
                            <div className="tile-title-icon"><i className={this.props.iconClasses}></i></div>
                            <div className="tile-title-text">{this.props.text}</div>
                        </div>
                    </div>
                </a>
            </div>
		);
	}
}

export default IncubatorViewAdminTile;
