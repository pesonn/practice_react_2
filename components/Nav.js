import React from "react";

function Nav() {
  return (
    <nav>
      <ul className="mainnav">
        <li className="mainnav_item">Drinks</li>
        <li className="mainnav_item">Location</li>
        <li className="mainnav_item">About</li>
      </ul>
    </nav>
    <nav>
      <ul className="bottomnav">
        <li className="bottomnav_item">Impressum</li>
        <li className="bottomnav_item">Datenschutz</li>
      </ul>
    </nav>
  );
}

export default Nav;
