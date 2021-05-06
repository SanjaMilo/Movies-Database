import { SEARCH_MOVIE, FETCH_MOVIES, FETCH_MOVIE, LOADING } from '../actions/actionTypes';

const initialState = {
	keyword: '',
	movies: [],
	loading: false,
	movie: [],
	searchError: null
};

const searchReducer = (state = initialState, action) => {

	switch (action.type) {

		case SEARCH_MOVIE:
			console.log(state.keyword)
			return {
				...state,
				keyword: action.payload,
				loading: false
			};

		case FETCH_MOVIES:
			console.log(action)
			return {
				...state,
				movies: action.payload,
				loading: false
			};
		
		case FETCH_MOVIE:
			console.log(action)
			return {
				...state,
				movie: action.payload,
				loading: false
			};

		case LOADING:
			return {
				...state,
				loading: true
			};

		default:
			return state;

	};
};

export default searchReducer;
