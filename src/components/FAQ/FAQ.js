import React, {useState, useContext, useEffect} from 'react';

import firebase from '../../firebase/firebase';

//components
import FAQList from './FAQList/FAQList';
import FAQDescription from './FAQDescription/FAQDesciption';
import Form from '../Form/Form';
import FormForModal from '../Form/FormForModal/FormForModal';
import withModal from '../HOC/Modal/withModal';

//contexts
import AuthContext from '../../contexts/App/AuthContext';
import DbContext from '../../contexts/App/DbContext';


export default (props) => {

	//--------------CONTEXTs----------------
	const database = useContext(DbContext);
	const auth = useContext(AuthContext);

	//---------STATEs----------
	const [dataState, setDataState] = useState(undefined);
	const [loadingState, setLoadingState] = useState(true);

	const [currentIndex, setCurrentIndex] = useState(0);

	const [currentEditIndex, setCurrentEditIndex] = useState(0);

	//--------EVENT HANDLERS-----------
	const onListClick = (index) => {
		setCurrentIndex(index)
	};

	const onAddFaq = ({description, title}) => {
		database.dbConnection.ref().child('faqs').push({
			title,
			description
		})
	};

	const onEditFaq = () => {

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
					defaultValue: dataState ? dataState[currentEditIndex].title : ''
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
					defaultValue: dataState ? dataState[currentEditIndex].description : ''
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

	const FAQAddForm = withModal(FormForModal(Form, formConfigs, buttonConfigs));


	useEffect(() => {

		database.dbConnection.ref('faqs/').on('value', snapshot => {

			setDataState(Object.keys(snapshot.val()).map(key => {
				return {
					...snapshot.val()[key],
					key
				}
			}));
			setCurrentIndex(0);
			setLoadingState(false);
		});
	}, []);

	const titlesArray = dataState ? dataState.map(data => data.title) : '';


	return (
		<>
			<h2 className="col align-self-center">Frequently Asked Questions</h2>
			<div className="container-fluid row">
				{dataState &&
				<FAQList classes="list-group border-right col-4" list={titlesArray} onListClick={onListClick}
				         onEditClick={onEditFaq}/>}

				{dataState ? <FAQDescription
					classes="col-6">{dataState[currentIndex].description}</FAQDescription> : 'Loading your data'}
			</div>
			{auth.user && <FAQAddForm modalId={'addFAQ'} onSubmit={onAddFaq} modalTitle={'Add FAQ'}/>}
		</>
	);
}