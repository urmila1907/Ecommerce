import React from "react";
import "./breadCrumb.scss";
import { Link } from "react-router-dom";

export const BreadCrumb = (props) => {
  const title = props.title;
  return (
    <>
      <div className="breadcrumb py-2">
        <div className="container-xxl">
          <div className="row text-center">
            <p>
              <Link to="/" className="text-back-link">
                Home &nbsp;
              </Link>
              <b className="slash"> / &nbsp;</b>
              <span className="text-present">{title}</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
