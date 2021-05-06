import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import MoviesSearched from '../movies/MoviesSearched';
import Loader from '../layout/Loader';
import { setLoading } from '../../actions/searchActions';
import { Redirect } from 'react-router-dom'

const MoviesList = (props) => {
	const { loader, setLoading, auth } = props;

	useEffect(() => {
		setLoading();
	}, []);

	// if user signs out, redirects to '/signin' page
	if (!auth.uid) return <Redirect to='/signin' />

	return <div className="MoviesList">{loader ? <Loader /> : <MoviesSearched />}</div>;
};

const mapStateToProps = (state) => ({
	loader: state.movies.loading,
	auth: state.firebase.auth
});

export default connect(mapStateToProps, { setLoading })(MoviesList);
