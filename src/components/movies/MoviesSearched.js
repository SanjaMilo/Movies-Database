import React from 'react';
import { connect } from 'react-redux';
import MovieCard from './MovieCard';
import '../../styles/moviesSearched.css';

const MoviesSearched = (props) => {
    const { movies } = props;
    console.log(movies);

    return(
        <div className="MoviesSearched">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <h2 className="title-list">	<i className="fas fa-video" /> Your movies / series list </h2>
            </div>
            { ( movies.Response === 'True') && (movies.Search.map((movie, inx) => (<MovieCard key={inx} movieObj={movie} />))) }
            <div>{ (movies.Response === 'False') ? <p className="error-text colored-text">{movies.Error} !</p> : null }</div>
        </div>
    )
};

const mapStateToProps = (state) => ({
    movies: state.movies.movies
  });

export default connect(mapStateToProps)(MoviesSearched);