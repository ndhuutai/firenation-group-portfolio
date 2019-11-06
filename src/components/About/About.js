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

	const formConfigs = [
		{
			labelFor: 'name',
			labelDescription: 'Name',
			formControlConfigs: {
				elementConfig: {
					id: 'name',
					name: 'name',
					onChange: function (e) {
						//does something with the onChange for this input
					}
				},
				elementType: 'input',
				classes: "form-control"
			}
		},
		{
			labelFor: 'description',
			labelDescription: 'Description: ',
			formControlConfigs: {
				elementConfig: {
					id: 'description',
					name: 'description',
					onChange: function (e) {
						//does something with the onChange for this input
					}
				},
				elementType: 'textarea',
				classes: 'form-control'
			}
		},

	];


	const authContext = useContext(AuthContext);

	const onEditClick = (profileId) => {
		//edit the profile and send to db to store
	};

	return (
		<div className="row align-items-center h-75">
			<Profile title={'Tai Nguyen'} description={dummyDescription} showEdit={!!authContext.user} editClick={() => onEditClick(1)}/>
			<Profile title={'Kyle'} description={dummyDescription} showEdit={!!authContext.user} editClick={() => onEditClick(2)}/>
			<Profile title={'John'} description={dummyDescription} showEdit={!!authContext.user} editClick={() => onEditClick(3)}/>
			<Edit formConfigs={formConfigs}/>
		</div>
	)
};

export default About;