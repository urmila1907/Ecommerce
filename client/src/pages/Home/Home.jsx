import React from "react";
import { Link } from "react-router-dom";
import "./home.scss";

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
    </>
  );
}
