import React from 'react';
import FormGroup from './FormGroup/FormGroup';

const Form = (props) => {
	return (
		<form>
			{props.formConfigs.map(config => {
				return (
					<FormGroup {...config}/>
				)
			})}
		</form>
	)
};

export default Form;