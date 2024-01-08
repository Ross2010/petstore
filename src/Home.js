import React from "react";
import { Link } from "react-router-dom";
import whiskey from "./images/whiskey.jpg";
import perry from "./images/perry.jpg"; 
import tubby from "./images/tubby.jpg"; 
import duke from "./images/duke.jpg";

function Home() {
  return (
    <div className="image-container">
    <Link to="/Perry">
      <img src={perry} alt="Perry" />
    </Link>
    <Link to="/Tubby">
      <img src={tubby} alt="Tubby" />
    </Link>
    <Link to="/Whiskey">
      <img src={whiskey} alt="Whiskey" />
    </Link>
    <Link to="/Duke">
      <img src={duke} alt="Duke" />
    </Link>
  </div>
  );
}

export default Home;