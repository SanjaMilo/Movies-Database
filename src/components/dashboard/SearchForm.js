import React from 'react';
import { connect } from 'react-redux';
import { searchMovie, fetchMovies, setLoading } from '../../actions/searchActions';
import '../../styles/searchForm.css';

const SearchForm = (props) => {
    const { keyword, searchMovie, fetchMovies, setLoading, history } = props; // destructuring props

    const handleInputChange = (e) => {
        searchMovie(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        fetchMovies(keyword);
        setLoading();
        searchMovie(""); // empty input field
        history.push('/movieslist'); // redirect to page /movieslist to show the search result
    }

        return(
            <div className="SearchForm">
                <form className="search" onSubmit={(e) => {handleSubmit(e)}}>
                    <h2 className="title"><img className="title-image" src={require(`../../images/movies.png`).default} alt="Will Smith"/><i className="fas fa-search"></i> Search movies and series...</h2>
                    <div className="input-field">
                        <input value={keyword} onChange={(e) => {handleInputChange(e)}} className="form-control search-movies" type="text" id="text" placeholder="Search..." />
                    </div>
                    <div className="input-field">
                        <button type="submit" className="btn-search btn">Search</button>
                    </div>
                </form>
            </div>
        )
};

const mapStateToProps = (state) => ({
    keyword: state.movies.keyword
  });

export default connect(mapStateToProps, { searchMovie, fetchMovies, setLoading })(SearchForm);