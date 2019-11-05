import React from 'react';

import classes from '../../styles/Layout/Layout.module.css'

const Layout = (props) => {
	return  (
		<div className="container-fluid p-0">
			{props.children}
		</div>
	)
};

export default Layout;