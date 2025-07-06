import { useContext, useState } from "react";
import { NewsContext } from "../context/NewsContext";

export default function ListNews() {
  const { news, deleteNews } = useContext(NewsContext);
  const [search, setSearch] = useState("");

  const sortedNews = [...news].sort((a, b) => {
    if (a.isLocal && !b.isLocal) return -1;
    if (!a.isLocal && b.isLocal) return 1;
    return new Date(b.date) - new Date(a.date);
  });

  const filtered = sortedNews.filter((n) =>
    n.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section style={{ maxWidth: "700px", margin: "0 auto", padding: "1rem" }}>
      <input
        type="text"
        placeholder="Buscar por título..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          padding: "0.5rem",
          width: "250px",
          marginBottom: "1rem",
          display: "block",
          borderRadius: "4px",
          border: "1px solid #ccc",
          fontSize: "0.9rem",
        }}
      />

      <h2>Noticias Recientes</h2>

      {filtered.length === 0 ? (
        <p>No hay noticias que coincidan.</p>
      ) : (
        filtered.map((item) => (
          <article
            key={item.id}
            style={{
              marginBottom: "1.5rem",
              borderBottom: "1px solid #ccc",
              paddingBottom: "1rem",
            }}
          >
            <h3>
              {item.url ? (
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#0077cc", textDecoration: "none" }}
                >
                  {item.title}
                </a>
              ) : (
                item.title
              )}
            </h3>

            <p>
              <strong>Categoría:</strong> {item.category}
            </p>
            <p>{item.body}</p>
            <small>{new Date(item.date).toLocaleString()}</small>

            {item.isLocal && (
              <div style={{ marginTop: "0.75rem" }}>
                <button
                  onClick={() => {
                    if (
                      window.confirm("¿Estás seguro de eliminar esta noticia?")
                    ) {
                      deleteNews(item.id);
                    }
                  }}
                  style={{
                    background: "#dc3545",
                    color: "#fff",
                    padding: "0.5rem 1rem",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer",
                  }}
                >
                  Delete New
                </button>
              </div>
            )}
          </article>
        ))
      )}
    </section>
  );
}
