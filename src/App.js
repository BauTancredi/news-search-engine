import React, { Fragment, useState, useEffect } from "react";
import Header from "./components/Header";
import Form from "./components/Form";

function App() {
  const [category, setCategory] = useState("");
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      const url = `
      http://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${process.env.REACT_APP_API_KEY}`;

      const response = await fetch(url);
      const news = await response.json();

      setNews(news.articles);
    };

    fetchApi();
  }, [category]);
  return (
    <Fragment>
      <Header title="News search engine" />
      <div className="container white">
        <Form setCategory={setCategory} />
      </div>
    </Fragment>
  );
}

export default App;
