import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import Main from "../main/main.jsx";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import MoviePage from "../moviePage/moviePage.jsx";

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      movieInfo: null
    };

    this.cardClickHandler = this.cardClickHandler.bind(this);
  }

  cardClickHandler(movieId) {
    this.setState({movieInfo: this.props.filmsFullInfo.get(movieId)});
  }

  _renderMain() {
    const {movie, films} = this.props;
    return (
      <Main
        movie={movie}
        films={films}
        onMovieCardClick={this.cardClickHandler}
      />
    );
  }

  _renderMoviePage() {
    const {reviews} = this.props;
    return (
      <MoviePage
        movieFullInfo={this.state.movieInfo}
        reviews={reviews}
      />
    );
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderMain()}
          </Route>
          <Route exact path="/dev-film">
            {this._renderMoviePage()}
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  movie: PropTypes.object.isRequired,
  films: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    poster: PropTypes.string,
    id: PropTypes.number,
    preview: PropTypes.string
  })).isRequired,
  filmsFullInfo: PropTypes.instanceOf(Map).isRequired,
  reviews: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    text: PropTypes.string,
    date: PropTypes.string,
    rating: PropTypes.string
  })).isRequired
};

export default App;
