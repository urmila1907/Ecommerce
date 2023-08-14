import React from "react";
import "./famousCard1.scss";

export const FamousCard1 = () => {
  return (
    <>
      <div className="card famous-card-1">
        <div className="card-body">
          <h5 className="card-title">BIG SCREEN</h5>
          <h3 className="card-title-main">Smart Watch Series 7</h3>
          <p className="card-text">From $399 or $16.62/mo. for 24 months</p>
        </div>
        <img
          src="images/card-watch-2.png"
          className="card-img-top"
          alt="product"
        />
      </div>
    </>
  );
};
