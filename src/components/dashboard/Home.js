import React from 'react';
import SearchForm from './SearchForm';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const Home = (props) => {
	const { auth } = props;

	// Route guarding -> (if the user is not signed in or signed up, cannot search the Movies database and user is being redirected to the sign up page.)
	if (!auth.uid) return <Redirect to='/signup' />

	return (
		<div className="Home">
			<SearchForm {...props} />
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		auth: state.firebase.auth
	}	
};

export default connect(mapStateToProps)(Home);
