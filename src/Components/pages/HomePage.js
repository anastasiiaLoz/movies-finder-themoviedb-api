import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class HomePage extends Component {
    state = {
        trendingMoviesList: []
    }
    
    async componentDidMount() {
        try {
            const response = await fetch(
                `https://api.themoviedb.org/3/trending/all/day?api_key=207c2cd605bda22c2345988002ae47b0`
            );
            const data = await response.json()
            console.log(data);
            this.setState({ trendingMoviesList: data.results})
        } catch (error) {
            
        }
    }



    render() {
        return (
            <>
            <h2>Trending today</h2>
            <ul>
                {this.state.trendingMoviesList.map((movie) => (
                    <li key={movie.id}>
                        <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
                    </li>
                ))}
                </ul>
            </>
        );
    }
}

export default HomePage;