import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { NewsContext } from "../context/NewsContext";

export default function Form() {
  const { addNews } = useContext(NewsContext);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [category, setCategory] = useState("general");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    addNews({
      title,
      body,
      category,
      date: new Date().toLocaleString(),
    });
    navigate("/list");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Crear Nueva Noticia</h2>

      <input
        type="text"
        placeholder="Título"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />

      <textarea
        placeholder="Contenido de la noticia"
        value={body}
        onChange={(e) => setBody(e.target.value)}
        required
        rows="6"
      />

      <label>
        Category:
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="general">General</option>
          <option value="tecnologia">Tecnologhy</option>
          <option value="deportes">Sports</option>
          <option value="salud">Health</option>
          <option value="mundo">World</option>
          <option value="negocios">Business</option>
          <option value="arte">Arts</option>
          <option value="opinion">Opinion</option>
          <option value="tiempo">Weather</option>
        </select>
      </label>

      <button type="submit">Publish</button>
    </form>
  );
}
