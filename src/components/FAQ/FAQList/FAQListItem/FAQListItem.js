import React from 'react';

const FAQListItem = (props) => {
	const classes = "list-group-item list-group-item-action " + (props.active || '') ;
	return (
		<button className={classes} onClick={() => props.onListClick()}>
			{props.title}
		</button>
	)
};

const checkEqual = (prevProps, nextProps) => {
	return prevProps.active === nextProps.active;
};

export default React.memo(FAQListItem, checkEqual);