import React, {useRef} from 'react';
import PropTypes from 'prop-types';

import EditFormModal from './EditForm/EditFormModal';
import Form from '../Form/Form';

const Edit = (props) => {

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
			className: 'btn btn-primary',
			//todo: for progressBar modal
			['data-toggle']: 'modal',
			['data-target']: 'progressModal',
			// ['data-dismiss']: 'modal',
			onClick: function (e) {
				console.log('click');
			}
		}
	];

	const formConfigs = [
		{
			labelFor: 'name',
			labelDescription: 'Name',
			formControlConfigs: {
				elementConfig: {
					id: 'name',
					name: 'name',
					defaultValue: props.profileData.name || ''
				},
				elementType: 'input',
				classes: 'form-control'
			}
		},
		{
			labelFor: 'description',
			labelDescription: 'Description: ',
			formControlConfigs: {
				elementConfig: {
					id: 'description',
					name: 'description',
					defaultValue: props.profileData.description || ''
				},
				elementType: 'textarea',
				classes: 'form-control'
			}
		},
		{
			labelFor: 'portfolioLink',
			labelDescription: 'Portfolio Link: ',
			formControlConfigs: {
				elementConfig: {
					id: 'portfolioLink',
					name: 'portfolioLink',
					defaultValue: props.profileData.portfolioLink || ''
				},
				elementType: 'input',
				classes: 'form-control'
			}
		},
		{
			labelFor: 'avatar',
			labelDescription: 'Upload your avatar: ',
			formControlConfigs: {
				elementConfig: {
					id: 'avatar',
					name: 'avatar',
					type: 'file',
					accept: 'image/png, image/jpeg'
				},
				elementType: 'input',
				classes: 'form-control',
			}
		}
	];

	const EditProfileForm = EditFormModal(Form, formConfigs, buttonConfigs);

	const closeButtonRef = useRef(null);

	return (
		<div className="modal fade" id="editModal" tabIndex="-1" role="dialog" aria-labelledby="editModalCenter"
		     aria-hidden="true">
			<div className="modal-dialog modal-dialog-centered" role="document">
				<div className="modal-content">
					<div className="modal-header">
						<h5 className="modal-title" id="editModalLabel">Edit profile</h5>
						<button ref={closeButtonRef} type="button" className="close" data-dismiss="modal" aria-label="close">
							<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<div className="modal-body">
						<EditProfileForm onSubmit={props.onSubmit} closeModal={() => closeButtonRef.current.click()}/>
					</div>
				</div>
			</div>
		</div>
	)
};

Edit.propTypes = {
	onSubmit : PropTypes.func.isRequired
};

export default Edit;