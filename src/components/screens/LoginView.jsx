import React, { Component } from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../styles/components/screens/login-view.scss';
import { Button } from '../Button';
import { FormButton } from '../FormButton';
import axios from 'axios';
import cookie from 'react-cookies';

export class LoginView extends Component {

    constructor(props) {
        super(props);
        let userToken = cookie.load('user_token');
        if (userToken) {
            this.props.history.push('/panel/home');
        }

        this.state = {
            username: '',
            password: ''
        };

        this.passwordChanged = this.passwordChanged.bind(this);
        this.usernameChanged = this.usernameChanged.bind(this);
        this.loginUser = this.loginUser.bind(this);
    }

    passwordChanged(event) {
        this.setState({password: event.target.value});
    }

    usernameChanged(event) {
        this.setState({username: event.target.value});
    }

    onLoginUserResponse(response) {
        switch(response.status) {
            case 200:
                cookie.save("user_token", response.data.token, {path: '/'});
                this.props.history.push("/panel/home");
                break;
            case 404:
                alert("Nazwa użytkownika lub hasło są niepoprawne!");
                break;
            case 401:
                alert("Nazwa użytkownika lub hasło są niepoprawne!");
                break;
            case 500:
                alert("Niespodziewany błąd serwera!");
                break;
        }
    }

    loginUser(event) {
        event.preventDefault();
        let loginData = {
            username: this.state.username,
            password: this.state.password
        }

        axios.post('http://localhost:1234/login', loginData)
        .then((res) => {
            this.onLoginUserResponse(res);
        }, (error) => {
            this.onLoginUserResponse(error.response);
        });
        
    }

	render() {
		return (
			<div id="login-view">
                <div id="content-wrapper">
				    <img src="../../imgs/logo.png" alt="LOGO" className="logo mx-auto"/>

                    <form onSubmit={this.loginUser}>
                        <div className="form-group">
                            <input type="username" className="form-control" id="username" onChange={this.usernameChanged} placeholder="Username" required/>
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control" id="password" onChange={this.passwordChanged} placeholder="Password" required/>
                        </div>
                        <FormButton text="LOGIN"/>
                        <Button text="REGISTER" href="#/register"/>
                    </form>
                </div>
			</div>
		);
	}
}

export default LoginView;
