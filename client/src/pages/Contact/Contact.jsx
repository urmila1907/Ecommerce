import React from "react";
import "./contact.scss";
import { BreadCrumb } from "../../components/BreadCrumb/BreadCrumb";
import { Meta } from "../../components/Meta";
import { Call,  EmailOutlined, Home, InfoOutlined } from "@mui/icons-material";

export default function Contact() {
  return (
    <>
      <Meta title="Contact us" />
      <BreadCrumb title="Contact us" />
      <div className="contact-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d111497.2360705944!2d75.67313719870634!3d29.156165789503714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391232d8011d0c37%3A0x1d3f0df105af1178!2sHisar%2C%20Haryana!5e0!3m2!1sen!2sin!4v1692451034396!5m2!1sen!2sin"
                width="600"
                height="450"
                allowFullScreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                title="location"
                className="w-100 border-0"
              ></iframe>
            </div>
            <div className="col-12 mt-5">
              <div className="contact-inner-wrapper d-flex justify-content-between">
                <div className="mx-2">
                  <h4 className="contact-title ">Contact us</h4>
                  <form action="" className="d-flex flex-column gap-2">
                    <div>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Name"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Email"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Mobile no."
                      />
                    </div>
                    <div>
                      <textarea
                        name=""
                        id=""
                        cols="30"
                        rows="10"
                        className="w-100 form-control"
                        placeholder="Comment"
                      ></textarea>
                    </div>
                    <div>
                      <button className="button mb-1">Submit</button>
                    </div>
                  </form>
                </div>
                <div className="mx-2">
                  <h4 className="contact-title ">Get in touch with us</h4>
                  <div>
                    <ul className="ps-0 contact-info">
                      <li className="mb-3 d-flex align-items-center gap-1">
                        <Home />
                        <address className="mb-0">23,Brooklyn Street, New York, USA</address>
                      </li>
                      <li className="mb-3 d-flex align-items-center gap-1">
                        <Call />
                        <a href="tel:+91 1234567890">+91 1234567890</a>
                      </li>
                      <li className="mb-3 d-flex align-items-center gap-1">
                        <EmailOutlined  />
                        <a href="mailto:ecommerce@email.com">
                          ecommerce@email.com
                        </a>
                      </li>
                      <li className="mb-3 d-flex align-items-center gap-1">
                        <InfoOutlined  />
                        <p className="mb-0">Monday - Friday 10PM</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
