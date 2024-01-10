import React from "react";
import { Link } from "react-router-dom";
import tubby_img from "./images/tubby.jpg";


const Tubby = ({ names, age, facts }) => {
  return (
    <>
      <div className="image-container">
        <img src={tubby_img} alt="Tubby" />
        <div className="Info">
          <p>The name is: {names}</p>
          <p>age is: {age} old</p>
          <p>{facts}</p>
          <Link to="/">Go Back</Link>
        </div>
      </div>
    </>
  );
};

export default Tubby;
