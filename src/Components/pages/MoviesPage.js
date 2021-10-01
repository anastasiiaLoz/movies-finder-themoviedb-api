import React, { Component } from "react";
import { Link } from "react-router-dom";
import styles from "../pages/MoviesPage.module.css";
import errorImage from "../../picture/error.jpeg";

class MoviesPage extends Component {
  state = {
    query: "",
    findMovies: [],
    detailedInfo: {}
  };

  componentDidMount() {
    if (this.props.location.state?.search) {
      fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=207c2cd605bda22c2345988002ae47b0&language=en-US&query=${
          this.props.location.state.search
        }&page=1&include_adult=false`
      )
        .then(response => response.json())
        .then(response =>
          this.setState({
            findMovies: response.results,
            query: this.props.location.state.search
          })
        );
    }
  }

  handleChange = e => {
    this.setState({ query: e.currentTarget.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.history.push({ search: `query=${this.state.query}` });
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=207c2cd605bda22c2345988002ae47b0&language=en-US&query=${
        this.state.query
      }&page=1&include_adult=false`
    )
      .then(response => response.json())
      .then(response => this.setState({ findMovies: response.results }));
  };

  render() {
    return (
      <div className={styles.moviesPage}>
        <h1>Welcome.</h1>
        <h2>Millions of movies, TV shows and people to discover. Explore now.</h2>
        <form className={styles.searchForm} onSubmit={this.handleSubmit}>
          <input
            className={styles.input}
            type="text"
            value={this.state.query}
            onChange={this.handleChange}
            autoComplete="off"
            autoFocus
            placeholder="Search your favourite movie"
          />
          <button type="submit">Search</button>
        </form>

        {this.state.findMovies.map(movie => (
          <div className={styles.foundMoviesContainer} key={movie.id}>
            <Link
              className={styles.foundMoviesLink}
              to={{ pathname: `/movies/${movie.id}`, state: { from: "/movies", query: this.state.query } }}
            >
              <h3 className={styles.foundMovieTitle}>{movie.title}</h3>
            </Link>

            <div className={styles.individualPosterContainer} key={movie.id}>
              <Link to={{ pathname: `/movies/${movie.id}`, state: { from: "/movies", query: this.state.query } }}>
                {!movie.poster_path ? (
                  <img src={errorImage} className={styles.individualPoster} />
                ) : (
                  <img
                    className={styles.individualPoster}
                    src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
                    alt={movie.title}
                  />
                )}
              </Link>
              <div className={styles.scoreContainer} key={movie.id}>
                {movie.vote_average ? <p className={styles.score}>{movie.vote_average}</p> : <p className={styles.score}>0</p>}
              </div>
              <div className={styles.dateContainer} key={movie.key}>
                {movie.popularity ? (
                  <p className={styles.popularity}>Popularity: {movie.popularity.toFixed(2)}</p>
                ) : (
                  <p className={styles.mediaType}>Not defined</p>
                )}
                {movie.release_date ? <p className={styles.releaseDate}>Release date: {parseInt(movie.release_date)}</p> : null}
              </div>
              <div className={styles.overviewContainer}>
                {movie.overview ? (
                  <p className={styles.overviewText}>{movie.overview}</p>
                ) : (
                  <p className={styles.overviewText}>There is no overview to this movie</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default MoviesPage;
