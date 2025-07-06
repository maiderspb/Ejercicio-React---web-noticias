import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Form from "./components/Form";
import ListNews from "./components/ListNews";
import NewsAPI from "./components/NewsAPI";

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/form" element={<Form />} />
          <Route path="/list" element={<ListNews />} />
          <Route path="/api-news" element={<NewsAPI />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
