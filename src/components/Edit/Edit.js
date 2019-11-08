import React, {useRef} from 'react';

import EditFormModal from './EditForm/EditFormModal';
import Form from '../Form/Form';

const Edit = (props) => {

	const buttonConfigs = [
		{
			type: 'button',
			name: 'close',
			className: 'btn btn-secondary',
			['data-dismiss']: 'modal',
		},
		{
			type: 'submit',
			name: 'Save changes',
			className: 'btn btn-primary',
			// ['data-dismiss']: 'modal',
			onClick: function (e) {
				console.log('click');
			}
		}
	];

	const EditProfileForm = EditFormModal(Form, props.formConfigs, buttonConfigs);


	const closeButtonRef = useRef(null);


	const onFormSubmit = (e) => {
	};

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
					{/*<div className="modal-footer">*/}
					{/*	<button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>*/}
					{/*	<button type="button" className="btn btn-primary" onClick={onFormSubmit}>Save changes</button>*/}
					{/*</div>*/}
				</div>
			</div>
		</div>
	)
};

export default Edit;