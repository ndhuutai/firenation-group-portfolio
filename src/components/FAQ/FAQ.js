import React, {useState, useContext, useEffect} from 'react';

import firebase from '../../firebase/firebase';

import FAQList from './FAQList/FAQList';
import FAQDescription from './FAQDescription/FAQDesciption';
import Form from '../Form/Form';
import FormForModal from '../Edit/EditForm/FormForModal';

//contexts
import AuthContext from '../../contexts/App/AuthContext';
import DbContext from '../../contexts/App/DbContext';
import withModal from '../HOC/Modal/withModal';


export default (props) => {

	//--------------CONTEXTs----------------
	const database = useContext(DbContext);
	const auth = useContext(AuthContext);

	//---------STATEs----------
	const [dataState, setDataState] = useState(undefined);
	const [loadingState, setLoadingState] = useState(true);

	const [currentIndex, setCurrentIndex] = useState(0);

	//--------EVENT HANDLERS-----------
	const onListClick = (index) => {
		setCurrentIndex(index)
	};

	//----------FORM&BUTTONS CONFIGS----------
	const formConfigs = [
		{
			labelFor: 'title',
			labelDescription: 'Title',
			formControlConfigs: {
				elementConfig: {
					id: 'title',
					name: 'title',
					defaultValue: ''
				},
				elementType: 'input',
				classes: 'form-control'
			}
		},
		{
			labelFor: 'description',
			labelDescription: 'Description',
			formControlConfigs: {
				elementConfig: {
					id: 'description',
					name: 'description',
					defaultValue: ''
				},
				elementType: 'textarea',
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

	const FAQAddForm = withModal(FormForModal(Form, formConfigs,buttonConfigs));


	useEffect(() => {
		database.dbConnection.ref('faqs/').once('value').then(snapshot => {
			setDataState(snapshot.val());

			setLoadingState(false)
		}).catch(e => {
			setLoadingState(false);
		})
	}, []);

	const titlesArray = dataState? dataState.map(data => data.title) : '';


	return (
		<>
			<h2 className="col align-self-center">Frequently Asked Questions</h2>
			<div className="container-fluid row">
				{dataState && <FAQList classes="list-group border-right col-4" list={titlesArray} onListClick={onListClick}/>}

				{dataState? <FAQDescription
					classes="col-6">{dataState[currentIndex].description}</FAQDescription> : 'Loading your data' }
			</div>
			<FAQAddForm modalId={'addFAQ'} onSubmit={(data) => console.log(data)}/>
		</>
	);
}