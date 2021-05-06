import axios from 'axios';
import { SEARCH_MOVIE, FETCH_MOVIES, FETCH_MOVIE, SEARCH_ERROR, MOVIE_ERROR, LOADING } from './actionTypes';
import { APIKey } from '../APIKey';

export const searchMovie = (keyword) => {
	return (dispatch) => {
		dispatch({
			type: SEARCH_MOVIE,
			payload: keyword
		});
	};
};

export const fetchMovies = (keyword) => {
	return (dispatch) => {
		axios
			.get(`https://www.omdbapi.com/?s=${keyword}&apikey=${APIKey}`)
			.then((res) =>
				dispatch({
					type: FETCH_MOVIES,
					payload: res.data
				})
			)
			.catch((err) => {
				console.log(err);
				dispatch({ type: SEARCH_ERROR, err})
			});
	};
};

export const fetchMovie = (id) => (dispatch) => {
	axios
		.get(`https://www.omdbapi.com/?i=${id}&apikey=${APIKey}`)
		.then((res) =>
			dispatch({
				type: FETCH_MOVIE,
				payload: res.data
			})
		)
		.catch((err) => {
			console.log(err);
			dispatch({ type: MOVIE_ERROR, err})
		});
};

export const setLoading = () => {
	return {
		type: LOADING
	};
};
