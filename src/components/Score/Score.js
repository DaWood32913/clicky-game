import React from "react";
import "./Score.css";
import {GiPlainArrow} from "react-icons/gi";

//stateless component
const Score = props => (
  <div className="gameScore">
    <h3 className="score">Your Score <GiPlainArrow /> {props.total}</h3>
    <h3 className="status">{props.status}</h3>
  </div>
);

export default Score;