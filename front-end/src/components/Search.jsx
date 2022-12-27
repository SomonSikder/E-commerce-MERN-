import React, { useState } from "react";

const Search = ({ handleSearch }) => {
  const [searchValue, setSerchValue] = useState("");

  const handleClick = () => {
    handleSearch(searchValue.toLocaleLowerCase());
    setSerchValue("");
  };

  return (
    <div className="input-group mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Search By Rocket Name"
        aria-label="Recipient's username"
        aria-describedby="button-addon2"
        onBlur={(e) => setSerchValue(e.target.value)}
      />
      <button
        className="btn btn-outline-secondary"
        type="button"
        id="button-addon2"
        onClick={handleClick}
      >
        Search
      </button>
    </div>
  );
};

export default Search;
