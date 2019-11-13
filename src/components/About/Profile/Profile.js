import React, {useContext, useState, useEffect} from 'react';
import PropTypes from 'prop-types'

import StorageContext from '../../../contexts/App/StorageContext';


const Profile = (props) => {
	//get storagecontext
	const storageContext = useContext(StorageContext);
	const storageRef = storageContext.storage.ref();

	const [imageState, setImageState] = useState({
		loading: true,
		imgSrc : ''
	});


	useEffect(() => {
		//access image ref on firebase
		storageRef.child(`${props.avatar}`).getDownloadURL().then(url => {
			//download img url from storage
			setImageState({
				loading: false,
				imgSrc: url
			})
		}).catch(e => console.log('There was an error getting the image url', e));
	}, [props]);

	return (
		<div className="card col-md border-0 bg-transparent">
			<img className="w-50 m-auto rounded" src={imageState.imgSrc} alt="team member"/>
			<div className="card-body">
				<h5 className="card-title">{props.name}</h5>
				<p className="card-text">{props.description}</p>
				<a className="btn btn-link" href={`${props.portfolioLink}`}>Show Projects</a>
				{props.showEdit && <button className="btn btn-danger" data-toggle="modal" data-target="#editModal"
				                           onClick={props.onEdit}>Edit</button>}
			</div>
		</div>
	)
};

Profile.propTypes = {
	name: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	portfolioLink: PropTypes.string.isRequired,
	showEdit: PropTypes.bool.isRequired,
	onEdit: PropTypes.func.isRequired
};

export default Profile;