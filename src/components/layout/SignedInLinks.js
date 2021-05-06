import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../../actions/authActions';

const SignedInLinks = (props) => {
	const { profile, signOut } = props; // destructuring props;

	return (
		<React.Fragment>
			<li className="nav-item">
				<span onClick={signOut} className="nav-link">SIGN OUT</span>
			</li>
			<li className="nav-item">
				<NavLink to="/" className="nav-link btn-round">
					{profile.initials}
				</NavLink>
			</li>
		</React.Fragment>
	);
};

const mapDispatchToProps = (dispatch) => {
	return {
		signOut: () => dispatch(signOut())
	}
};

export default connect(null, mapDispatchToProps)(SignedInLinks);
