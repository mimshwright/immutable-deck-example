import React, { Component } from "react";
import "./Card.css";

export default ({ value, suit, visible = true }) => (
  <div className={`Card ${visible ? "up" : "down"}`}>
    {visible && `${value} of ${suit}`}
  </div>
);
