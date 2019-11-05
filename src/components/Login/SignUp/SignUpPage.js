import React, {useState} from 'react';


import firebase from '../../../firebase/firebase';

const SignUpPage = (props) => {

	const [errorState, setErrorState] = useState({status: false, message: ''});

	const onSignUp = (e) => {
		e.preventDefault();
		console.log(props);
		const {email, password} = e.target;
		setErrorState({status: false, message: ''});
		firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
			.then(user => {
				props.history.push({
					pathname: '/login'
				})
			})
			.catch(e => setErrorState({status: true, message: e}))
	};

	const displayErrorMessage = () => {
		console.log(errorState);
		return <div>There was an error signing you up</div>
	};

	return (
		<div className="m-3">
			<h3>Signup:</h3>
			{errorState.status && displayErrorMessage()}
			<form onSubmit={onSignUp}>
				<div className="form-group">
					<label htmlFor="email">Email:</label>
					<input type="text" id="email" name={"email"} className="form-control"/>
				</div>
				<div className="form-group">
					<label htmlFor="password">Password:</label>
					<input type="password" id="password" name={"password"} className="form-control"/>
				</div>
				<button type="submit" className="btn btn-primary">Submit</button>
			</form>
		</div>
	)
};

export default SignUpPage;