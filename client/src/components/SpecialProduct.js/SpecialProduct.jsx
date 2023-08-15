import React from "react";
import "./specialProduct.scss";
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import {
  FavoriteBorderOutlined,
  Shuffle,
  ShoppingBagOutlined,
  Visibility,
} from "@mui/icons-material";

export const SpecialProduct = () => {
  return (
    <>
      <div className="card">
        <div className="d-flex flex-wrap justify-content-between align-items-center">
          <div className="card-left">
            <div className="discount">-20%</div>
            <img
              src="images/speaker.jpg"
              className="card-img-top"
              alt="product"
            />
            <FavoriteBorderOutlined className="icons wishlist-icon" />
            <div className="action-bar">
              <div className="d-flex flex-column">
                <Shuffle className="icons" />
                <Visibility className="icons" />
                <ShoppingBagOutlined className="icons" />
              </div>
            </div>
          </div>
          <div className="card-right">
            <div className="card-body">
              <h5 className="brand">Havells</h5>
              <p className="product-title">SONY Portable Speaker</p>
              <ReactStars
                count={5}
                size={24}
                value={4}
                edit={false}
                activeColor="var(--star-color)"
              />
              <p className="price mt-1">
                <span className="price-p">$60.00 </span> &nbsp; <s>$75.00</s>
              </p>
              <div className="discount-till mb-1 d-flex flex-wrap align-items-center justify-content-between">
              <p className="mb-1">
                <b>5</b> days
              </p>
              <div className="d-flex gap-0.3 align-items-center mb-1">
                <span className="badge rounded-circle p-2 bg-danger">1</span>
                <b className="days-dot">:</b>
                <span className="badge rounded-circle p-2 bg-danger">1</span>
                <b className="days-dot">:</b>
                <span className="badge rounded-circle p-2 bg-danger">1</span>
              </div>
              </div>
              <p className="quantity">Products: 5</p>
              <div
                className="progress"
                role="progressbar"
                aria-label="Progress"
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <div className="progress-bar" style={{ width: "25%" }}></div>
              </div>

              <Link to="/" className="btn btn-dark">
                Add to Cart
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
