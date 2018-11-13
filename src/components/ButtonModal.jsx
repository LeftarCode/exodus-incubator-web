import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../styles/components/button-modal.scss'
import {
  HashRouter as Router,
  Route,
  Link
} from 'react-router-dom';

export class ButtonModal extends Component {
	render() {
		return (
            <div className="button-wrapper-modal">
                <button type="button" className="ex-btn" data-toggle="modal" data-target={this.props.target}>
                    {this.props.text}
                </button>
            </div>
            
		);
	}
}

export default ButtonModal;
