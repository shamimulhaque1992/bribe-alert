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
        <div className="sticky-menu tp-header-menu-area tp-transparent-header-menu header-sticky py-1">
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
                        {/* <li className="menu-item-has-children">
                          <NavLink
                            style={{ fontSize: isTablet ? "15px" : "17px" }}
                            to="/"
                          >
                            Home
                          </NavLink>
                          <ul className="sub-menu">
                                  <li><NavLink style={{ fontSize: isTablet?"15px":"17px" }}to="/">Home Style 1</NavLink></li>
                                  <li><NavLink style={{ fontSize: isTablet?"15px":"17px" }}to="/homeTwo">Home Style 2</NavLink></li>
                                  <li><NavLink style={{ fontSize: isTablet?"15px":"17px" }}to="/homeThree">Home Style 3</NavLink></li>
                                </ul>
                        </li> */}
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
                        </li> <li className="menu-item-has-children">
                          <NavLink
                            style={{ fontSize: isTablet ? "15px" : "17px" }}
                            to="/contact"
                          >
                            {/* Partnerships */}
                            Contact Us
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
              <div className="col-xl-2 tp-sticky-column-btn" >
                <div className="tp-sticky-btn text-end" >
                  <Link
                    to="/i-paid-a-bribe"
                    className="theme-btn justify-content-end text-white" 
                    style={{ fontSize: isTablet ? "15px" : "17px",backgroundColor:"#e50000" }}
                  >
                    Report a Bribe
                    {/* <i className="flaticon-enter"></i> Free Quote */}
                  </Link>
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
