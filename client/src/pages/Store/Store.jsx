import React from "react";
import "./store.scss";
import { BreadCrumb } from "../../components/BreadCrumb/BreadCrumb";
import { Meta } from "../../components/Meta";
import { Menu } from "@mui/icons-material";
import ReactStars from "react-rating-stars-component";
import { ProductCard } from "../../components/ProductCard/ProductCard";

export const Store = () => {
  return (
    <>
      <Meta title="Store" />
      <BreadCrumb title="Store" />
      <div className="store-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="filter col-3">
              <div className="filter-card mb-3">
                <h4 className="filter-title">Shop By Categories</h4>
                <ul className="category-list">
                  <li className="icons">Electronics</li>
                  <li className="icons">Clothing</li>
                  <li className="icons">Home appliances</li>
                  <li className="icons">Footwear</li>
                </ul>
              </div>
              <div className="filter-card mb-3">
                <h4 className="filter-title">Filter By</h4>
                <h6 className="filter-title">Availability</h6>
                <input
                  type="checkbox"
                  id="inStock"
                  name="inStock"
                  value="inStock"
                  className="form-check-input mx-2"
                />
                <label htmlFor="inStock" className="form-check-label">
                  In Stock(34)
                </label>
                <br />
                <input
                  type="checkbox"
                  id="outStock"
                  name="outStock"
                  value="outStock"
                  className="form-check-input mx-2"
                />
                <label htmlFor="outStock" className="form-check-label">
                  Out Of Stock(5)
                </label>
                <br />
                <h6 className="filter-title">Price</h6>
                <div className="d-flex flex-wrap gap-1 justify-content-between align-items-center">
                  <div className="d-flex gap-1 align-items-center">
                    <span className="price-sign">$ </span>
                    <div className="form-floating">
                      <input
                        type="number"
                        className="form-control"
                        id="floatingInput"
                        placeholder="From"
                      />
                      <label htmlFor="floatingInput">From</label>
                    </div>
                  </div>
                  <div className="d-flex gap-1 align-items-center">
                    <span className="price-sign">$ </span>
                    <div className="form-floating">
                      <input
                        type="number"
                        className="form-control"
                        id="floatingInput"
                        placeholder="To"
                      />
                      <label htmlFor="floatingInput">To</label>
                    </div>
                  </div>
                </div>
                <h4 className="filter-title">Color</h4>
                <div>
                  <ul className="colors ps-0 gap-1 d-flex flex-wrap">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                  </ul>
                </div>
                <h4 className="filter-title">Size</h4>
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="color-1"
                    value=""
                  />
                  <label htmlFor="color-1" className="form-check-label">
                    S (2)
                  </label>
                </div>
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="color-2"
                    value=""
                  />
                  <label htmlFor="color-2" className="form-check-label">
                    M (5)
                  </label>
                </div>
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="color-3"
                    value=""
                  />
                  <label htmlFor="color-3" className="form-check-label">
                    L (4)
                  </label>
                </div>
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="color-4"
                    value=""
                  />
                  <label htmlFor="color-4" className="form-check-label">
                    XL (6)
                  </label>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h4 className="filter-title">Product Tags</h4>
                <div className="product-tags d-flex flex-wrap justify-content-evenly align-items-center gap-2">
                  <span className="bg-secondary badge rounded-3 product-tag">
                    Headphones
                  </span>
                  <span className="bg-secondary badge rounded-3 product-tag">
                    Boat
                  </span>
                  <span className="bg-secondary badge rounded-3 product-tag">
                    Laptop
                  </span>
                  <span className="bg-secondary badge rounded-3 product-tag">
                    Mobile
                  </span>
                  <span className="bg-secondary badge rounded-3 product-tag">
                    Tablet
                  </span>
                  <span className="bg-secondary badge rounded-3 product-tag">
                    Vivo
                  </span>
                  <span className="bg-secondary badge rounded-3 product-tag">
                    Oppo
                  </span>
                  <span className="bg-secondary badge rounded-3 product-tag">
                    Speaker
                  </span>
                  <span className="bg-secondary badge rounded-3 product-tag">
                    One Plus
                  </span>
                  <span className="bg-secondary badge rounded-3 product-tag">
                    Computer
                  </span>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h4 className="filter-title">Random Products</h4>
                <div className="d-flex flex-column gap-4">
                  <div className="random-product-1 d-flex flex-wrap flex-column gap-2 justify-content-between">
                    <div className="random-image-container">
                      <img
                        src="images/watch-1.jpg"
                        alt="watch"
                        className="random-image"
                      />
                    </div>
                    <div className="random-content ">
                      <h5>Boat Watch For Women</h5>
                      <ReactStars
                        count={5}
                        size={24}
                        value={3}
                        edit={false}
                        activeColor="var(--star-color)"
                        classNames="mb-2"
                      />
                      <b>$100.00</b>
                    </div>
                  </div>
                  <div className="random-product-2 d-flex flex-wrap flex-column gap-2 justify-content-between">
                    <div className="random-image-container">
                      <img
                        src="images/watch-1.jpg"
                        alt="watch"
                        className="random-image"
                      />
                    </div>
                    <div className="random-content ">
                      <h5>Boat Watch For Women</h5>
                      <ReactStars
                        count={5}
                        size={24}
                        value={3}
                        edit={false}
                        activeColor="var(--star-color)"
                        classNames="mb-2"
                      />
                      <b>$100.00</b>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="filtered-products col-8">
              <div className="d-flex justify-content-between flex-wrap gap-2 align-items-center mb-3">
                <div className="filter-sort-grid">
                  <div className="d-flex align-items-center gap-2">
                    <p className="mb-0">Sort By:</p>
                    <select name="" id="" className="form-control form-select">
                      <option value="manual">Featured</option>
                      <option value="best selling" selected>
                        Best Selling
                      </option>
                      <option value="title-ascending">A-Z</option>
                      <option value="title-descending">Z-A</option>
                      <option value="price-ascending">
                        Price - Low to High
                      </option>
                      <option value="price-descending">
                        Price - High to Low
                      </option>
                      <option value="created-descending">
                        Latest to Oldest
                      </option>
                      <option value="created-ascending">
                        Oldest to Latest
                      </option>
                    </select>
                  </div>
                </div>
                <div className="filter-grid-order d-flex flex-wrap align-items-center gap-2">
                  <span>21 products</span>
                  <Menu className="icons" />
                  <Menu className="icons" />
                  <Menu className="icons" />
                </div>
              </div>
              <div className="d-flex flex-wrap gap-2 align-items-center justify-content-between">
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
