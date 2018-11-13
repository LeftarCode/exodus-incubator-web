import React, { Component } from 'react';
import '../../../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../../styles/components/screens/panels/incubator-view-exams.scss'
import cookie from 'react-cookies';
import axios from 'axios';
import { PercentageProgressBar } from '../../PercentageProgressBar';

export class IncubatorViewExams extends Component {

	constructor(props) {
		super(props);
        let userToken = cookie.load('user_token');
		this.state = {
            user: props.user,
            userToken: userToken,
            exams: []
		}
    }
    
    componentDidMount() {
        axios.get("http://localhost:1234/me/exams", {headers: { 'Authorization': 'bearer ' + this.state.userToken }})
        .then((response) => {
            this.onGetExamsList(response);
        }, (error) => {

        });
    }

    onGetExamsList(response) {
        console.log(response);
        this.setState({
            exams: response.data
        })
    }

    createTable() {
		let table = this.state.exams.map((exam, index) => {
            let row = [];
            const now = new Date();
            const finishTime = new Date(exam.finishTime);
            let status = "";
            if(exam.isFinished) {
                status = "EGZAMIN ZAKOŃCZONY!";
            } else if (finishTime < now) {
                status = "UPŁYNĄŁ CZAS!";
            } else {
                status = "EGZAMIN TRWA!"
            }

			row.push(<td key={1}>{index + 1}</td>);
			row.push(<td key={2}>{exam.categoryName}</td>);
			row.push(<td key={3}>{exam.score / exam.questionsCount * 100} %</td>);
			row.push(<td key={4}>{status}</td>);
			row.push(<td key={5} style={{textAlign: "center"}}><a href={"#/panel/exam/"+exam.id}><i className="fas fa-edit"></i></a></td>);
			return <tr key={index}>{row}</tr>
		});

		return table;
    }

	render() {
        let table = this.createTable();

		return (
			<div id="incubator-view-exams" className="col-10 offset-1">
                <table className="table">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Kategoria</th>
                            <th scope="col">Wynik</th>
                            <th scope="col">Status</th>
                            <th scope="col" style={{textAlign: "center"}}>Rozpocznij</th>
                        </tr>
                    </thead>
                    <tbody>
                        {table}
                    </tbody>
                </table>
			</div>
		);
	}
}

export default IncubatorViewExams;
