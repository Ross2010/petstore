import React from "react";
import { Link } from "react-router-dom";
import duke_img from "./images/duke.jpg";

const Duke = ({names, age, facts }) => {
    return (
  <>
  <div className="image-container">
  <img src={ duke_img } alt="Duke" />
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

export default Duke;
