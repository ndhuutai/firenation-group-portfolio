import React from 'react';

import '@fortawesome/fontawesome-free/css/all.min.css'

const FAQListItem = (props) => {
	const classes = "list-group-item list-group-item-action" + (props.active || '') ;
	return (
		<div className={classes}>
			<div className='row'>
				<button className={' list-group-item list-group-item-action col-9'} onClick={() => props.onListClick()}>
					{props.title}
				</button>
				{/*<i className='fas fa-edit list-group-item list-group-item-action col-2'></i>*/}
				<button className='btn btn-danger' data-toggle='modal' data-target='#addFAQ' onClick={props.onEditClick}>Edit</button>
			</div>
		</div>
	)
};

const checkEqual = (prevProps, nextProps) => {
	return prevProps.active === nextProps.active;
};

export default React.memo(FAQListItem, checkEqual);