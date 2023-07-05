import React from "react";
import "./card.css";
const Card = (props) => {
  return (
    <div class="book">
      <p>{props.propValue2}</p>
      <div class="cover">
        <p>{props.propValue}</p>
      </div>
    </div>
  );
};

export default Card;
