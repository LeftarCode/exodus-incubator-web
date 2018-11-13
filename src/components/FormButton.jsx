import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../styles/components/form-button.scss'
import {
  HashRouter as Router,
  Route,
  Link
} from 'react-router-dom';

export class FormButton extends Component {
	render() {
		return (
            <div className="form-button-wrapper">
                <div className="ex-btn">
                    <button>{this.props.text}</button>
                </div>
            </div>
            
		);
	}
}

export default FormButton;
