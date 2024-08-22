import React, { useState } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Sidebar from "../../Sidebar/Sidebar";
import { FaBars } from "react-icons/fa";
import { useMediaQuery } from "react-responsive";

const Navigation = () => {
  const [show, setShow] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 1200, maxWidth: 1399 });
  const isLaptopOrDesktop = useMediaQuery({ minWidth: 1024 });
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // sticky state
  const [sticky, setSticky] = useState(false);
  const stickyNavbar = () => {
    if (window.scrollY > 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  window.addEventListener("scroll", stickyNavbar);
  return (
    <>
      <header>
        <div className="tp-header-area">
          <div className="tp-header-top theme-dark-bg pt-20 pb-50 d-none d-xl-block">
            <div className="tp-custom-container">
              <div
                className={`row align-items-center justify-content-center justify-content-xl-between justify-content-xxl-between `}
                style={{ maxWidth: isTablet?"830px":"966px", margin: "0 auto" }}
              >
                {/* <div className="col-xxl-4 col-xl-5">
                  <div className="tp-header-top-info">
                    <div className="tp-header-top-info-single pr-40 mr-40 border-right-1">
                      <div className="tp-header-top-info-single-icon mr-10">
                        <i className="flaticon-pin"></i>
                      </div>
                      <div className="tp-header-top-info-single-text">
                        <span className="tp-header-top-info-single-label">
                          Free Contact
                        </span>
                        <span className="tp-header-top-info-single-content font-medium">
                          28/4 Palmal, London
                        </span>
                      </div>
                    </div>
                    <div className="tp-header-top-info-single">
                      <div className="tp-header-top-info-single-icon mr-15">
                        <i className="flaticon-email"></i>
                      </div>
                      <div className="tp-header-top-info-single-text">
                        <span className="tp-header-top-info-single-label">
                          Email us
                        </span>
                        <a
                          href="mailto:email@bribealert.com"
                          className="tp-header-top-info-single-content font-medium text-white"
                        >
                          email@bribealert.com
                        </a>
                      </div>
                    </div>
                  </div>
                </div> */}
                <div className="col-xxl-5 col-xl-2 px-0">
                  <div className="header-logo text-left">
                    <Link to="/">
                      <img
                        style={{ maxWidth: "90px" }}
                        src="/assets/img/logo/bribe-logo.png"
                        className="img-fluid"
                        alt="logo not found"
                      />
                    </Link>
                  </div>
                </div>
                <div className="col-xxl-5 col-xl-5 px-0">
                  <div className="tp-header-top-info justify-content-end">
                    {/* <div className="tp-header-top-info-single mr-85">
                      <div className="tp-header-top-info-single-icon tp-header-top-info-single-icon-call mr-10">
                        <i className="flaticon-phone-call"></i>
                      </div>
                      <div className="tp-header-top-info-single-text">
                        <span className="tp-header-top-info-single-label">
                          Free Call
                        </span>
                        <a
                          href="tel:33388820055"
                          className="tp-header-top-info-single-content font-medium text-white"
                        >
                          333 888 200 - 55
                        </a>
                      </div>
                    </div> */}
                    <div className="tp-header-top-info-single">
                      <div className="tp-header-top-info-single-btn">
                        <Link to="/i-paid-a-bribe" className="yellow-btn">
                          {/* <i className="flaticon-enter"></i> */} Report a
                          Bribe
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className={
              sticky
                ? "sticky-menu tp-header-menu-area tp-transparent-header-menu header-sticky py-1"
                : "tp-header-menu-area tp-transparent-header-menu header-sticky mt-3 py-1"
            }
          >
            <div className="container">
              <div className="row justify-content-xl-center align-items-center">
                <div className="col-xl-1 col-8 tp-sticky-column">
                  <div className="tp-sticky-logo">
                    <Link to="/">
                      <img
                        style={{ maxWidth: isMobile ? "65px" : "100px" }}
                        src="/assets/img/logo/bribe-logo.png"
                        className="img-fluid"
                        alt="logo not found"
                      />
                    </Link>
                  </div>
                </div>
                <div className="col-xl-9 col-4">
                  <div className="tp-main-menu-bg mx-0">
                    <div className="tp-main-menu">
                      <nav id="tp-mobile-menu">
                        <ul className="text-center">
                          <li className="menu-item-has-children">
                            <NavLink
                              style={{ fontSize: isTablet ? "15px" : "17px" }}
                              to="/"
                            >
                              Home
                            </NavLink>
                            {/* <ul className="sub-menu">
                                  <li><NavLink style={{ fontSize: isTablet?"15px":"17px" }}to="/">Home Style 1</NavLink></li>
                                  <li><NavLink style={{ fontSize: isTablet?"15px":"17px" }}to="/homeTwo">Home Style 2</NavLink></li>
                                  <li><NavLink style={{ fontSize: isTablet?"15px":"17px" }}to="/homeThree">Home Style 3</NavLink></li>
                                </ul> */}
                          </li>
                          <li className="menu-item-has-children">
                            <NavLink
                              style={{ fontSize: isTablet ? "15px" : "17px" }}
                              to="/about"
                            >
                              About Us
                            </NavLink>
                            {/* <ul className="sub-menu">
                              <li>
                                <NavLink style={{ fontSize: isTablet?"15px":"17px" }}to="/about">About</NavLink>
                              </li>
                              <li>
                                <NavLink style={{ fontSize: isTablet?"15px":"17px" }}to="/appointment">Appointment</NavLink>
                              </li>
                              <li>
                                <NavLink style={{ fontSize: isTablet?"15px":"17px" }}to="/pricing">Pricing</NavLink>
                              </li>
                              <li>
                                <NavLink style={{ fontSize: isTablet?"15px":"17px" }}to="/team">Team</NavLink>
                              </li>
                              <li>
                                <NavLink style={{ fontSize: isTablet?"15px":"17px" }}to="/teamDetails">
                                  Team Details
                                </NavLink>
                              </li>
                              <li>
                                <NavLink style={{ fontSize: isTablet?"15px":"17px" }}to="/faq">Faq</NavLink>
                              </li>
                            </ul> */}
                          </li>
                          {/* <li className="menu-item-has-children">
                            <NavLink style={{ fontSize: isTablet?"15px":"17px" }}to="/services">Services </NavLink>
                            <ul className="sub-menu">
                              <li>
                                <NavLink style={{ fontSize: isTablet?"15px":"17px" }}to="/services">Services</NavLink>
                              </li>
                              <li>
                                <NavLink style={{ fontSize: isTablet?"15px":"17px" }}to="/servicesDetails">
                                  Services Details
                                </NavLink>
                              </li>
                            </ul>
                          </li> */}
                          <li className="menu-item-has-children">
                            <NavLink
                              style={{ fontSize: isTablet ? "15px" : "17px" }}
                              to="/resource"
                            >
                              Resource{" "}
                            </NavLink>
                            {/* <ul className="sub-menu">
                              <li>
                                <NavLink style={{ fontSize: isTablet?"15px":"17px" }}to="/services">Services</NavLink>
                              </li>
                              <li>
                                <NavLink style={{ fontSize: isTablet?"15px":"17px" }}to="/servicesDetails">
                                  Services Details
                                </NavLink>
                              </li>
                            </ul> */}
                          </li>
                          <li className="menu-item-has-children">
                            <NavLink
                              style={{ fontSize: isTablet ? "15px" : "17px" }}
                              to="/i-paid-a-bribe"
                            >
                              Paid a Bribe{" "}
                            </NavLink>
                            {/* <ul className="sub-menu">
                              <li>
                                <NavLink style={{ fontSize: isTablet?"15px":"17px" }}to="/services">Services</NavLink>
                              </li>
                              <li>
                                <NavLink style={{ fontSize: isTablet?"15px":"17px" }}to="/servicesDetails">
                                  Services Details
                                </NavLink>
                              </li>
                            </ul> */}
                          </li>
                          <li className="menu-item-has-children">
                            <NavLink
                              style={{ fontSize: isTablet ? "15px" : "17px" }}
                              to="/i-am-a-bribe-fighter"
                            >
                              Bribe Fighter{" "}
                            </NavLink>
                            {/* <ul className="sub-menu">
                              <li>
                                <NavLink style={{ fontSize: isTablet?"15px":"17px" }}to="/services">Services</NavLink>
                              </li>
                              <li>
                                <NavLink style={{ fontSize: isTablet?"15px":"17px" }}to="/servicesDetails">
                                  Services Details
                                </NavLink>
                              </li>
                            </ul> */}
                          </li>
                          <li className="menu-item-has-children">
                            <NavLink
                              style={{ fontSize: isTablet ? "15px" : "17px" }}
                              to="/i-met-an-hones-officer"
                            >
                              Honest Officer{" "}
                            </NavLink>
                            {/* <ul className="sub-menu">
                              <li>
                                <NavLink style={{ fontSize: isTablet?"15px":"17px" }}to="/services">Services</NavLink>
                              </li>
                              <li>
                                <NavLink style={{ fontSize: isTablet?"15px":"17px" }}to="/servicesDetails">
                                  Services Details
                                </NavLink>
                              </li>
                            </ul> */}
                          </li>
                          <li className="menu-item-has-children">
                            <NavLink
                              style={{ fontSize: isTablet ? "15px" : "17px" }}
                              to="/partnerships"
                            >
                              Partnerships
                            </NavLink>
                            {/*  <ul className="sub-menu">
                              <li>
                                <NavLink style={{ fontSize: isTablet?"15px":"17px" }}to="/partnerships">Partnerships</NavLink>
                              </li>
                              <li>
                                <NavLink style={{ fontSize: isTablet?"15px":"17px" }}to="/projectsDetails">
                                  Projects Details
                                </NavLink>
                              </li>
                            </ul> */}
                          </li>
                          <li className="menu-item-has-children">
                            <NavLink
                              style={{ fontSize: isTablet ? "15px" : "17px" }}
                              to="/blogs"
                            >
                              Blog
                            </NavLink>
                            {/* <ul className="sub-menu">
                              <li>
                                <NavLink style={{ fontSize: isTablet?"15px":"17px" }}to="/blogs">
                                  Blog Sidebar
                                </NavLink>
                              </li>
                              <li>
                                <NavLink style={{ fontSize: isTablet?"15px":"17px" }}to="/blogDetails">
                                  Blog Details
                                </NavLink>
                              </li>
                            </ul> */}
                          </li>
                          {/* <li>
                            <NavLink style={{ fontSize: isTablet?"15px":"17px" }}to="/contact">Contact</NavLink>
                          </li> */}
                        </ul>
                      </nav>
                    </div>

                    <div className="side-menu-icon d-xl-none text-end">
                      <button
                        onClick={handleShow}
                        className="side-toggle border-0 bg-transparent"
                      >
                        <i>
                          {" "}
                          <FaBars className="bar_icon" />{" "}
                        </i>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-xl-2 tp-sticky-column-btn">
                  <div className="tp-sticky-btn text-end">
                    <Link
                      to="/i-paid-a-bribe"
                      className="theme-btn justify-content-end text-white"
                      style={{ fontSize: isTablet ? "15px" : "17px" }}
                    >
                      Report a Bribe
                      {/* <i className="flaticon-enter"></i> Free Quote */}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <Sidebar show={show} handleClose={handleClose}></Sidebar>
    </>
  );
};

export default Navigation;
