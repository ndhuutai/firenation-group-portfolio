import React from 'react';

import FormControl from '../FormControl/FormControl';

const FormGroup = (props) => (
	<div className="form-group">
		<label htmlFor={props.labelFor}>{props.labelDescription}</label>
		<FormControl {...props.formControlConfigs}/>
	</div>
);

export default FormGroup;