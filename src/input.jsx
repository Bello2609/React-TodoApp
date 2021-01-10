import React from 'react';
import "./index.css";


function Input(props) {
  const completedStyle = {
    fontSize: "20px",
    textDecoration: "line-through",
    color: "#aaa",
    transition: "all ease 0.5s",
  }
  const style = {
    fontSize: "20px",
    color: "#fff",
    cursor: "pointer",
    transition: "all ease 0.5s",
  }
  return (
      <label className="label" style = {style}>
        <input
          checked={props.item.check}
          onChange={() => props.change(props.item.id)}
          type="checkbox"
        />
        <span style={props.item.check ? completedStyle : null}>{props.item.name}</span>
      </label>
  );
}

export default Input