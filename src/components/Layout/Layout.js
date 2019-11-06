import React from 'react';

import classes from '../../styles/Layout/Layout.module.css'

const Layout = (props) => {
	return  (
		<div className="container-fluid m-0 p-0 bg-light h-100">
			{props.children}
		</div>
	)
};

export default Layout;