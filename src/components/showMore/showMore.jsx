import React from "react";
import PropTypes from "prop-types";

const ShowMore = ({onShowMoreBtnClick}) => {
  return (
    <div className="catalog__more">
      <button className="catalog__button" type="button" onClick={onShowMoreBtnClick}>Show more</button>
    </div>
  );
};

ShowMore.propTypes = {
  onShowMoreBtnClick: PropTypes.func
};

export default ShowMore;
