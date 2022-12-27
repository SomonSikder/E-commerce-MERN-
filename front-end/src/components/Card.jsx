import React from "react";

const Card = ({ item }) => {
  const { mission_name, links, details, launch_year, launch_success, rocket } =
    item;

  return (
    <div className="col my-2 ">
      <div
        className="card shadow p-1"
        style={{ width: "23rem", height: "15rem" }}
      >
        <div className="row">
          <div className="col-md-4">
            <img
              src={links.mission_patch_small}
              className="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">
                <small className="fw-bold fs-6">
                  Mission Name: {mission_name}
                </small>
                <br />
                <small className="fw-bold fs-6">
                  Rocket: {rocket.rocket_name}
                </small>
              </h5>
              <p className="card-text">
                {details ? details.slice(0, 50) + "..." : ""}
              </p>
              {launch_success ? (
                <small className="bg-success px-2 mb-2 rounded text-white ">
                  Status Success
                </small>
              ) : (
                <small className="bg-danger px-2 mb-2 rounded text-white ">
                  Status Fail
                </small>
              )}
              <p className="card-text">
                <small className="text-muted">Launch Year {launch_year}</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
