import React, {useState, useContext, useEffect} from 'react';
import {Route} from 'react-router-dom';
import firebase from '../../firebase/firebase';
// import classes from '../../styles/About/About.module.css';

import Profile from './Profile/Profile';
import AuthContext from '../../contexts/App/AuthContext';
import DbContext from '../../contexts/App/DbContext';
import StorageContext from '../../contexts/App/StorageContext';
import withModal from '../HOC/Modal/withModal';
import ProgressBar from '../ProgressBar/ProgressBar';

import Edit from '../Edit/Edit';

const About = (props) => {
	const [dataState, setDataState] = useState(
	);

	const [editState, setEditState] = useState({
		profileId: -1,
		name: '',
		avatar:'',
		portfolioLink: '',
		description:''
	});

	const [loadingState, setLoadingState] = useState(true);
	//todo: progress bar
	const [uploadingState, setUploadingState] = useState({
		status: false,
		progressVal : 0
	});

	const [errorState, setErrorState] = useState({});

	const authContext = useContext(AuthContext);
	const dbContext = useContext(DbContext);
	const storageContext = useContext(StorageContext);


	useEffect(()=> {
		dbContext.dbConnection.ref('profiles/').on('value', (snapshot) => {
			console.log(snapshot.val());
			const resultArray = Object.keys(snapshot.val()).map(key => {
				return {
					profileId: key,
					...snapshot.val()[key]
				}
			});
			setDataState(resultArray);
			setLoadingState(false);
		});
	},[]);


	const onEditClick = (profileId) => {
		const profileData = dataState.find(profile => profile.profileId === profileId);
		console.log(profileData);
		setEditState(profileData);
	};

	const onSubmit = ({name, description, avatar, portfolioLink}) => {

		//get existing profilekey, if it doesn't exist then new key is needed.
		let profileKey = dbContext.dbConnection.ref().child(`profiles/${editState.profileId}`).key;

		if(!profileKey) {
			profileKey = dbContext.dbConnection.ref().child('profiles').push().key;
		}


		// UPDATE CONSTRUCTION
		const updatedProfile = {
			name,
			description,
			avatar : avatar? `avatars/${profileKey}/${avatar.name}` : editState.avatar,
			portfolioLink
		};

		const updates = {};
		updates['/profiles/' + profileKey] = updatedProfile;

		dbContext.dbConnection.ref().update(updates, (error) => {
			setErrorState(error);
		});

		const storageRef = storageContext.storage.ref();

		//
		//if there is a submitted avatar, then user wants to override the existing data
		//if not then move on.
		let updateTask = null;
		if(avatar) {
			const avatarsRef = storageRef.child(`avatars/${editState.profileId}/${avatar.name}`);
			updateTask = avatarsRef.put(avatar);

			//todo: watch for progress then update value for progress bar.
			updateTask.on('state_changed', (snapshot) => {
				let progressVal = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
				//set progress bar to bytes transferred.
				//set uploadingState to true to display progress bar
				console.log(progressVal);
				setUploadingState({
					status: progressVal < 100,
					progressVal
				});
			}, error => {
				console.log('error uploading image');
			})

		}

		//UPDATE LOCAL STATE
		let result = dataState.map(profile => {
			if (profile.profileId === editState.profileId) {
				return {
					...profile,
					name,
					avatar: avatar? `avatars/${editState.profileId}/${avatar.name}` :editState.avatar,
					portfolioLink,
					description
				}
			}
			return profile;
		});

		setDataState(result);
	};

	//todo: add ProgressBar Modal
	const ProgressBarWithModal = withModal(ProgressBar);

	return (
		<div className="row align-items-start h-75">
			{loadingState? <h3>We're loading your data</h3>
			:
				dataState.map(profile => {
					return (
						<Profile {...profile} showEdit={!!authContext.user}
						         onEdit={() => onEditClick(profile.profileId)} key={profile.name + profile.profileId}/>
					)
				})}
			<Edit onSubmit={onSubmit} profileData={editState} modalTitle={'Edit profile'}/>
		</div>
	)
};

export default About;