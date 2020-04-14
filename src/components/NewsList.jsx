import React from "react";
import News from "./News";

const NewsList = ({ news }) => (
  <div className="row">
    {news.map((element) => (
      <News key={element.url} element={element} />
    ))}
  </div>
);

export default NewsList;
