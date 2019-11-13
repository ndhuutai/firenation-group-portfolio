import React from 'react';
import PropTypes from 'prop-types';

import classes from '../../styles/Layout/Layout.module.css'

const Layout = (props) => {
	return  (
		<div className="container-fluid m-0 p-0 bg-light h-100">
			{props.children}
		</div>
	)
};

Layout.propTypes = {
	children: PropTypes.element
};

export default Layout;