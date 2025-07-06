import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles/main.scss";
import { BrowserRouter } from "react-router-dom";
import { NewsProvider } from "./context/NewsContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NewsProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </NewsProvider>
  </React.StrictMode>
);
