import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import Loader from '../layout/Loader';
import { fetchMovie, setLoading } from '../../actions/searchActions';
import '../../styles/movieDetails.css';

const MovieDetails = ({loader, movie, fetchMovie, setLoading, match, auth}) => {
	// console.log(movie);

    useEffect( () => {
		if (match.params.id && match.params.id !== "")  {
			fetchMovie(match.params.id);
        	setLoading();
		}
    }, []);

	// if user signs out, redirects to '/signin' page
	if (!auth.uid) return <Redirect to='/signin' />

	return (
		<div className="MovieDetails">
			{ (loader) ? (
				<Loader />
			) : (
				<div className="container details-container">
					<div>{ (movie.Response === 'False') ? <p className="error-text colored-text">{movie.Error} !</p> : null }
					</div>
					<div className="row row-details">
						<div className="col-md-4 col-sm-12 card card-body">
							<img src={movie.Poster} className="thumbnail" alt="Poster" />
						</div>
						<div className="col-md-7 offset-md-1 col-sm-12 offset-sm-0 col-info">
							<h2 className="movie-title">{movie.Title}</h2>
							<ul className="list-group details-info">
								<li className="list-group-item">
									<strong>Genre:</strong> {movie.Genre}
								</li>
								<li className="list-group-item">
									<strong>Released:</strong> {movie.Released}
								</li>
								<li className="list-group-item">
									<strong>Country:</strong> {movie.Country}
								</li>
								<li className="list-group-item">
									<strong>Language:</strong> {movie.Language}
								</li>
								<li className="list-group-item">
									<strong>Runtime:</strong> {movie.Runtime}
								</li>
								<li className="list-group-item">
									<strong>Rated:</strong> {movie.Rated}
								</li>
								<li className="list-group-item">
									<strong>BoxOffice:</strong> {movie.BoxOffice}
								</li>
								<li className="list-group-item">
									<strong>IMDB Rating:</strong> {movie.imdbRating}
								</li>
								<li className="list-group-item">
									<strong>Production:</strong> {movie.Production}
								</li>
								<li className="list-group-item">
									<strong>Director:</strong> {movie.Director}
								</li>
								<li className="list-group-item">
									<strong>Writer:</strong> {movie.Writer}
								</li>
								<li className="list-group-item">
									<strong>Actors:</strong> {movie.Actors}
								</li>
								<li className="list-group-item">
									<strong>Awards:</strong> {movie.Awards}
								</li>
							</ul>
						</div>
					</div>
					<div className="row">
						<div className="card card-body">
							<div className="col-md-12 details-about">
								<h3>About </h3>
								<p>{movie.Plot}</p>
								<hr />
								<a
									href={'https://www.imdb.com/title/' + movie.imdbID}
									target="_blank"
									rel="noopener noreferrer"
									className="btn"
								>
									View on IMDB
								</a>
								<Link to="/" className="btn">
									Go Back To Search
								</Link>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

const mapStateToProps = (state) => ({
	loader: state.movies.loading,
	movie: state.movies.movie,
	auth: state.firebase.auth
});

const mapDispatchToProps = (dispatch) => {
	return {
		fetchMovie: (movieId) => dispatch(fetchMovie(movieId)),
		setLoading: () => dispatch(setLoading())
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetails);
