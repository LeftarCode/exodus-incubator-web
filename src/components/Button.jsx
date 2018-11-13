import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../styles/components/Button.scss'
import {
  HashRouter as Router,
  Route,
  Link
} from 'react-router-dom';

export class Button extends Component {
	render() {
		return (
            <div className="button-wrapper">
                <MediaQuery query="(max-device-width: 1224px)">
                    <div className="ex-btn">
                        <a href={this.props.href}>{this.props.text}</a>
                    </div>
                </MediaQuery>
                <MediaQuery query="(min-device-width: 1224px)">
                    <div className="ex-btn">
                        <a href={this.props.href}>{this.props.text}</a>
                    </div>
                </MediaQuery>
            </div>
            
		);
	}
}

export default Button;
