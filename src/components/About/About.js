import React, {useState, useContext} from 'react';

// import classes from '../../styles/About/About.module.css';

import Profile from './Profile/Profile';
import AuthContext from '../../contexts/App/AuthContext';

const dummyDescription = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi consectetur cum ex explicabo incidunt laboriosam neque numquam obcaecati, officiis quam repellendus saepe tempore! Delectus deserunt ipsam sit tempore, veritatis voluptatum.'
const About = (props) => {

	const [dataState, setDataState] = useState({
		profiles: [
			{
				name: 'Tai Nguyen',
				avatar: 'https://via.placeholder.com/200',
				description: dummyDescription
			},
			{
				name: 'Kyle',
				avatar: 'https://via.placeholder.com/200',
				description: dummyDescription
			},
			{
				name: 'John',
				avatar: 'https://via.placeholder.com/200',
				description: dummyDescription
			}
		]
	});

	const authContext = useContext(AuthContext);


	return (
		<div className="row align-items-center h-75">
			<Profile title={'Tai Nguyen'} description={dummyDescription} showEdit={!!authContext.user}/>
			<Profile title={'Kyle'} description={dummyDescription} showEdit={!!authContext.user}/>
			<Profile title={'John'} description={dummyDescription} showEdit={!!authContext.user}/>
		</div>
	)
};

export default About;