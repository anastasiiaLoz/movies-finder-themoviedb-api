import React, { Component } from "react";
import image from "../../picture/veryFamousPerson.jpg";
import styles from "../pages/Cast.module.css";

class Cast extends Component {
  state = {
    cast: [],
    id: ""
  };

  async componentDidMount() {
    const id = this.props.match.params.movieId;
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/credits?api_key=207c2cd605bda22c2345988002ae47b0&language=en-US`
      );
      const data = await response.json();
      console.log("caaaaaaaaaaaaaaast", data);
      this.setState({ cast: data });
    } catch (error) {}
  }

  render() {
    const { cast } = this.state.cast;
    return (
      <>
        <ul className={styles.castContainer}>
          {cast &&
            cast.map(({ cast_id, profile_path, name, character }) => (
              <li className={styles.castImage} key={cast_id}>
                {!profile_path ? (
                  <img src={image} width="300px" height="450px" />
                ) : (
                  <img src={`https://image.tmdb.org/t/p/w300/${profile_path}`} />
                )}
                <p className={styles.castName}>{name}</p>
                <p className={styles.castCharacter}>Character: {character}</p>
              </li>
            ))}
        </ul>
      </>
    );
  }
}

export default Cast;
