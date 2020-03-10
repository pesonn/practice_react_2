import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch, useLocation } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Drinks from "./components/Drinks";
import Footer from "./components/Footer";
import Error from "./components/Error";

function App() {
  const [title, setTitle] = useState("Lama Bar");
  const [showNav, setShowNav] = useState({
    isVisible: false,
  });

  // Change title according to Pathname
  const locationTitle = useLocation().pathname.substring(1); //Return Pathname without "/"
  useEffect(() => {
    switch (locationTitle) {
      case "/drinks":
        setTitle("Our Drinks");
        break;
      default:
        setTitle("Lama Bar");
    }
  });

  //Toggle Visibility of NavOverlay
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
      {console.log(useLocation().pathname.substring(1))}
      <button onClick={toggleVisibility}>Menü</button>
      {!showNav.isVisible ? "" : <Nav />}
      <h1 style={{ fontSize: "55px" }} className="title">
        {title}
      </h1>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/drinks" component={Drinks} />
        <Route component={Error} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
