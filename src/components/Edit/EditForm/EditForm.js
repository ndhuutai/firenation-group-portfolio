import React from 'react';

const EditForm = (WrappedComponent) => {
	return (props) => {
		return (
			<WrappedComponent formConfigs={props.formConfigs}/>
		)
	};
};

export default EditForm;