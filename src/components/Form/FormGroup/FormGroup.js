import React from 'react';
import PropTypes from 'prop-types'

import FormControl from '../FormControl/FormControl';

const FormGroup = (props) => (
	<div className="form-group">
		<label htmlFor={props.labelFor}>{props.labelDescription}</label>
		<FormControl {...props.formControlConfigs}/>
	</div>
);

FormGroup.propTypes = {
	labelFor: PropTypes.string.isRequired,
	labelDescription: PropTypes.string.isRequired,
	formControlConfigs: PropTypes.object.isRequired
};


export default FormGroup;