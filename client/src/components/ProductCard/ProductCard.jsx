import React from "react";
import "./productCard.scss";
import ReactStars from "react-rating-stars-component";
import {
  FavoriteBorderOutlined,
  Shuffle,
  ShoppingBagOutlined,
  Visibility,
} from "@mui/icons-material";
import {Link} from "react-router-dom";

export const ProductCard = () => {
  return (
    <>
        <Link>
          <div className="card">
            <div className="product-image">
              <img
                src="images/watch.jpg"
                className="card-img-top"
                alt="blog-img"
              />
              <img
                src="images/watch.avif"
                className="card-img-top"
                alt="blog-img"
              />
            </div>
            <FavoriteBorderOutlined className="icons wishlist-icon" />
            <div className="action-bar">
              <div className="d-flex flex-column">
                <Shuffle className="icons" />
                <Visibility className="icons" />
                <ShoppingBagOutlined className="icons" />
              </div>
            </div>
            <div className="content">
              <h6 className="brand">Havells</h6>
              <h5 className="product-title">Sony latest watch for men</h5>
              <ReactStars
                count={5}
                size={24}
                value={3}
                edit={false}
                activeColor="var(--star-color)"
              />
              <p className="price">$100.00</p>
            </div>
          </div>
        </Link>
    </>
  );
};
