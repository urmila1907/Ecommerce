import React from 'react'
import "./famousCard2.scss";

export const FamousCard2 = () => {
  return (
    <>
      <div className="card famous-card-2">
        <div className="card-body">
          <h5 className="famous-card-title">STUDIO DISPLAY</h5>
          <h3 className="card-title-main">600 nits of brightness</h3>
          <p className="card-text">27-inch 5K <br/>Retina display</p>
        </div>
        <img
          src="images/laptop-2.png"
          className="card-img-top"
          alt="product"
        />
      </div>
    </>
  );
}
