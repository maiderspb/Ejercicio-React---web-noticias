import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Header() {
  const [dark, setDark] = useState(
    () => localStorage.getItem("darkMode") === "true"
  );

  useEffect(() => {
    document.body.classList.toggle("dark-mode", dark);
    localStorage.setItem("darkMode", dark);
  }, [dark]);

  return (
    <header>
      <h1>My News Website</h1>
      <nav>
        <Link to="/home">Home</Link>
        <Link to="/form">Create News</Link>
        <Link to="/list">List News</Link>
      </nav>
      <button onClick={() => setDark(!dark)}>
        {dark ? "☀️ Modo Claro" : "🌙 Modo Oscuro"}
      </button>
    </header>
  );
}
