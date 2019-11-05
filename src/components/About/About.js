import React, {useState} from 'react';

// import classes from '../../styles/About/About.module.css';

import Profile from './Profile/Profile';

const dummyDescription = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi consectetur cum ex explicabo incidunt laboriosam neque numquam obcaecati, officiis quam repellendus saepe tempore! Delectus deserunt ipsam sit tempore, veritatis voluptatum.'
const About = (props) => {

	const [state, setState] = useState({
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

	return (
		<div className="row align-items-center h-75">
			<Profile title={'Tai Nguyen'} description={dummyDescription}/>
			<Profile title={'Kyle'} description={dummyDescription}/>
			<Profile title={'John'} description={dummyDescription}/>
		</div>
	)
};

export default About;