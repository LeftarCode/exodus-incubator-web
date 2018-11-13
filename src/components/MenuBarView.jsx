import React, { Component } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../styles/components/menu-bar-view.scss';

export class MenuBarView extends Component {


	render() {
		return (
            <div className="col-12" id="menu-bar">
                <div className="search-section">
                    <input type="text" placeholder="Szukaj postów, nagród, egzaminów, materiałów"/>
                </div>
                <div className="user-section">
                    <div className="notifications">
                        <ul>
                            <li><i className="fas fa-bell"></i></li>
                            <li><i className="fas fa-globe"></i></li>
                            <li><i className="fas fa-comments"></i></li>
                        </ul>
                    </div>
                    <div className="profile">
                        <div className="profile-wrapper">
                            <span>{this.props.name}</span>
                            <img src="../imgs/avatar.png" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
		);
	}
}

export default MenuBarView;
