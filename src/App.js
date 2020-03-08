import React, { useState, useEffect } from "react";
import "./App.css";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Drinks from "./components/Drinks";
import Footer from "./components/Footer";

function App() {
  const [title, useTitle] = useState("Lama Bar");
  return (
    <div>
      {/* <Nav /> */}
      <h1 className="title">{title}</h1>
      <Home />
      <Drinks />
      <Footer />
    </div>
  );
}

export default App;
