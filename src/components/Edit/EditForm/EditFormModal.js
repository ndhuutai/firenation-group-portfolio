import React from 'react';

const EditFormModal = (WrappedComponent, formConfigs, buttonConfigs) => {

	return (props) => {
		//require a closeModal function
		const onSubmit = (data) => {

			props.closeModal();
		};

		return (
			<WrappedComponent formConfigs={formConfigs} buttonConfigs={buttonConfigs} {...props} onSubmit={onSubmit}/>
		)
	};
};

export default EditFormModal;