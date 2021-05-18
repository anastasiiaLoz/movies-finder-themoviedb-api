import React, { Component } from "react";

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
      // console.log(data);
      this.setState({ reviews: data });
    } catch (error) {}
  }

  render() {
    const { content } = this.state.reviews;
    return (
      <ul>
        {content && content.length ? (
          content.map(({ id, author, content }) => (
            <li key={id}>
              <p>{author}:</p>
              <p>Character: {content}</p>
            </li>
          ))
        ) : (
          <p>We don't have any review for this movie. It's boring anyway</p>
        )}
      </ul>
    );
  }
}

export default Reviews;
