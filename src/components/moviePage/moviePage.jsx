import React from "react";
import PropTypes from "prop-types";
import Tabs from "../tabs/tabs.jsx";
import Review from "../review/review.jsx";

const MoviePage = ({movieFullInfo, reviews}) => {
  if (movieFullInfo === null) {
    return (null);
  }

  const reviewsFirstCol = reviews.slice(0, 3).map((review) =>
    <Review
      key={review.name}
      review={review}
    />
  );

  const reviewsSecondCol = reviews.slice(3, 6).map((review) =>
    <Review
      key={review.name}
      review={review}
    />
  );

  return (
    <section className="movie-card movie-card--full">
      <div className="movie-card__hero">
        <div className="movie-card__bg">
          <img src={movieFullInfo.backgroundPoster} alt={movieFullInfo.title} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header movie-card__head">
          <div className="logo">
            <a href="main.html" className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <div className="user-block">
            <div className="user-block__avatar">
              <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
            </div>
          </div>
        </header>

        <div className="movie-card__wrap">
          <div className="movie-card__desc">
            <h2 className="movie-card__title">{movieFullInfo.title}</h2>
            <p className="movie-card__meta">
              <span className="movie-card__genre">{movieFullInfo.genre}</span>
              <span className="movie-card__year">{movieFullInfo.year}</span>
            </p>

            <div className="movie-card__buttons">
              <button className="btn btn--play movie-card__button" type="button">
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#play-s"></use>
                </svg>
                <span>Play</span>
              </button>
              <button className="btn btn--list movie-card__button" type="button">
                <svg viewBox="0 0 19 20" width="19" height="20">
                  <use xlinkHref="#add"></use>
                </svg>
                <span>My list</span>
              </button>
              <a href="add-review.html" className="btn movie-card__button">Add review</a>
            </div>
          </div>
        </div>
      </div>

      <div className="movie-card__wrap movie-card__translate-top">
        <div className="movie-card__info">
          <div className="movie-card__poster movie-card__poster--big">
            <img src={movieFullInfo.poster} alt={movieFullInfo.title} width="218" height="327" />
          </div>

          <Tabs>
            <div label="Overview">
              <div className="movie-rating">
                <div className="movie-rating__score">{movieFullInfo.rating}</div>
                <p className="movie-rating__meta">
                  <span className="movie-rating__level">{movieFullInfo.ratingLevel}</span>
                  <span className="movie-rating__count">{movieFullInfo.ratingCount} ratings</span>
                </p>
              </div>

              <div className="movie-card__text">
                <p>{movieFullInfo.text}</p>

                <p className="movie-card__director"><strong>Director: {movieFullInfo.director}</strong></p>

                <p className="movie-card__starring"><strong>Starring: {movieFullInfo.starring.slice(0, 3).join(`, `)} and other</strong></p>
              </div>
            </div>

            <div label="Details">
              <div className="movie-card__text movie-card__row">
                <div className="movie-card__text-col">
                  <p className="movie-card__details-item">
                    <strong className="movie-card__details-name">Director</strong>
                    <span className="movie-card__details-value">{movieFullInfo.director}</span>
                  </p>
                  <p className="movie-card__details-item">
                    <strong className="movie-card__details-name">Starring</strong>
                    <span className="movie-card__details-value">
                      {movieFullInfo.starring.join(`,\n`)}
                    </span>
                  </p>
                </div>

                <div className="movie-card__text-col">
                  <p className="movie-card__details-item">
                    <strong className="movie-card__details-name">Run Time</strong>
                    <span className="movie-card__details-value">{movieFullInfo.runTime}</span>
                  </p>
                  <p className="movie-card__details-item">
                    <strong className="movie-card__details-name">Genre</strong>
                    <span className="movie-card__details-value">{movieFullInfo.genre}</span>
                  </p>
                  <p className="movie-card__details-item">
                    <strong className="movie-card__details-name">Released</strong>
                    <span className="movie-card__details-value">{movieFullInfo.year}</span>
                  </p>
                </div>
              </div>
            </div>

            <div label="Reviews">
              <div className="movie-card__reviews movie-card__row">
                <div className="movie-card__reviews-col">
                  {reviewsFirstCol}
                </div>

                <div className="movie-card__reviews-col">
                  {reviewsSecondCol}
                </div>
              </div>
            </div>

          </Tabs>
        </div>
      </div>
    </section>
  );
};

MoviePage.propTypes = {
  movieFullInfo: PropTypes.shape({
    title: PropTypes.string,
    year: PropTypes.number,
    genre: PropTypes.string,
    director: PropTypes.string,
    starring: PropTypes.arrayOf.string,
    text: PropTypes.string,
    poster: PropTypes.string,
    backgroundPoster: PropTypes.string,
    rating: PropTypes.number,
    ratingLevel: PropTypes.string,
    ratingCount: PropTypes.number,
    runTime: PropTypes.string.isRequired
  }),
  reviews: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    text: PropTypes.string,
    date: PropTypes.string,
    rating: PropTypes.string
  })).isRequired
};

export default MoviePage;
