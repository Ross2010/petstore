import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Perry from "./Perry";
import Tubby from "./Tubby";
import Whiskey from "./Whiskey";
import Duke from "./Duke";


function Rout() {
  const dogs = [
    {
      name: "Whiskey",
      age: 5,
      src: "whiskey",
      facts: [
        "Whiskey loves eating popcorn.",
        "Whiskey is a terrible guard dog.",
        "Whiskey wants to cuddle with you!"
      ]
    },
    {
      name: "Duke",
      age: 3,
      src: "duke",
      facts: [
        "Duke believes that ball is life.",
        "Duke likes snow.",
        "Duke enjoys pawing other dogs."
      ]
    },
    {
      name: "Perry",
      age: 4,
      src: "perry",
      facts: [
        "Perry loves all humans.",
        "Perry demolishes all snacks.",
        "Perry hates the rain."
      ]
    },
    {
      name: "Tubby",
      age: 4,
      src: "tubby",
      facts: [
        "Tubby is really stupid.",
        "Tubby does not like walks.",
        "Angelina used to hate Tubby but claims not to anymore."
      ]
    }
  ];
  return (
    <>
    <Routes>
      <Route path="/" element={< Home />} />
      <Route path="/Perry" element={< Perry names={dogs[2].name} age={dogs[2].age} facts={dogs[2].facts} />} />
      <Route path="/Tubby" element={< Tubby names={dogs[3].name} age={dogs[3].age} facts={dogs[3].facts} />}  />
      <Route path="/Whiskey" element={< Whiskey names={dogs[0].name} age={dogs[0].age} facts={dogs[0].facts} />} />
      <Route path="/Duke" element={< Duke names={dogs[1].name} age={dogs[1].age} facts={dogs[1].facts} />} />
    </Routes>
    </>
  );
}
export default Rout;
