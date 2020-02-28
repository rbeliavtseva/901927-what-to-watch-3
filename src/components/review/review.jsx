import React from "react";
import PropTypes from "prop-types";

const Review = ({review}) => {
  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{review.text}</p>

        <footer className="review__details">
          <cite className="review__author">{review.name}</cite>
          <time className="review__date">{review.date}</time>
        </footer>
      </blockquote>

      <div className="review__rating">{review.rating}</div>
    </div>
  );
};

Review.propTypes = {
  review: PropTypes.exact({
    name: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    rating: PropTypes.string.isRequired
  }).isRequired
};


export default Review;
