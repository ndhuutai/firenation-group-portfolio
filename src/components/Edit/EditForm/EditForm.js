import React from 'react';

const EditForm = (WrappedComponent, formConfigs) => {
	return (props) => {
		return (
			<WrappedComponent formConfigs={formConfigs} {...props}/>
		)
	};
};

export default EditForm;