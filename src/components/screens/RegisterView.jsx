import React, { Component } from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../styles/components/screens/register-view.scss';
import { FormButton } from '../FormButton';

export class RegisterView extends Component {
	render() {
		return (
			<div id="register-view">
                <div id="content-wrapper">
				    <img src="../../imgs/logo.png" alt="LOGO" className="logo mx-auto"/>

                    <form>
                        <div className="form-group">
                            <input type="username" className="form-control" id="username" placeholder="Nazwa użytkownika" required/>
                        </div>
                        <div className="form-group">
                            <input type="email" className="form-control" id="email" placeholder="Email" required/>
                        </div>
                        <div className="form-group">
                            <input type="fullname" className="form-control" id="fullname" placeholder="Imię i nazwisko" required/>
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control" id="password" placeholder="Hasło" required/>
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control" id="verifypassword" placeholder="Potwierdź hasło" required/>
                        </div>
                        <div className="form-group">
                            <input type="code" className="form-control" id="code" placeholder="Kod (opcjonalne)" required/>
                        </div>
                        <div className="form-check">
                            <input type="checkbox" className="form-check-input" id="rulescheck" required/>
                            <label className="form-check-label" htmlFor="rulescheck">Akceptuje zasady regulaminu</label>
                        </div>
                        <div className="form-check">
                            <input type="checkbox" className="form-check-input" id="privacycheck" required/>
                            <label className="form-check-label" htmlFor="privacycheck">Akceptuje zasady polityki prywatności</label>
                        </div>
                        <div className="buttons">
                            <FormButton text="ZAREJESTRUJ"/>
                        </div>
                    </form>
                </div>
			</div>
		);
	}
}

export default RegisterView;
