import React from 'react';
import PropTypes from 'prop-types'

const ProgressBar = (props) => (
	<div className="progress">
		<h3>{props.progressVal < 100 ? `Uploading...` : `Completed!`}</h3>
		<div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar"
		     aria-valuenow={`${props.progressVal}`}
		     aria-valuemin="0" aria-valuemax="100" style={{width: '75%'}}>
		</div>
	</div>
);

ProgressBar.propTypes = {
	progressVal : PropTypes.number.isRequired
};

export default ProgressBar;