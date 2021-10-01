import React, { Component } from "react";
import styles from "../pages/Reviews.module.css";

class Reviews extends Component {
  state = {
    reviews: [],
    id: ""
  };

  async componentDidMount() {
    const id = this.props.match.params.movieId;
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=207c2cd605bda22c2345988002ae47b0&language=en-US&page=1`
      );
      const data = await response.json();
      console.log("reviews", data);
      this.setState({ reviews: data });
    } catch (error) {}
  }

  render() {
    const { results } = this.state.reviews;
    return (
      <ul className={styles.reviewsContainer}>
        {results && results.length ? (
          results.map(({ id, author, content }) => (
            <li className={styles.individualReview} key={id}>
              <p className={styles.reviewAuthor}>{author}:</p>
              <p className={styles.reviewCharacter}>Review: {content}</p>
            </li>
          ))
        ) : (
          <p className={styles.noReview}>We don't have any review for this movie.</p>
        )}
      </ul>
    );
  }
}

export default Reviews;
