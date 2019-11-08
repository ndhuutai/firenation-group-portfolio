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
		const data = inputNames.reduce((resultObj, currentInputName) => {
			return {
				...resultObj,
				[currentInputName]: e.target[currentInputName].value
			}
		}, {});

		props.onSubmit(data);
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