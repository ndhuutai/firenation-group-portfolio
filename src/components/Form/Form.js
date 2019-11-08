import React, {forwardRef} from 'react';
import FormGroup from './FormGroup/FormGroup';

const Form = (props) => {

	const onSubmit = (e) => {
		e.preventDefault();
		const inputNames = props.formConfigs.reduce(((config,currentConfig) => {
			return [
				...config,
				currentConfig.formControlConfigs.elementConfig.name
			]
		}),[]);

		//call the onSubmit passed from parent
		inputNames.forEach(name => console.log(name));
		props.onSubmit();
	};

	return (
		<form onSubmit={onSubmit}>
			{props.formConfigs.map(config => {
				return (
					<FormGroup {...config} key={config.labelFor}/>
				)
			})}
			{props.buttonConfigs.map(config => {
				return (
					<button {...config}>{config.name}</button>
				)
			})}
		</form>
	)
};

export default forwardRef(Form);