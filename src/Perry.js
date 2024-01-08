import React from "react";
import { Link } from "react-router-dom";

const Perry = ({ dogs }) => (
  <>
    {dogs.map((dog, index) => (
      <div key={index}>
        <h1>{dog.name}</h1>
        <img src={dog.src} alt={dog.name} />
        <p>Age: {dog.age}</p>
        <ul>
          {dog.facts.map((fact, index) => (
            <li key={index}>{fact}</li>
          ))}
        </ul>
        <Link to="/Home">Go Back</Link>
      </div>
    ))}
  </>
);

export default Perry;
