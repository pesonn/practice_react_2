import React, { useState, useEffect } from "react";
import "./App.css";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Drinks from "./components/Drinks";

function App() {
  const [title, useTitle] = useState("Lama Bar");
  return (
    <div>
      {/* <Nav /> */}
      <h1 className="title">{title}</h1>
      <Home />
      <Drinks />
    </div>
  );
}

export default App;
