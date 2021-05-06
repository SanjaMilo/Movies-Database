import React from 'react';
import '../../styles/footer.css';

const Footer = () => {
	return (
		<div className="Footer container-fluid bg-grey text-center">
			Developed By: &nbsp;
			<span className="colored-text">Sanja M. </span>
			, Using <i className="fab fa-react" /> React.js, Hooks &amp; Redux, Firebase authentication and integrated
			with external movies data API &nbsp;
			<a className="colored-text" href="http://www.omdbapi.com/" target="_blank" rel="noopener noreferrer">
				OMDB
			</a>
		</div>
	);
};

export default Footer;
