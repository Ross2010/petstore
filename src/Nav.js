import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/Perry" >Perry</Link></li>
      <li><Link to="/Tubby">Tubby</Link></li>
      <li><Link to="/Whiskey">Whiskey</Link></li>
      <li><Link to="/Duke">Duke</Link></li>
    </ul>
  );
}

export default Nav;
