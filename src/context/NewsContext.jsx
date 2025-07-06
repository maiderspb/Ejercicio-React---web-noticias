import { createContext, useEffect, useState } from "react";

export const NewsContext = createContext();

export function NewsProvider({ children }) {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const localNews = JSON.parse(localStorage.getItem("news")) || [];

    const apiKey = import.meta.env.VITE_NYT_API_KEY;
    const endpoint = "https://api.nytimes.com/svc/topstories/v2/home.json";

    fetch(`${endpoint}?api-key=${apiKey}`)
      .then((res) => res.json())
      .then((data) => {
        const apiNews = data.results.map((item) => ({
          id: item.url,
          title: item.title,
          category: item.section,
          body: item.abstract,
          date: item.published_date,
          url: item.url,
          isLocal: false,
        }));

        const combined = [...localNews, ...apiNews];
        setNews(combined);
      })
      .catch((err) => console.error("Error al cargar noticias:", err));
  }, []);

  const addNews = (newItem) => {
    const itemWithMeta = {
      ...newItem,
      id: crypto.randomUUID(),
      isLocal: true,
    };
    setNews((prevNews) => {
      const updated = [itemWithMeta, ...prevNews];
      const localOnly = updated.filter((n) => n.isLocal);
      localStorage.setItem("news", JSON.stringify(localOnly));
      return updated;
    });
  };

  const deleteNews = (id) => {
    setNews((prevNews) => {
      const updated = prevNews.filter((item) => item.id !== id);
      const localOnly = updated.filter((n) => n.isLocal);
      localStorage.setItem("news", JSON.stringify(localOnly));
      return updated;
    });
  };

  return (
    <NewsContext.Provider value={{ news, addNews, deleteNews }}>
      {children}
    </NewsContext.Provider>
  );
}
