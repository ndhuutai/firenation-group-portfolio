import React from 'react';

const Profile = (props) => (
	<div className="card col-md border-0">
		<img className="w-50 m-auto rounded" src="https://via.placeholder.com/200" alt="team member"/>
		<div className="card-body">
			<h5 className="card-title">{props.title}</h5>
			<p className="card-text">{props.description}</p>
			<button className="btn btn-link">Show Projects</button>
			{props.showEdit && <button className="btn btn-danger" data-toggle="modal" data-target="#editModal"
			onClick={props.onEdit}>Edit</button>}
		</div>
	</div>
);

export default Profile;