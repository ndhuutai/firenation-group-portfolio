import React from 'react';

const FormControl = (props) => {
	switch (props.elementType) {
		case "input":
			return <input {...props.elementConfig} className={props.classes}/>;
		case "textarea":
			return <textarea {...props.elementConfig} className={props.classes}/>;
	}
};

export default FormControl;