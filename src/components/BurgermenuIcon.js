import React, { useState, useEffect } from "react";

import "../styles/burgermenuicon.css";

function BurgermenuIcon(props) {
  return (
    <div
      className="burgermenu burgermenu--button burgermenu--button__togglenav"
      onClick={props.toggleNav}
    >
      <span class="burgermenu--line burgermenu--line__top"></span>
      <span class="burgermenu--line burgermenu--line__mid"></span>
      <span class="burgermenu--line burgermenu--line__bot"></span>
    </div>
  );
}

export default BurgermenuIcon;
