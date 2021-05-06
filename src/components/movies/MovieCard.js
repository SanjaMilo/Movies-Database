import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/movieCard.css';

const MovieCard = ({ movieObj }) => {
	// console.log(movieObj);

	return (
		<div className="MovieCard">
			<div className="card card-body text-center h-100">
				<img
					className="w-100 mb-2"
					src={movieObj.Poster === 'N/A' ? require(`../../images/film.jpg`).default : movieObj.Poster}
					alt="Movie Cover"
				/>
				<h5 className="card-title">
					{movieObj.Title} - {movieObj.Year}
				</h5>
				<p className="movie-type">{movieObj.Type}</p>
				<Link className="btn btn-search btn-small" to={'/moviedetails/' + movieObj.imdbID}>
					Movie Details +
				</Link>
			</div>
		</div>
	);
};

export default MovieCard;
