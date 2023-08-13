import React from "react";
import "./header.scss"
import { NavLink, Link } from "react-router-dom";
import {
  SearchSharp,
  LoopSharp,
  ShoppingCartOutlined,
  FavoriteBorderOutlined,
  Person2Outlined,
  Dialpad,
} from "@mui/icons-material";

export default function Header() {
  return (
    <>
      <header className="header-top-strip py-2 px-2">
        <div className="container-xxl">
          <div className="d-flex flex-wrap justify-content-between align-items-center">
            <div className="mt-1 mb-0">
              <p>Free shipping over $100 and free returns</p>
            </div>
            <div className="mt-1 mb-0">
              <p>
                Hotline:<a href="tel:+91 0123456789">+91 0123456789</a>
              </p>
            </div>
          </div>
        </div>
      </header>
      <header className="header-upper py-3">
        <div className="container-xxl">
          <div className="d-flex flex-wrap justify-content-between align-items-center">
            <div className="d-flex flex-wrap justify-content-center align-items-center">
              <div className="ml-1">
                <h2>
                  <Link>Ecommerce</Link>
                </h2>
              </div>
              <div className="mx-2">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control py-2"
                    placeholder="Search product here"
                    aria-label="Search product here"
                    aria-describedby="basic-addon2"
                  />
                  <span className="input-group-text py-2" id="basic-addon2">
                    <SearchSharp className="icon" />
                  </span>
                </div>
              </div>
            </div>
            <div>
              <div className="header-upper-links d-flex flex-wrap justify-content-between align-items-center mt-3 mx-3 gap-3">
                <div>
                  <Link>
                    <LoopSharp className="icon" />
                    Compare Products
                  </Link>
                </div>
                <div>
                  <Link>
                    <FavoriteBorderOutlined className="icon" />
                    Wishlist
                  </Link>
                </div>
                <div>
                  <Link>
                    <Person2Outlined className="icon" />
                    Log in
                  </Link>
                </div>
                <div>
                  <Link className="d-flex">
                    <div className="d-flex ">
                      <ShoppingCartOutlined className="icon" />
                      <span className="cart-item-border">
                        <span className="cart-item">0</span>
                      </span>
                    </div>
                    Cart
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <header className="header-bottom py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="menu-bottom d-flex flex-wrap align-items-center justify-content-between gap-3">
                <div className="d-flex justify-content-center">
                  <div className="dropdown">
                    <button
                      className="btn btn-secondary dropdown-toggle bg-transparent border-0"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <Dialpad className="icon" /> <span>Shop Categories</span>
                    </button>
                    <ul className="dropdown-menu">
                      <li>
                        <Link className="dropdown-item text-white" to="">
                          Fashion
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item text-white" to="">
                          Electronics
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item text-white" to="">
                          Footwear
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="menu-links">
                  <div className="d-flex flex-wrap align-items-center gap-5">
                    <NavLink className="navlinks" to="/">
                      Home
                    </NavLink>
                    <NavLink className="navlinks" to="/store">
                      Store
                    </NavLink>
                    <NavLink className="navlinks" to="/blogs">
                      Blogs
                    </NavLink>
                    <NavLink className="navlinks" to="/contact">
                      Contact
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
