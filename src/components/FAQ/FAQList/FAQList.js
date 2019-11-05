import React, {useState} from 'react';

import FAQListItem from './FAQListItem/FAQListItem';

const FAQList = (props) => {

	const [state, setState] = useState({
		clickedIndex: 0
	});

	const handleListItemClick = (index) => {
		setState({
			clickedIndex: index
		});
		props.onListClick(index);
	};

	return (
		<ul className={props.classes}>
			{props.list.map((title, index) => (
				<FAQListItem active={(index === state.clickedIndex) && "active"} key={title + index} title={title}
				             onListClick={() => handleListItemClick(index)}/>
			))}
		</ul>
	)
};

export default FAQList;