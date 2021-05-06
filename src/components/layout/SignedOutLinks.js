import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedOutLinks = () => {
	return (
		<>
			<li className="nav-item">
				<NavLink className="nav-link" aria-current="page" to="/signup">
					SIGN UP
				</NavLink>
			</li>
			<li className="nav-item">
				<NavLink className="nav-link" to="/signin">
					SIGN IN
				</NavLink>
			</li>
		</>
	);
};

export default SignedOutLinks;
