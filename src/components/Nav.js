import React, { useState, useEffect } from "react";
import Footer from "./Footer";

function Nav() {
  const styles = {
    position: "absolut",
    top: "0px",
    left: "0px",
    zIndex: "999999",
    height: "100vh",
    width: "100vw",
    backgroundColor: "yellow",
    overflow: "hidden",
  };

  return (
    <nav style={styles}>
      <ul className="mainnav">
        <li className="mainnav_item">
          <a href="/">Home</a>
        </li>
        <li className="mainnav_item">
          <a href="/drinks">Drinks</a>
        </li>
        <li className="mainnav_item">Location</li>
        <li className="mainnav_item">About</li>
      </ul>
      <Footer />
    </nav>
  );
}

export default Nav;
