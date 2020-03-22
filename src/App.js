import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useLocation,
} from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Drinks from "./components/Drinks";
import Footer from "./components/Footer";
import BurgermenuIcon from "./components/BurgermenuIcon";
import Error from "./components/Error";

import "./styles/App.css";

function App() {
  const [title, setTitle] = useState("Lama Bar");
  const [showNav, setShowNav] = useState({
    isVisible: false,
  });

  //Toggle Visibility of NavOverlay
  function toggleVisibility() {
    if (showNav.isVisible === true) {
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

  // Change title according to Pathname
  const locationTitle = useLocation().pathname.substring(1); //Return pathname without "/"
  useEffect(() => {
    switch (locationTitle) {
      case "/drinks":
        setTitle("Our Drinks");
        break;
      default:
        setTitle("Lama Bar");
    }
  }, [locationTitle]);

  return (
    <div>
      <BurgermenuIcon toggleNav={toggleVisibility} />
      {!showNav.isVisible ? "" : <Nav toggleOpen={showNav} />}
      <h1 className="title">{title}</h1>
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
