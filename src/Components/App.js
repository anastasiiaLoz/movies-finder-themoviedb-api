import React, { Suspense } from "react";
import HomePage from "./pages/HomePage";
import MovieDetailsPage from "./pages/MovieDetailsPage";
import MoviesPage from "./pages/MoviesPage";
import Cast from "./pages/Cast";
import Reviews from "./pages/Reviews";
import { Route, Switch } from "react-router";
import NavBar from "./navBar/NavBar";

const App = () => {
  return (
    <>
      <NavBar />
      <Suspense fallback={<h2>Loading...</h2>}>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/movies" exact component={MoviesPage} />
          <Route path="/movies/:movieId" component={MovieDetailsPage} />
          <Route path="/movies/:movieId/cast" component={Cast} />
          <Route path="/movies/:movieId/reviews" component={Reviews} />
        </Switch>
      </Suspense>
    </>
  );
};

export default App;
