import React, { Component } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import axios from 'axios';

export class Modal extends Component {

	render() {
		return (
            <div className="modal" id={this.props.id} tabIndex="-1" role="dialog" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">{this.props.title}</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        {this.props.render()}
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-primary" onClick={this.props.onClick}>{this.props.successButton}</button>
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Zamknij</button>
                    </div>
                    </div>
                </div>
            </div>
		);
	}
}

export default Modal;
