import React, { useState, useEffect } from "react";
import Footer from "./Footer";

import "../styles/navoverlay.css";

function Nav() {
  return (
    <nav>
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
          <a href="#">About</a>
        </li>
      </ul>
      {/* <Footer /> */}
    </nav>
  );
}

export default Nav;
