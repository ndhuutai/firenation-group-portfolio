import React, {useRef, forwardRef} from 'react';
import {NavLink} from 'react-router-dom';

import classes from '../../styles/Navigation/Navigation.module.scss';

import CollapsibleItems from './CollapsibleItems/CollapsibleItems';

const Navigation = (props, ref) => {

	// const ref= useRef(null);

	return (
		<nav className="navbar navbar-expand-md navbar-dark bg-dark sticky-top">
			<NavLink className="navbar-brand" to="/">Fire Nation</NavLink>
			<button ref={props.navRef} className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsedNavItems"
			        aria-controls="collapsedNavItems" aria-expanded="false" aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"/>
			</button>
			<CollapsibleItems ref={props.collapsedRef}/>
		</nav>
	)
};

export default Navigation;