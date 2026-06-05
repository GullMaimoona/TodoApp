import React from "react";

function Input(props) {
  return (
    <input
      type="text"
      placeholder="Enter task ..."
      className="flex-1 border p-2 rounded-lg outline-none"
      onChange={props.onInputChange}
    />
  );
}

export default Input;
