import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Drinks from "./components/Drinks";
import Footer from "./components/Footer";

function App() {
  const [title, setTitle] = useState("Lama Bar");
  const [showNav, setShowNav] = useState({
    isVisible: false,
  });

  function toggleVisibility() {
    if (showNav.isVisible == true) {
      setShowNav({
        isVisible: false,
      });
      document.body.style.overflow = null;
    } else {
      setShowNav({
        isVisible: true,
      });
      document.body.style.overflow = "hidden";
    }
  }

  return (
    <div>
      <button onClick={toggleVisibility}>Menü</button>
      {!showNav.isVisible ? "" : <Nav />}
      <h1 style={{ fontSize: "55px" }} className="title">
        {title}
      </h1>
      <Home />
      <Drinks />
      <Footer />
    </div>
  );
}

export default App;
