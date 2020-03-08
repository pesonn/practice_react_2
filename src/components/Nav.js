import React, { useState, useEffect } from "react";
import Footer from "./Footer";

function Nav() {
  return (
    <nav>
      <ul className="mainnav">
        <li className="mainnav_item">Drinks</li>
        <li className="mainnav_item">Location</li>
        <li className="mainnav_item">About</li>
      </ul>
      <Footer />
    </nav>
  );
}

export default Nav;
