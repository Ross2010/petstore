import React from "react";
import { BrowserRouter, } from 'react-router-dom';
import Nav from "./Nav";
import Rout from "./Rout";
import "./App.css";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Rout />
      </BrowserRouter>
    </div>
  );
}
export default App;
