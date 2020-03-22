import React, { useState, useEffect } from "react";

import "../styles/burgermenuicon.css";

function BurgermenuIcon(props) {
  const [crossed, setCrossed] = useState(false);

  function toggleCross() {
    if (crossed === false) {
      setCrossed(true);
      props.toggleNav();
      const lineclass = document.querySelectorAll(".burgermenu--line");
      for (let i = 0; i < lineclass.length; i++) {
        lineclass[i].classList.add("crossed");
        lineclass[i].classList.remove("flat");
      }
    } else {
      setCrossed(false);
      props.toggleNav();
      const lineclass = document.querySelectorAll(".burgermenu--line");
      for (let i = 0; i < lineclass.length; i++) {
        lineclass[i].classList.add("flat");
        lineclass[i].classList.remove("crossed");
      }
    }
  }
  return (
    <div
      className="burgermenu burgermenu--button burgermenu--button__togglenav"
      onClick={toggleCross}
    >
      <span className="burgermenu--line burgermenu--top"></span>
      <span className="burgermenu--line burgermenu--mid"></span>
      <span className="burgermenu--line burgermenu--bot"></span>
    </div>
  );
}

export default BurgermenuIcon;
