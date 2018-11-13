import React, { Component } from 'react';
import '../../../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../../styles/components/screens/panels/incubator-view-exam.scss'
import cookie from 'react-cookies';
import axios from 'axios';
import { PercentageProgressBar } from '../../PercentageProgressBar';
import { Button } from '../../Button';
import { ButtonModal } from '../../ButtonModal';
import { Modal } from '../../Modal';

export class IncubatorViewExam extends Component {

	constructor(props) {
		super(props);
        console.log(props);
        let userToken = cookie.load('user_token');
		this.state = {
            userToken: userToken,
            examID: this.props.match.params.id,
            currentQuestionIndex: 0,
            exam: {
                questions: []
            },
            currentQuestion: {
                answers: [],
                answerIndex: -1
            }
        }
        
        this.onOptionClicked = this.onOptionClicked.bind(this);
        this.onAnswerChecked = this.onAnswerChecked.bind(this);
        this.onSumbitExamModalClick = this.onSumbitExamModalClick.bind(this);
    }

    componentDidMount() {
        axios.get('http://localhost:1234/exam/' + this.state.examID, {headers: { 'Authorization': 'bearer ' + this.state.userToken }})
        .then((response) => {
            this.onGetExam(response);
        }, (error) => {

        });
    }

    onGetExam(response) {
        this.setState({
            exam: response.data,
            currentQuestion: response.data.questions[this.state.currentQuestionIndex]
        });
    }

    onOptionClicked(element) {
        let index = element.target.value;

        this.setState({
            currentQuestion: this.state.exam.questions[index],
            currentQuestionIndex: index
        });
    }

    getQuestionsList() {
        let list = this.state.exam.questions.map((question, index) => {
            return <li key={index} onClick={this.onOptionClicked} value={index}>{index + 1}</li>
        })

        return list;
    }

    onAnswerChecked(element) {
        let index = element.target.value;

        let questions = this.state.exam.questions;
        questions[this.state.currentQuestionIndex].answerIndex = index;
        this.setState({
            currentQuestion: {
                content: this.state.currentQuestion.content,
                answers: this.state.currentQuestion.answers,
                answerIndex: index
            }
        });
    }

    onSumbitExamModalClick() {
        let answers = this.state.exam.questions.map((question) => {
            let answerIndex = -1;
            if(question.answerIndex != undefined) {
                answerIndex = question.answerIndex;
            }

            return {
                questionID: question.id,
                answerIndex: answerIndex
            }
        });
        let exam = {
            examID: this.state.examID,
            answers: answers
        }

        axios.put('http://localhost:1234/exam/', exam, {headers: { 'Authorization': 'bearer ' + this.state.userToken }})
        .then((response) => {
            window.location.reload();
        }, (error) => {

        });

        console.log(exam);
    }

	render() {
        let questionsList = this.getQuestionsList();

		return (
			<div id="incubator-view-exam" className="col-10 offset-1">
                <div className="container-fluid">
                    <div className="row question-view">
                        <div className="col-2 question-list">
                            <ul>
                                {questionsList}
                            </ul>
                        </div>
                        <div className="col-10 question-content">
                            {this.state.currentQuestion.content}

                            <div className="form-check">
                                <label className="form-check-label">
                                    <input type="radio"
                                        id="answer1"
                                        onClick={this.onAnswerChecked}
                                        checked={this.state.currentQuestion.answerIndex == 0}
                                        className="form-check-input"
                                        value={0}
                                        name="answer"/>{this.state.currentQuestion.answers[0]}
                                </label>
                            </div>
                            <div className="form-check">
                                <label className="form-check-label">
                                    <input type="radio"
                                        id="answer2"
                                        onClick={this.onAnswerChecked}
                                        checked={this.state.currentQuestion.answerIndex == 1}
                                        className="form-check-input"
                                        value={1}
                                        name="answer"/>{this.state.currentQuestion.answers[1]}
                                </label>
                            </div>
                            <div className="form-check">
                                <label className="form-check-label">
                                    <input type="radio"
                                        id="answer3"
                                        onClick={this.onAnswerChecked}
                                        checked={this.state.currentQuestion.answerIndex == 2}
                                        className="form-check-input"
                                        value={2}
                                        name="answer"/>{this.state.currentQuestion.answers[2]}
                                </label>
                            </div>
                            <div className="form-check">
                                <label className="form-check-label">
                                    <input type="radio"
                                        id="answer4"
                                        onClick={this.onAnswerChecked}
                                        checked={this.state.currentQuestion.answerIndex == 3}
                                        className="form-check-input"
                                        value={3}
                                        name="answer"/>{this.state.currentQuestion.answers[3]}
                                </label>
                            </div>
                        </div>
                        <Modal title="Chcesz zakończyć egzamin?"
                            id="examSubmit"
                            render={()=>{return <p>Jesteś pewny, że chcesz zakończyć egzamin?</p>}}
                            successButton="TAK"
                            onClick={this.onSumbitExamModalClick}/>
                        <ButtonModal text="SUBMIT" target="#examSubmit"/>
                    </div>
                </div>
			</div>
		);
	}
}

export default IncubatorViewExam;
