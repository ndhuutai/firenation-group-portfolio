import React, {useRef, forwardRef} from 'react';

const withModal = (Component) => {
	return (props) => {
		const closeButtonRef = useRef(null);
		return (
			<div className="modal fade" id={props.modalId} tabIndex="-1" role="dialog" aria-labelledby="editModalCenter"
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
							<Component {...props} closeModal={() => closeButtonRef.current.click()}/>
						</div>
					</div>
				</div>
			</div>
		)
	}
};

export default withModal;