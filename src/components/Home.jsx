import { FaRegSmileBeam, FaNewspaper, FaPenFancy } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <section className="home-container">
      <h1 className="home-title">🗞️ Welcome to Uplifting News! ✨🌍</h1>
      <p className="home-description">
        💡 Discover inspiring stories from around the world or share your own!
        📝🌟
      </p>

      <div className="home-icons">
        <Link to="/form" className="icon-card">
          <FaPenFancy className="icon" />
          <p>Create News</p>
        </Link>
        <Link to="/list" className="icon-card">
          <FaNewspaper className="icon" />
          <p>List News</p>
        </Link>
      </div>
    </section>
  );
}
