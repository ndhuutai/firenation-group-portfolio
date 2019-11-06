import React, {useRef,useEffect} from 'react';

const Edit = (props) => {

	// const editRef = useRef(null);
	//
	// useEffect(() => {
	// 	console.log(editRef.current.classList); // watch for show attribute on class list
	// 	console.log(props);
	// });

	return (
		<div ref={editRef} className="modal fade" id="editModal" tabIndex="-1" role="dialog" aria-labelledby="editModalCenter"
		     aria-hidden="true" on>
			<div className="modal-dialog modal-dialog-centered" role="document">
				<div className="modal-content">
					<div className="modal-header">
						<h5 className="modal-title" id="editModalLabel">Edit form</h5>
						<button type="button" className="close" data-dismiss="modal" aria-label="close">
							<span aria-hidden="true">&times;</span>
						</button>
					</div>

					<div className="modal-body">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ad dolor doloribus eos eum
						eveniet hic modi nisi numquam odio omnis optio placeat, possimus quis quod recusandae
						repellendus sunt voluptate.
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