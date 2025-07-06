import { useEffect, useState } from "react";
import axios from "axios";

export default function NewsAPI() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?country=us&apiKey=${
          import.meta.env.VITE_NEWS_API_KEY
        }`
      )
      .then((res) => setArticles(res.data.articles))
      .catch((err) => console.error(err));
  }, []);

  return (
    <section>
      <h2>Noticias del Mundo (API)</h2>
      {articles.map((article, i) => (
        <article key={i}>
          <h3>{article.title}</h3>
          <p>{article.description}</p>
          <small>{article.publishedAt}</small>
          <a href={article.url} target="_blank">
            Leer más
          </a>
        </article>
      ))}
    </section>
  );
}
