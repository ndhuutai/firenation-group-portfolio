import React from 'react';
import PropTypes from 'prop-types';

import withModal from '../../HOC/Modal/withModal';

const FormForModal = (WrappedComponent, formConfigs, buttonConfigs) => {

	return (props) => {
		//require a closeModal function
		const onSubmit = (data) => {
			//onSubmit passed from parent component
			props.onSubmit(data);
			props.closeModal();
		};

		return (
			<WrappedComponent formConfigs={formConfigs} buttonConfigs={buttonConfigs} {...props} onSubmit={onSubmit}/>
		)
	};
};

FormForModal.propTypes = {
	WrappedComponent: PropTypes.elementType.isRequired,
	formConfigs: PropTypes.object.isRequired,
	buttonConfigs: PropTypes.object.isRequired
};

export default FormForModal;