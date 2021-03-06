import React, { useState, useEffect } from "react";
import Footer from "./Footer";

import "../styles/navoverlay.css";

function Nav(props) {
  function toggleOpen() {
    const overlay = document.querySelector(".overlay");
    props.toggleOpen.isVisible
      ? overlay.classList.add("opened")
      : overlay.classList.remove("opened");
  }
  useEffect(toggleOpen);

  return (
    <nav className="overlay">
      <ul className="mainnav">
        <li className="mainnav_item">
          <a href="/">Home</a>
        </li>
        <li className="mainnav_item">
          <a href="/drinks">Drinks</a>
        </li>
        <li className="mainnav_item">
          <a href="/#">Location</a>
        </li>
        <li className="mainnav_item">
          <a href="/#">About</a>
        </li>
      </ul>
      {/* <Footer /> */}
    </nav>
  );
}

export default Nav;
