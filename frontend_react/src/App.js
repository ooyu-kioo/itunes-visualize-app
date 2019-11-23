import React from 'react';
import logo from './logo.svg';
import './App.css';

import axios from 'axios';
import Button from '@material-ui/core/Button';

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			rows: [],
		};
	}

	handleClick = () => {
		axios
			.get('http://localhost:3000/api/home', {
				headers: {
					Accept: 'Application/json',
				},
			})
			.then(res => {
				this.setState({ rows: res.data });
			})
			.catch(console.error);
	};

	render() {
		const useStyles = makeStyles({
			root: {
				width: '100%',
				overflowX: 'auto',
			},
			table: {
				minWidth: 650,
			},
		});

		// const classes = useStyles();

		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<p>
						Edit <code>src/App.js</code> and save to reload.
					</p>
					<Button variant="contained" color="primary" onClick={this.handleClick}>
						Default
					</Button>
					<Paper className={useStyles.root}>
						<Table className={useStyles.table} aria-label="simple table">
							<TableHead>
								<TableRow>
									<TableCell>アルバム</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{this.state.rows.map((row, index) => (
									<TableRow key={index}>
										<TableCell>{row.Album}</TableCell>
									</TableRow>
								))}
							</TableBody>
						</Table>
					</Paper>
				</header>
			</div>
		);
	}
}

export default App;
