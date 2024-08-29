import React, { useState } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Sidebar from "../../Sidebar/Sidebar";
import { FaBars } from "react-icons/fa";
import { useMediaQuery } from "react-responsive";
import CtaArea from "../../../pages/Home/Home/CtaArea/CtaArea";
import { FaWindowClose } from "react-icons/fa";
import { IoIosCloseCircle } from "react-icons/io";
import { TbReportSearch } from "react-icons/tb";

const Navigation = () => {
  const [show, setShow] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 1200, maxWidth: 1399 });
  const isLaptopOrDesktop = useMediaQuery({ minWidth: 1024 });
  const [reportType, setReportType] = useState("paid_a_bribe");
  const [textColor, setTextColor] = useState("#e50000");
  const [placeHolderColor, setPlaceHolderColor] = useState("#f46767a6");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleClick = (type, textColor, placeholderColor) => {
    setReportType(type);
    setTextColor(textColor);
    setPlaceHolderColor(placeholderColor);
  };
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
                        </li>{" "}
                        <li className="menu-item-has-children">
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
              <div className="col-xl-2 tp-sticky-column-btn">
                <div
                  className="tp-sticky-btn text-end"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  <div
                    className="theme-btn justify-content-end text-white d-flex align-items-center justify-content-between"
                    style={{
                      fontSize: isTablet ? "15px" : "17px",
                      backgroundColor: "#e50000",
                    }}
                  >
                    <span>Report</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable">
          <div class="modal-content">
            {/* <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Modal title
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div> */}
            <div class="modal-body pt-4">
              <div className="w-100 text-end">
                <IoIosCloseCircle
                  data-bs-dismiss="modal"
                  style={{ fontSize: "30px", color: "gray", cursor: "pointer" }}
                />
              </div>

              <ul
                class="nav nav-tabs d-flex flex-column flex-md-row justify-content-between gap-3"
                style={{ maxWidth: "720px", margin: "0 auto" }}
              >
                <li
                  class={`nav-item ${isMobile ? "w-100" : "w-25"}`}
                  style={{ height: "60px" }}
                >
                  <button
                    type="button"
                    className={`h-100 border-0  px-2 w-100 ${
                      reportType !== "paid_a_bribe" ? "bg-light text-dark" : ""
                    }`}
                    onClick={() =>
                      handleClick("paid_a_bribe", "#e50000", "#f46767a6")
                    }
                    style={{
                      backgroundColor:
                        reportType === "paid_a_bribe" ? "#e50000" : "",
                      color: reportType === "paid_a_bribe" ? "#ffffff" : "",
                    }}
                  >
                    Paid a Bribe
                  </button>
                </li>
                <li
                  class={`nav-item ${isMobile ? "w-100" : "w-25"}`}
                  style={{ height: "60px" }}
                >
                  <button
                    type="button"
                    className={`h-100 border-0 px-2 w-100 ${
                      reportType !== "bribe_fighter" ? "bg-light text-dark" : ""
                    }`}
                    onClick={() =>
                      handleClick("bribe_fighter", "#0b702a", "#0b702ab3")
                    }
                    style={{
                      backgroundColor:
                        reportType === "bribe_fighter" ? "#0b702a" : "",
                      color: reportType === "bribe_fighter" ? "#ffffff" : "",
                    }}
                  >
                    Bribe Fighter
                  </button>
                </li>
                <li
                  class={`nav-item ${isMobile ? "w-100" : "w-25"}`}
                  style={{ height: "60px" }}
                >
                  <button
                    type="button"
                    className={`h-100 border-0  px-2 w-100 ${
                      reportType !== "honest_officer"
                        ? "bg-light text-dark"
                        : ""
                    }`}
                    onClick={() =>
                      handleClick("honest_officer", "#e5b10a", "#ffc200e8")
                    }
                    style={{
                      backgroundColor:
                        reportType === "honest_officer" ? "#e5b10a" : "",
                      color: reportType === "honest_officer" ? "#ffffff" : "",
                    }}
                  >
                    Honest Officer
                  </button>
                </li>
              </ul>
              <CtaArea
                reportType={reportType}
                textColor={textColor}
                placeHolderColor={placeHolderColor}
              ></CtaArea>
            </div>
            {/* <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-primary">
                Save changes
              </button>
            </div> */}
          </div>
        </div>
      </div>
      <Sidebar show={show} handleClose={handleClose}></Sidebar>
    </>
  );
};

export default Navigation;
