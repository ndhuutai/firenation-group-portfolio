import React, {useRef, useEffect, useContext} from 'react';
import {NavLink} from 'react-router-dom';

import CollapsibleItem from './CollapsibleItem/CollapsibleItem';
import LoginButton from '../../Login/LoginButton';
import AdminButton from '../../Admin/AdminButton';
import AuthContext from '../../../contexts/App/AuthContext';

import classes from '../../../styles/Navigation/CollapsibleItems/CollapsibleItems.module.scss';

const CollapsibleItems = (props) => {

	const ref = useRef(null);
	const authContext = useContext(AuthContext);
	//whenever a click is outside/not the hamburger button
	//close the navbar by simulating a click after the re-render has completed.
	useEffect(() => {
		if(ref.current.classList.contains("show") && !props.clickedElement.classList.contains("navbar-toggler-icon")) {
			console.log('im being called');
			props.closeNavBar();
		}
	},[props.clickedElement]);

	return (
		<div ref={ref} className="collapse navbar-collapse" id="collapsedNavItems">
			<ul className="navbar-nav mr-auto">
				<CollapsibleItem path="/">Home</CollapsibleItem>
				<CollapsibleItem path="/about">About</CollapsibleItem>
				<CollapsibleItem path="/faq">FAQ</CollapsibleItem>
			</ul>
			<form className="form-inline my-2 my-lg-0">
				<input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
				<button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
			</form>
			{authContext.user? <AdminButton/>: <LoginButton/>}
		</div>
	)
};

export default CollapsibleItems;