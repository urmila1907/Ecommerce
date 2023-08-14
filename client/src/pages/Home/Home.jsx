import React from "react";
import { Link } from "react-router-dom";
import {
  LocalShippingOutlined,
  CardGiftcard,
  HeadsetMic,
  LocalOffer,
  Payment,
} from "@mui/icons-material";
import Marquee from "react-fast-marquee";
import "./home.scss";
import { BlogCard } from "../../components/Blog/BlogCard";

export default function Home() {
  return (
    <>
      <section className="home-wrapper-1 py-5">
        <div className="container-xxl">
          <div className="d-flex gap-2">
            <div className="main-banner">
              <img
                src="images/main-banner.jpg"
                alt="main banner"
                className="main-image rounded-3"
              />
              <div className="main-banner-content d-flex flex-wrap flex-column align-items-start gap-2">
                <h3 className="mb-1 main-banner-content-child">
                  SUPERCHARGED FOR PROS
                </h3>
                <h4 className="mb-1 main-banner-content-child">
                  Bose headphones
                </h4>
                <h6 className="mb-1 main-banner-content-child">
                  From $499 or $41.59/mo
                </h6>
                <h6 className="mb-1 main-banner-content-child">
                  For 12 months
                </h6>
                <Link>
                  <h4 className="button main-banner-content-child">Buy Now</h4>
                </Link>
              </div>
            </div>
            <div className="side-images">
              <div className="d-flex gap-2 mb-2">
                <div className="small-banner">
                  <img
                    src="images/catbanner-01.jpg"
                    alt="small banner"
                    className="small-image rounded-3"
                  />
                  <div className="small-banner-content d-flex flex-wrap flex-column align-items-start gap-2">
                    <h4 className="mb-1 small-banner-content-child-1">
                      Trending Laptops
                    </h4>
                    <h6 className="mb-1 small-banner-content-child">
                      From $499 or $41.59/mo
                    </h6>
                    <h6 className="mb-1 small-banner-content-child">
                      For 12 months
                    </h6>
                  </div>
                </div>
                <div className="small-banner">
                  <img
                    src="images/catbanner-02.jpg"
                    alt="small banner"
                    className="small-image rounded-3"
                  />
                  <div className="small-banner-content d-flex flex-wrap flex-column align-items-start gap-2">
                    <h4 className="mb-1 small-banner-content-child-1">
                      New Arrival
                    </h4>
                    <h6 className="mb-1 small-banner-content-child">
                      Buy IPad Air
                    </h6>
                    <h6 className="mb-1 small-banner-content-child">
                      From $599 or $49.91/mo for 12 mo.
                    </h6>
                  </div>
                </div>
              </div>
              <div className="d-flex gap-2">
                <div className="small-banner">
                  <img
                    src="images/catbanner-03.jpg"
                    alt="small banner"
                    className="small-image rounded-3"
                  />
                  <div className="small-banner-content d-flex flex-wrap flex-column align-items-start gap-2">
                    <h4 className="mb-1 small-banner-content-child-1">
                      15% Off
                    </h4>
                    <h6 className="mb-1 small-banner-content-child">
                      Smartwatch 8
                    </h6>
                    <h6 className="mb-1 small-banner-content-child">
                      Shop the latest style and colors
                    </h6>
                  </div>
                </div>
                <div className="small-banner">
                  <img
                    src="images/catbanner-04.jpg"
                    alt="small banner"
                    className="small-image rounded-3"
                  />
                  <div className="small-banner-content d-flex flex-wrap flex-column align-items-start gap-2">
                    <h4 className="mb-1 small-banner-content-child-1">
                      Free engraving
                    </h4>
                    <h6 className="mb-1 small-banner-content-child">
                      AirPods Max
                    </h6>
                    <h6 className="mb-1 small-banner-content-child">
                      High fidelity playback and ultra-low distortion
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="services d-flex flex-wrap gap-2 align-items-center justify-content-evenly">
              <div className="d-flex gap-2">
                <LocalShippingOutlined />
                <div>
                  <h6>Free Shipping</h6>
                  <p>For all orders above $50</p>
                </div>
              </div>
              <div className="d-flex gap-2">
                <CardGiftcard />
                <div>
                  <h6>Daily Surprise Offers</h6>
                  <p>Save up to 30% off</p>
                </div>
              </div>
              <div className="d-flex gap-2">
                <HeadsetMic />
                <div>
                  <h6>Support 24/7</h6>
                  <p>Shop with an expert</p>
                </div>
              </div>
              <div className="d-flex gap-2">
                <LocalOffer />
                <div>
                  <h6>Affordable Prices</h6>
                  <p>Get Factory Direct Price</p>
                </div>
              </div>
              <div className="d-flex gap-2">
                <Payment />
                <div>
                  <h6>Secure Payments</h6>
                  <p>100% Protected Payment</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="categories d-flex flex-wrap flex-column">
              <div className="category-1 d-flex flex-wrap justify-content-evenly align-items-center gap-2">
                <div>
                  <img
                    src="images/mobile.jpg"
                    alt="category-1-img"
                    className="mb-1"
                  />
                  <h6>Mobiles</h6>
                  <p>250 items</p>
                </div>
                <div>
                  <img
                    src="images/headphone.jpg"
                    alt="category-1-img"
                    className="mb-1"
                  />
                  <h6>Headphones</h6>
                  <p>150 items</p>
                </div>
                <div>
                  <img
                    src="images/tab.jpg"
                    alt="category-1-img"
                    className="mb-1"
                  />
                  <h6>Tablets</h6>
                  <p>70 items</p>
                </div>
                <div>
                  <img
                    src="images/laptop.jpg"
                    alt="category-1-img"
                    className="mb-1"
                  />
                  <h6>Computers & laptops</h6>
                  <p>120 items</p>
                </div>
                <div>
                  <img
                    src="images/camera.jpg"
                    alt="category-1-img"
                    className="mb-1"
                  />
                  <h6>Cameras</h6>
                  <p>130 items</p>
                </div>
              </div>
              <div className="category-2 d-flex flex-wrap justify-content-evenly align-items-center gap-2">
                <div>
                  <img
                    src="images/tv.jpg"
                    alt="category-1-img"
                    className="mb-1"
                  />
                  <h6>Smart TV</h6>
                  <p>160 items</p>
                </div>
                <div>
                  <img
                    src="images/acc.jpg"
                    alt="category-1-img"
                    className="mb-1"
                  />
                  <h6>Accessories</h6>
                  <p>80 items</p>
                </div>
                <div>
                  <img
                    src="images/smartwatch.jpg"
                    alt="category-1-img"
                    className="mb-1"
                  />
                  <h6>Smartwatches</h6>
                  <p>250 items</p>
                </div>
                <div>
                  <img
                    src="images/speaker.jpg"
                    alt="category-1-img"
                    className="mb-1"
                  />
                  <h6>Portable speakers</h6>
                  <p>190 items</p>
                </div>
                <div>
                  <img
                    src="images/homeapp.jpg"
                    alt="category-1-img"
                    className="mb-1"
                  />
                  <h6>Home appliances</h6>
                  <p>240 items</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="marquee-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="marquee-inner-wrapper card-wrapper">
                <Marquee className="d-flex">
                  <div className="mx-4">
                    <img src="images/brand-01.png" alt="brand" />
                  </div>
                  <div className="mx-4">
                    <img src="images/brand-02.png" alt="brand" />
                  </div>
                  <div className="mx-4">
                    <img src="images/brand-03.png" alt="brand" />
                  </div>
                  <div className="mx-4">
                    <img src="images/brand-04.png" alt="brand" />
                  </div>
                  <div className="mx-4">
                    <img src="images/brand-05.png" alt="brand" />
                  </div>
                  <div className="mx-4">
                    <img src="images/brand-06.png" alt="brand" />
                  </div>
                  <div className="mx-4">
                    <img src="images/brand-07.png" alt="brand" />
                  </div>
                  <div className="mx-4">
                    <img src="images/brand-08.png" alt="brand" />
                  </div>
                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="blog-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row d-flex flex-wrap gap-3 mx-1 justify-content-evenly">
            <h3>Featured Collection</h3>
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
          </div>
        </div>
      </section>
      <section className="blog-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row d-flex flex-wrap gap-3 mx-1 justify-content-evenly">
            <h3>Our Latest News</h3>
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
          </div>
        </div>
      </section>
    </>
  );
}
