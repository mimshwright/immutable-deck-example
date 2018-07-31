import React, { Component } from "react";
import Flippy, { FrontSide, BackSide } from "react-flippy";
import backgroundImage from "./leather-nunchuck.png";
import suitToSymbol from "./suitToSymbol";
import valueToSymbol from "./valueToSymbol";

const cardStyle = {
  background: "white",
  borderRadius: "20px",
  height: "200px",
  width: "120px",
  border: "10px solid white"
};

const frontStyle = {
  ...cardStyle,
  boxShadow: "none"
};
const backStyle = {
  ...cardStyle,
  boxShadow: "none",
  background: `red url(${backgroundImage}) repeat`,
  borderRadius: "10px"
};

const Card = ({ value, suit, isFlipped = false }) => (
  <Flippy
    className={`Card`}
    flipOnClick={true}
    style={{ display: "inline-block" }}
  >
    <FrontSide style={frontStyle}>{`${valueToSymbol(value)} ${suitToSymbol(
      suit
    )}`}</FrontSide>
    <BackSide style={backStyle} />
  </Flippy>
);

export default Card;
