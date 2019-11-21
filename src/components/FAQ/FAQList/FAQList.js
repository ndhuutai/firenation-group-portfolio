import React, {useState, useContext} from 'react';
import PropTyes from 'prop-types';

import FAQListItem from './FAQListItem/FAQListItem';
import withModal from '../../HOC/Modal/withModal';
import Form from '../../Form/Form';
import FormForModal from '../../Form/FormForModal/FormForModal';

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

	//----------FORM&BUTTONS CONFIGS----------
	const formConfigs = [
		{
			labelFor: 'title',
			labelDescription: 'Title',
			formControlConfigs: {
				elementConfig: {
					id: 'title',
					name: 'title',
					defaultValue:   ''
				},
				elementType: 'input',
				classes: 'form-control'
			}
		}
	];

	const buttonConfigs = [
		{
			type: 'button',
			name: 'close',
			className: 'btn btn-secondary m-1',
			['data-dismiss']: 'modal',
		},
		{
			type: 'submit',
			name: 'Save changes',
			className: 'btn btn-primary'
		}
	];

	const EditTitleForm = withModal(FormForModal(Form, formConfigs,buttonConfigs));

	return (
		<ul className={props.classes}>
			{props.list.map((title, index) => (
				<FAQListItem active={(index === state.clickedIndex) && "active"} key={title + index} title={title}
				             onListClick={() => handleListItemClick(index)} onEditClick={props.onEditClick}/>
			))}
			{auth.user && <button className='list-group-item list-group-item-action' data-toggle='modal' data-target='#addFAQ'>Add new FAQ</button>}
			{/*<EditTitleForm modalId={'editTitle'} onSubmit={(data) => console.log(data)} modalTitle={'Edit Title'}/>*/}

		</ul>
	)
};

FAQList.propTypes = {
	onListClick : PropTyes.func.isRequired,
	classes: PropTyes.string.isRequired,
	list : PropTyes.array.isRequired
};



export default FAQList;