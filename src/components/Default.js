import React from 'react';
import { Link } from 'react-router-dom';

const Default = () => (
	<div className="page-not-found">
		<p className="page-not-found__message"> Page not found. Click <Link className="page-not-found__link" to="/">here</Link> to go back to the home page.</p>
	</div>
)

export default Default;