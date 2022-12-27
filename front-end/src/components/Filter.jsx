import React from "react";
import Button from "../utils/Button";

const Filter = ({ handleFilter }) => {
  return (
    <div className="d-flex justify-content-center align-items-center">
      <div className="d-flex justify-content-center align-items-center">
        <p className="text-align-center text-white">Filter By</p>
      </div>
      <div>
        <Button
          text={"Last Week"}
          handleFilter={handleFilter}
          callValue={"lastWeek"}
        ></Button>
        <button
          className="btn btn-primary mx-2"
          onClick={(e) => handleFilter("lastMonth")}
        >
          Last Month
        </button>
        <button
          className="btn btn-primary mx-2"
          onClick={(e) => handleFilter("lastYear")}
        >
          Last Year
        </button>
      </div>
      {/* Success and Failur */}
      <div>
        <Button
          text={"Success"}
          handleFilter={handleFilter}
          callValue={"success"}
        ></Button>
        <Button
          text={"Failer"}
          handleFilter={handleFilter}
          callValue={"fail"}
        ></Button>
      </div>
      {/* Upcoming */}
      <Button
        text={"Upcoming"}
        handleFilter={handleFilter}
        callValue={"upcoming"}
      ></Button>
    </div>
  );
};

export default Filter;
