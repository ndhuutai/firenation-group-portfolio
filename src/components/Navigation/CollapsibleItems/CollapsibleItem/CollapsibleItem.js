import React from 'react';
import {NavLink} from 'react-router-dom';

const CollapsibleItem = (props) => (
	<li className="nav-item">
		<NavLink className="nav-link" exact to={props.path}> {props.children} <span className="sr-only">(current)</span></NavLink>
	</li>
);

export default CollapsibleItem;