import React, {useState, useContext, useEffect} from 'react';
import {Route} from 'react-router-dom';
import firebase from '../../firebase/firebase';
// import classes from '../../styles/About/About.module.css';

import Profile from './Profile/Profile';
import AuthContext from '../../contexts/App/AuthContext';
import Edit from '../Edit/Edit';

const dummyDescription = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi consectetur cum ex explicabo incidunt laboriosam neque numquam obcaecati, officiis quam repellendus saepe tempore! Delectus deserunt ipsam sit tempore, veritatis voluptatum.'
const About = (props) => {

	const [dataState, setDataState] = useState([
			{
				profileId: 1,
				name: 'Tai Nguyen',
				avatar: 'https://via.placeholder.com/200',
				description: dummyDescription
			},
			{
				profileId: 2,
				name: 'Kyle',
				avatar: 'https://via.placeholder.com/200',
				description: dummyDescription
			},
			{
				profileId: 3,
				name: 'John',
				avatar: 'https://via.placeholder.com/200',
				description: dummyDescription
			}
		]
	);



	const [editState, setEditState] = useState({
		profileId: -1
	});

	const authContext = useContext(AuthContext);

	useEffect(() => {

	});

	const onEditClick = (profileId) => {
		setEditState({
			profileId
		})
	};

	const onSubmit = ({name, description}) => {


		let result = dataState.map(profile => {
			if (profile.profileId === editState.profileId) {
				return {
					...profile,
					name,
					description
				}
			}
			return profile;
		});

		setDataState(result);
	};

	return (
		<div className="row align-items-center h-75">
			{dataState.map(profile => {
				return (
					<Profile title={profile.name} description={profile.description} showEdit={!!authContext.user}
					         onEdit={() => onEditClick(profile.profileId)} key={profile.name}/>
				)
			})}
			<Edit onSubmit={onSubmit}/>
		</div>
	)
};

export default About;