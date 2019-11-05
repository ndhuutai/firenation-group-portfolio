import React, {useRef} from 'react';
import {NavLink} from 'react-router-dom';

import classes from '../../styles/Navigation/Navigation.module.scss';

import CollapsibleItems from './CollapsibleItems/CollapsibleItems';

const Navigation = (props) => {

	const ref= useRef(null);

	return (
		<nav className="navbar navbar-expand-md navbar-light bg-light sticky-top">
			<NavLink className="navbar-brand" to="/">Fire Nation</NavLink>
			<button ref={ref} className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsedNavItems"
			        aria-controls="collapsedNavItems" aria-expanded="false" aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"/>
			</button>
			<CollapsibleItems clickedElement={props.clickedElement}
			closeNavBar={() => ref.current.click()}/>
		</nav>
	)
};

export default Navigation;