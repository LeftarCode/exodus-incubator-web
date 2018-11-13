import React, { Component } from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../styles/components/screens/incubator-view.scss';
import cookie from 'react-cookies';
import axios from 'axios';
import {
	Route,
    Switch
  } from 'react-router-dom';
import {IncubatorViewHome} from './panels/IncubatorViewHome';
import {IncubatorViewDashboard} from './panels/IncubatorViewDashboard';
import {MenuBarView} from '../MenuBarView';
import { SideMenuView } from '../menu/SideMenuView';
import {SideMenuItemView} from '../menu/SideMenuItemView';
import {IncubatorViewAdmin} from './panels/IncubatorViewAdmin';
import {IncubatorViewAdminClass} from './admin/IncubatorViewAdminClass';
import {IncubatorViewExams} from './panels/IncubatorViewExams';
import {IncubatorViewExam} from './panels/IncubatorViewExam';

export class IncubatorView extends Component {

    constructor(props) {
        super(props);
        let userToken = cookie.load('user_token');
        if(!userToken) {
            this.props.history.push('/');
        }

        this.state = {
            user: {
                token: userToken
            }
        }

        
    }

    onGetMeReponse(response) {
		switch(response.status) {
			case 200:
				this.setState({
					user: response.data.user
                });
				break;
		}
	}

    componentDidMount() {
        axios.get('http://localhost:1234/me', {headers: { 'Authorization': 'bearer ' + this.state.user.token }})
			.then((response) => {
				this.onGetMeReponse(response);
			}, (error) => {

			});
    }

	render() {
		return (
			<div id="incubator-view">
                <div className="row">
                    <SideMenuView>
                        <SideMenuItemView href="#/panel/home" text="Home" iconClasses="fas fa-home"/>
                        <SideMenuItemView href="#/panel/dashboard" text="Pulpit" iconClasses="fas fa-tachometer-alt"/>
                        <SideMenuItemView href="#/panel/home" text="Poczta" iconClasses="fas fa-envelope"/>
                        <SideMenuItemView href="#/panel/home" text="Osiągnięcia" iconClasses="fas fa-trophy"/>
                        <SideMenuItemView href="#/panel/home" text="Materiały" iconClasses="fas fa-book"/>
                        <SideMenuItemView href="#/panel/home" text="Zespoły" iconClasses="fas fa-users"/>
                        <SideMenuItemView href="#/panel/home" text="Chat" iconClasses="fas fa-comment"/>
                        <SideMenuItemView href="#/panel/exams" text="Egzaminy" iconClasses="fas fa-file-excel"/>
                        <SideMenuItemView href="#/panel/home" text="Zlecenia" iconClasses="fab fa-wpexplorer"/>
                        <SideMenuItemView href="#/panel/home" text="Ustawienia" iconClasses="fas fa-sliders-h"/>
                        {this.state.user.rank == "ADMIN" && <SideMenuItemView href="#/panel/admin/menu" text="Admin" iconClasses="fas fa-user-astronaut"/>}
                        
                    </SideMenuView>
                    <div className="main-view col-10">
                        <div className="container-fluid">
                            <MenuBarView name={this.state.user.name}/>
                            <Switch>
                                <Route path="/panel/home" render={() => <IncubatorViewHome user={this.state.user}/>}/>
                                <Route path="/panel/dashboard" render={() => <IncubatorViewDashboard user={this.state.user}/>}/>
                                <Route path="/panel/admin" render={() => <IncubatorViewAdmin user={this.state.user}/>}/>
                                <Route path="/panel/exams" render={() => <IncubatorViewExams user={this.state.user}/>}/>
                                <Route path="/panel/exam/:id" render={(props) => <IncubatorViewExam {...props} user={this.state.user}/>}/>
                            </Switch>
                        </div>
                    </div>
                </div>
			</div>
		);
	}
}

export default IncubatorView;
