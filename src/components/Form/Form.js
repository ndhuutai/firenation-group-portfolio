import React, {forwardRef} from 'react';
import PropTypes from 'prop-types';

import FormGroup from './FormGroup/FormGroup';


const Form = (props) => {

	const onSubmit = (e) => {
		e.preventDefault();
		const inputNames = props.formConfigs.reduce(((config, currentConfig) => {
			return [
				...config,
				currentConfig.formControlConfigs.elementConfig.name
			]
		}), []);

		//call the onSubmit passed from parent
		const data = inputNames.reduce((resultObj, currentInputName) => {
			return {
				...resultObj,
				[currentInputName]: e.target[currentInputName].getAttribute('type') !== 'file' ? e.target[currentInputName].value : e.target[currentInputName].files[0]
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


Form.propTypes = {
	onSubmit: PropTypes.func.isRequired,
	formConfigs: PropTypes.object.isRequired,
	buttonConfigs: PropTypes.shape({
		type: PropTypes.string.isRequired,
		name: PropTypes.string.isRequired,
		className: PropTypes.string.isRequired
	})
};

export default forwardRef(Form);