import React from 'react';
import {withRouter} from 'react-router-dom';


const LoginButton = (props) => {
	const onClick = () => {
		props.history.push("/login");
	};
	return (
		<button className="btn btn-primary m-2" onClick={onClick}>Login</button>
	)
};

export default withRouter(LoginButton);