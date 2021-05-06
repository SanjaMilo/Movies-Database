import React, { useState } from 'react';
import logo from '../../logo.png';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import { connect } from 'react-redux';
import '../../styles/navbar.css';

const Navbar = (props) => {
	const { auth, profile } = props; // destructuring props
	console.log(auth);

	const [ openMenu, setOpenMenu ] = useState(false);

	const handleMenuOpening = () => {
		setOpenMenu(!openMenu);
	};

	// Display the corresponding links, according to whether user is signed-in or not
	const links = auth.uid ? <SignedInLinks profile={profile} /> : <SignedOutLinks />;

	return (
		<div className="Navbar bg-red shadow">
			<nav className="navbar navbar-expand-lg">
				<div className="container-fluid">
					<div className="navbar-header">
						<Link className="navbar-brand" to="/">
							<img src={logo} alt="Logo" />
						</Link>
					</div>
					<button onClick={handleMenuOpening} className="nav-toggler" type="button">
						<i className="fas fa-bars" />
					</button>
					<div className="nav-collapse" style={{ display: openMenu ? 'block' : 'none' }} id="navbar-collapse">
						<ul className="navbar-nav-collapsed">
							{links}
							<li className="nav-item">
								<a href="https://www.imdb.com/" target="_blank" rel="noreferrer">
									<i className="fab fa-imdb fa-3x" />
								</a>
							</li>
						</ul>
					</div>
					<ul className="navbar-nav">
						{links}
						<li className="nav-item">
							<a href="https://www.imdb.com/" target="_blank" rel="noreferrer">
								<i className="fab fa-imdb fa-3x" />
							</a>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		auth: state.firebase.auth,
		profile: state.firebase.profile
	};
};

export default connect(mapStateToProps)(Navbar);
