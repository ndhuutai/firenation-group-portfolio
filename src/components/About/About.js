import React, {useState, useContext} from 'react';
import {Route} from 'react-router-dom';

// import classes from '../../styles/About/About.module.css';

import Profile from './Profile/Profile';
import AuthContext from '../../contexts/App/AuthContext';
import Edit from '../Edit/Edit';

const dummyDescription = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi consectetur cum ex explicabo incidunt laboriosam neque numquam obcaecati, officiis quam repellendus saepe tempore! Delectus deserunt ipsam sit tempore, veritatis voluptatum.'
const About = (props) => {

	const [dataState, setDataState] = useState({
		profiles: [
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
	});

	const [editState, setEditState] = useState({
		id: -1
	});

	const formConfigs = [
		{
			labelFor: 'name',
			labelDescription: 'Name',
			formControlConfigs: {
				elementConfig: {
					id: 'name',
					name: 'name',
				},
				elementType: 'input',
				classes: 'form-control'
			}
		},
		{
			labelFor: 'description',
			labelDescription: 'Description: ',
			formControlConfigs: {
				elementConfig: {
					id: 'description',
					name: 'description',
				},
				elementType: 'textarea',
				classes: 'form-control'
			}
		},

	];


	const authContext = useContext(AuthContext);

	const onEditClick = (profileId) => {
		setEditState({
			id: profileId
		})
	};

	const onSubmit = ({name, description}) => {
		dataState.profiles.map(profile => {
			if (profile.id === editState.id) {
				return {
					...profile,
					name,
					description
				}
			}
			return profile;
		})
	};

	return (
		<div className="row align-items-center h-75">
			{dataState.profiles.map(profile => {
				return (
					<Profile title={profile.name} description={profile.description} showEdit={!!authContext.user}
					         onEdit={() => onEditClick(profile.id)} key={profile.name}/>
				)
			})}
			<Edit formConfigs={formConfigs} onSubmit={onSubmit}/>
		</div>
	)
};

export default About;