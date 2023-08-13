import React from "react";
import { Telegram, Instagram,YouTube,Twitter,LinkedIn,Pinterest} from "@mui/icons-material";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="d-flex flex-wrap gap-3 justify-content-center align-items-center">
            <div className="m-1">
              <div className="footer-top-data d-flex gap-3 align-items-center">
                <Telegram className="text-white" />
                <h3 className="mb-0 text-white">Sign up for news letter</h3>
              </div>
            </div>
            <div className="m-1">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control py-1"
                  placeholder="Your email address"
                  aria-label="Your email address"
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-2" id="basic-addon2">
                  Subscribe
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="d-flex flex-wrap justify-content-evenly align-items-center">
            <div>
              <h4 className="text-white m-2">Contact us</h4>
              <div className="d-flex flex-wrap justify-content-evenly align-items-center flex-column">
                <div>
                  <address className="text-white mb-1 text-center">
                    12, Elizabeth street, <br /> New York, USA
                  </address>
                </div>
                <div>
                  <a href="tel:+01 23456" className="text-white mb-1">
                    +01 23456
                  </a>
                </div>
                <div>
                  <a href="mailto:eco@email.com" className="text-white mb-1">
                    eco@email.com
                  </a>
                </div>
                <div className="social-icons">
                  <a
                    href="https://www.youtube.com/"
                    alt="social icons"
                    className="text-white mx-1"
                  >
                    <YouTube />
                  </a>
                  <a
                    href="https://instagram.com/"
                    alt="social icons"
                    className="text-white mx-1"
                  >
                    <Instagram />
                  </a>
                  <a
                    href="https://twitter.com/"
                    alt="social icons"
                    className="text-white mx-1"
                  >
                    <Twitter />
                  </a>
                  <a
                    href="https://www.linkedin.com/"
                    alt="social icons"
                    className="text-white mx-1"
                  >
                    <LinkedIn />
                  </a>
                  <a
                    href="https://in.pinterest.com/"
                    alt="social icons"
                    className="text-white mx-1"
                  >
                    <Pinterest />
                  </a>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-white m-2">Information</h4>
              <div className="footer-links d-flex flex-wrap justify-content-evenly align-items-center flex-column">
                <Link className="text-white mb-1">Privacy Policy</Link>
                <Link className="text-white mb-1">Refund Policy</Link>
                <Link className="text-white mb-1">Shipping Policy</Link>
                <Link className="text-white mb-1">Terms & Conditions</Link>
                <Link className="text-white mb-1">Blogs</Link>
              </div>
            </div>
            <div>
              <h4 className="text-white m-2">Account</h4>
              <div className="footer-links d-flex flex-wrap justify-content-evenly align-items-center flex-column">
                <Link className="text-white mb-1">Search</Link>
                <Link className="text-white mb-1">About Us</Link>
                <Link className="text-white mb-1">FAQ</Link>
                <Link className="text-white mb-1">Contact</Link>
                <Link className="text-white mb-1">Size Chart</Link>
              </div>
            </div>
            <div>
              <h4 className="text-white m-2">Quick links</h4>
              <div className="footer-links d-flex flex-wrap justify-content-evenly align-items-center flex-column">
                <Link className="text-white mb-1">Laptops</Link>
                <Link className="text-white mb-1">Headphones</Link>
                <Link className="text-white mb-1">Watch</Link>
                <Link className="text-white mb-1">Tablets</Link>
                <Link className="text-white mb-1">Accessories</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-center mb-0 text-white">
                &copy; {new Date().getFullYear()}; Powered by Developers
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
