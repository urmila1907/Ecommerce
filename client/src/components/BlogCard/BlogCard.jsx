import React from "react";
import "./blogCard.scss";
import { Link } from "react-router-dom";

export const BlogCard = () => {
  return (
    <>
      <div className="card">
        <img src="images/blog-1.jpg" className="card-img-top img-fluid" alt="blog-img" />
        <div className="card-body">
          <h6>11 May, 2023</h6>
          <h5 className="card-title">A Beautiful Sunday Morning Renaissance</h5>
          <p className="card-text">
           Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <Link to="/" className="btn btn-dark">
            Read more
          </Link>
        </div>
      </div>
    </>
  );
};
