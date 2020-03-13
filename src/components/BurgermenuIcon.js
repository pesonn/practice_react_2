import React, { useState, useEffect } from "react";

import "../styles/burgermenuicon.css";

function BurgermenuIcon(props) {
  const [crossed, setCrossed] = useState(false);

  function toggleCross() {
    if (crossed === false) {
      setCrossed(true);
      const lineclass = document.querySelectorAll(".burgermenu--line");
      for (let i = 0; i < lineclass.length; i++) {
        lineclass[i].classList.add("crossed");
      }
    } else {
      setCrossed(false);
      const lineclass = document.querySelectorAll(".burgermenu--line");
      for (let i = 0; i < lineclass.length; i++) {
        lineclass[i].classList.remove("crossed");
      }
    }
  }

  return (
    <div
      className="burgermenu burgermenu--button burgermenu--button__togglenav"
      onClick={(props.toggleNav, toggleCross)}
    >
      <span className="burgermenu--line burgermenu--top"></span>
      <span className="burgermenu--line burgermenu--mid"></span>
      <span className="burgermenu--line burgermenu--bot"></span>
    </div>
  );
}

export default BurgermenuIcon;
