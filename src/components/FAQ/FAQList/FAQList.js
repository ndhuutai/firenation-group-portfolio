import React, {useState, useContext} from 'react';
import PropTyes from 'prop-types';

import FAQListItem from './FAQListItem/FAQListItem';
//context
import AuthContext from '../../../contexts/App/AuthContext';

const FAQList = (props) => {

	const [state, setState] = useState({
		clickedIndex: 0
	});

	const auth = useContext(AuthContext);

	const handleListItemClick = (index) => {
		setState({
			clickedIndex: index
		});
		props.onListClick(index);
	};


	console.log(AuthContext.user);

	return (
		<ul className={props.classes}>
			{props.list.map((title, index) => (
				<FAQListItem active={(index === state.clickedIndex) && "active"} key={title + index} title={title}
				             onListClick={() => handleListItemClick(index)}/>
			))}
			{auth.user && <button className='list-group-item list-group-item-action' data-toggle='modal' data-target='#addFAQ'>Add new FAQ</button>}
		</ul>
	)
};

FAQList.propTypes = {
	onListClick : PropTyes.func.isRequired,
	classes: PropTyes.string.isRequired,
	list : PropTyes.array.isRequired
};



export default FAQList;