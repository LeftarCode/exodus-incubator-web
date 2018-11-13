import React, { Component } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import {LoginView} from './screens/LoginView'
import {
	HashRouter as Router,
	Route,
	Link,
	Switch
  } from 'react-router-dom';
import { RegisterView } from './screens/RegisterView';
import { IncubatorView } from './screens/IncubatorView';

export class App extends Component {
	render() {
		return (
			<Router>
				<div className="container-fluid" id="main-app">
					<Route exact path="/" component={LoginView} />
					<Route exact path="/login" component={LoginView} />
					<Route path="/register" component={RegisterView} />
					<Route path="/panel" component={IncubatorView} />
				</div>
			</Router>
		);
	}
}

export default App;
