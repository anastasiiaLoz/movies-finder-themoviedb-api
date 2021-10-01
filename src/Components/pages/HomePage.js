import React, { Component } from "react";
import { Link } from "react-router-dom";
import styles from "../pages/HomePage.module.css";

class HomePage extends Component {
  state = {
    trendingMoviesList: []
  };

  async componentDidMount() {
    try {
      const response = await fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=207c2cd605bda22c2345988002ae47b0`);
      const data = await response.json();
      console.log(data);
      this.setState({ trendingMoviesList: data.results });
    } catch (error) {}
  }

  render() {
    return (
      <div className={styles.homePage}>
        <h2 className={styles.trendingTitle}>Trending today</h2>
        <ul className={styles.trendingList}>
          {this.state.trendingMoviesList.map(movie => (
            <li className={styles.trendingMovies} key={movie.id}>
              <Link to={`/movies/${movie.id}`}>
                {<img src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} alt={movie.id} />}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default HomePage;
