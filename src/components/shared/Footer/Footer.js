import React from "react";
import { Link } from "react-router-dom";
import { FaPaperPlane } from "react-icons/fa";
import { FaMapMarkerAlt, FaEnvelopeOpen, FaFacebookF } from "react-icons/fa";
import { AiOutlineGoogle } from "react-icons/ai";
import { BsTwitter, BsInstagram } from "react-icons/bs";
import SubscriptionForms from "../../SubscriptionForms/SubscriptionForms";
import blogs from "../../../data/blog-eng.json";
import NewsLaterForm from "../../NewsLaterForm/NewsLaterForm";

const Footer = () => {
  return (
    <>
      <footer className="theme-dark-bg">
        <NewsLaterForm></NewsLaterForm>
        <div className="tp-footer-area-two pt-80 pb-50">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-sm-6">
                <div
                  className="tp-footer-widget footer-col-1 mb-30 wow fadeInUp"
                  data-wow-delay=".3s"
                >
                  <div className="tp-footer-info">
                    <div className="tp-footer-info-logo mb-35">
                      <Link to="/">
                        <img
                          style={{ maxWidth: "150px" }}
                          src="/assets/img/logo/bribe-logo.png"
                          className="img-fluid"
                          alt="img not found"
                        />
                      </Link>
                    </div>
                    <h4 className="mb-15">
                      <a href="tel:02(850)2560-3">02 (850) 2560 - 3</a>
                    </h4>
                    <h6 className="mb-15">
                      {" "}
                      <i>
                        {" "}
                        <FaEnvelopeOpen />{" "}
                      </i>
                      <a href="mailto:info@basictheme.com">
                        email@bribealert.com
                      </a>
                    </h6>
                    <h6 className="mb-20">
                      {" "}
                      <i>
                        {" "}
                        <FaMapMarkerAlt />{" "}
                      </i>{" "}
                      25/B Globe House Ave. Point Beach, New York
                    </h6>
                    <div className="tp-footer-info-social">
                      <a href="/">
                        <i>
                          <FaFacebookF className="icon" />{" "}
                        </i>
                      </a>
                      <a href="/">
                        <i>
                          <BsTwitter className="icon" />{" "}
                        </i>
                      </a>
                      <a href="/">
                        <i>
                          <BsInstagram className="icon" />{" "}
                        </i>
                      </a>
                      <a href="/">
                        <i>
                          <AiOutlineGoogle className="icon" />{" "}
                        </i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div
                  className="tp-footer-widget footer-col-2 mb-30 wow fadeInUp"
                  data-wow-delay=".6s"
                >
                  <h4 className="tp-footer-widget-title mb-35">
                    Submit a Report
                  </h4>
                  <ul>
                    <li>
                      <Link to={"/i-paid-a-bribe"}>Report a Bribe</Link>
                    </li>
                    <li>
                      <Link to={"/i-am-a-bribe-fighter"}>Bribe Fight</Link>
                    </li>
                    <li>
                      <Link to={"/i-met-an-hones-officer"}>Honest officer</Link>
                    </li>
                    {/* <li>
                      <Link to={"#"}>Residential Services</Link>
                    </li>
                    <li>
                      <Link to={"#"}>Toilet Cleaning</Link>
                    </li> */}
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div
                  className="tp-footer-widget footer-col-3 mb-30 wow fadeInUp"
                  data-wow-delay=".9s"
                >
                  <h4 className="tp-footer-widget-title mb-35">Recent News</h4>
                  <div className="tp-footer-news">
                    {blogs.slice(0, 2).map((blog, index) => (
                      <div className="tp-footer-news-single mb-15">
                        <h6>
                          <Link to={`/blogDetails/${blog.id}`}>
                            {blog.headline}
                          </Link>
                        </h6>
                        <span>Jun 02, 2021</span>
                      </div>
                    ))}

                    {/* <div className="tp-footer-news-single">
                      <h6>
                        <Link to="/blogDetails">
                          Congue morbi elit dictumst socio sit mauris congue
                          sed.
                        </Link>
                      </h6>
                      <span>Jun 02, 2021</span>
                    </div> */}
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div
                  className="tp-footer-widget footer-col-4 mb-30 wow fadeInUp"
                  data-wow-delay="1.2s"
                >
                  <h4 className="tp-footer-widget-title mb-40">Instagram</h4>
                  <div className="tp-footer-insta">
                    <a href="/">
                      <img
                        src="/assets/img/footer/footer-insta-1.jpg"
                        className="img-fluid"
                        alt="img not found"
                      />
                    </a>
                    <a href="/">
                      <img
                        src="/assets/img/footer/footer-insta-2.jpg"
                        className="img-fluid"
                        alt="img not found"
                      />
                    </a>
                    <a href="/">
                      <img
                        src="/assets/img/footer/footer-insta-3.jpg"
                        className="img-fluid"
                        alt="img not found"
                      />
                    </a>
                    <a href="/">
                      <img
                        src="/assets/img/footer/footer-insta-4.jpg"
                        className="img-fluid"
                        alt="img not found"
                      />
                    </a>
                    <a href="/">
                      <img
                        src="/assets/img/footer/footer-insta-5.jpg"
                        className="img-fluid"
                        alt="img not found"
                      />
                    </a>
                    <a href="/">
                      <img
                        src="/assets/img/footer/footer-insta-6.jpg"
                        className="img-fluid"
                        alt="img not found"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="tp-copyright-area-two bg-green-light z-index pt-30 pb-30">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="tp-copyright tp-copyright-two text-center">
                  <p className="m-0">
                    Copyright ©2022 <span>Theme_pure</span>. All Rights Reserved
                    Copyright
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
