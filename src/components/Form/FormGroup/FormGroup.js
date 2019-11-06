import React from 'react';

import FormControl from '../FormControl/FormControl';

const FormGroup = (props) => (
	<>
		<label htmlFor={props.labelFor}>{props.labelDescription}</label>
		<FormControl {...props.formControlConfigs}/>
	</>
);

export default FormGroup;