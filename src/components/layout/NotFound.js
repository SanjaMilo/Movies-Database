import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/notFound.css';

const NotFound = () => {
	return (
		<div className="NotFound">
			<p className="not-found colored-text">
				Error 404, page not found!
                <br/>
				<Link to="/" className="btn">
                &#8592; Go to Home Page
				</Link>
			</p>
		</div>
	);
};

export default NotFound;
