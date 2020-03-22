import React, { useState, useEffect } from "react";
import "../styles/Home.css";

function Home() {
  return (
    <main className="home photowall">
      <img className="photowall__img" src="/img/img1.png" />
      <img className="photowall__img" src="/img/img2.png" />
      {/* <h3 className="photowall__text">good drinks | good people | good bar</h3> */}
      <img className="photowall__img" src="/img/img1.png" />
      <img className="photowall__img" src="/img/img2.png" />
    </main>
  );
}

export default Home;
