import React, {useRef,useEffect} from 'react';

import EditForm from './EditForm/EditForm';
import Form from '../Form/Form';

const Edit = (props) => {

	// const editRef = useRef(null);
	//
	// useEffect(() => {
	// 	console.log(editRef.current.classList); // watch for show attribute on class list
	// 	console.log(props);
	// });

	const EditProfileForm = EditForm(Form, props.formConfigs);

	return (
		<div className="modal fade" id="editModal" tabIndex="-1" role="dialog" aria-labelledby="editModalCenter"
		     aria-hidden="true">
			<div className="modal-dialog modal-dialog-centered" role="document">
				<div className="modal-content">
					<div className="modal-header">
						<h5 className="modal-title" id="editModalLabel">Edit form</h5>
						<button type="button" className="close" data-dismiss="modal" aria-label="close">
							<span aria-hidden="true">&times;</span>
						</button>
					</div>

					<div className="modal-body">
						<EditProfileForm/>
					</div>
					<div className="modal-footer">
						<button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
						<button type="button" className="btn btn-primary">Save changes</button>
					</div>
				</div>
			</div>
		</div>
	)
};

export default Edit;