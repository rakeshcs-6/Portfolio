import React from "react";
import "./Image.css";

function Image({ pic }) {
  return (
    <div className="image-container">
      <div className="background-image"></div>
      <img src={pic} alt="not found" />
    </div>
  );
}

export default Image;
