import React from "react";
import { Link } from "react-router-dom";
import perry_img from "./images/perry.jpg";

const Perry = ({names, age, facts }) => {
    return (
  <>
  <div className="image-container">
  <img src={perry_img} alt="Perry" />
  <div className="Info">
          <p>The name is: {names}</p>
          <p>age is: {age} years old</p>
          <p>{facts}</p>
          <Link to="/">Go Back</Link>
        </div>
  </div> 
  </>
    )
};

export default Perry;
