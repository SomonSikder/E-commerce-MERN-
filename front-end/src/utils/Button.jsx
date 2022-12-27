import React from "react";

const Button = ({ text, handleFilter, callValue }) => {
  return (
    <button
      className="btn btn-primary mx-2"
      onClick={(e) => handleFilter(callValue)}
    >
      {text}
    </button>
  );
};

export default Button;
