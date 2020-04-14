import React from "react";
import PropTypes from "prop-types";

import News from "./News";

const NewsList = ({ news }) => (
  <div className="row">
    {news.map((element) => (
      <News key={element.url} element={element} />
    ))}
  </div>
);

NewsList.propTypes = {
  news: PropTypes.array.isRequired,
};

export default NewsList;
