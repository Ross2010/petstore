import React from "react";
import { Link } from "react-router-dom";
import whiskey_img from "./images/whiskey.jpg";


const Whiskey = ({names, age, facts }) => {
    return (
  <>
  <div className="image-container">
  <img src={whiskey_img} alt="Whiskey" />
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

export default Whiskey;
