import React, {useState} from 'react';
import firebase from '../../firebase/firebase';

import {NavLink} from 'react-router-dom';

const LoginPage = (props) => {

	const [error, setErrorState] = useState({status: false, message: ''});

	const onFormSubmit = (e) => {
		e.preventDefault();
		const {email, password} = e.target;
		firebase.auth().signInWithEmailAndPassword(email.value, password.value)
			.then(user => {
				setErrorState({status: false, message: ''});
				props.history.push({pathname: '/'});
			})
			.catch(e => setErrorState({status: true, message: e}))
	};

	const displayErrorMessage = () => {
		return <div className="alert alert-danger">There was an error logging you in</div>
	};

	return (
		<div className="m-3">
			<h2>Login:</h2>
			{error.status && displayErrorMessage()}
			<form onSubmit={onFormSubmit}>
				<div className="form-group">
					<label htmlFor="email">Email:</label>
					<input type="text" id="email" className="form-control"/>
				</div>
				<div className="form-group">
					<label htmlFor="password">Password:</label>
					<input type="password" id="password" className="form-control"/>
				</div>
				<button type="submit" className="btn btn-primary">Submit</button>
			</form>
			<p>New user? <NavLink to={"/signup"}>Signup</NavLink></p>
		</div>
	)
};

export default LoginPage;