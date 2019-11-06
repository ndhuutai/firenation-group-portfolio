import React from 'react';

const EditForm = (props) => (
	<form>
		{props.formConfigs.map(config => {
			return <div className="form-group">
				<label htmlFor={config.labelFor}>{config.description}</label>
			</div>
		})}
	</form>
);

export default EditForm;