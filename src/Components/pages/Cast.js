import React, { Component } from "react";
import image from "../../picture/veryFamousPerson.jpg";

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
      this.setState({ cast: data });
    } catch (error) {}
  }

  render() {
    const { cast } = this.state.cast;
    return (
      <>
        <ul>
          {cast &&
            cast.map(({ cast_id, profile_path, name, character }) => (
              <li key={cast_id}>
                {!profile_path ? (
                  <img src={image} width="300px" height="400px" />
                ) : (
                  <img src={`https://image.tmdb.org/t/p/w300/${profile_path}`} />
                )}
                <p>{name}</p>
                <p>Character: {character}</p>
              </li>
            ))}
        </ul>
      </>
    );
  }
}

export default Cast;
