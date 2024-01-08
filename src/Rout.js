import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Perry from "./Perry";
import Tubby from "./Tubby";
import Whiskey from "./Whiskey";
import Duke from "./Duke";

function Rout() {
  return (
    <>
    <Routes>
      <Route path="/" element={ < Home />} />
      <Route path="/Perry" element={ < Perry />} />
      <Route path="/Tubby" element={ < Tubby />} />
      <Route path="/Whiskey" element={ < Whiskey />} />
      <Route path="/Duke" element={ < Duke />} />

    </Routes>
    </>
  );
}

export default Rout;
