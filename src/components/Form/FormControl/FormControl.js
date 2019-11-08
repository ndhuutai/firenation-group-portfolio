import React from 'react';
import PropTypes from 'prop-types'

const FormControl = (props) => {
	switch (props.elementType) {
		case "input":
			return <input {...props.elementConfig} className={props.classes}/>;
		case "textarea":
			return <textarea {...props.elementConfig} className={props.classes}/>;
	}
};

FormControl.propTypes = {
	elementType: PropTypes.oneOf('input', 'textarea','select','button'),
	elementConfig: PropTypes.shape({
		id: PropTypes.string.isRequired,
		name: PropTypes.string.isRequired
	}),
	classes: PropTypes.string.isRequired
};

export default FormControl;