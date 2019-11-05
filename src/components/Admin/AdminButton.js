import React from 'react';

import {withRouter} from 'react-router-dom';


import firebase from '../../firebase/firebase';

const AdminButton = (props) => {

	const onLogoutClick = () => {
		firebase.auth().signOut();
		props.history.push({
			pathname: "/"
		})
	};

	return (
		<div>
			<button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton"
			        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
				Admin
			</button>
			<div className="dropdown-menu dropdown-menu-md-right" aria-labelledby="dropdownMenuButton">
				<a href="#" className="dropdown-item">Action</a>
				<a href="#" className="dropdown-item">Another Action</a>
				<div className="dropdown-divider"/>
				<button className="dropdown-item" onClick={onLogoutClick}>Logout</button>
			</div>
		</div>
	)
};

export default withRouter(AdminButton);