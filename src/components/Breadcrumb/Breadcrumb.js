import React from "react";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";

const Breadcrumb = ({ title, subTitle, smallText, bannerBg, bgImg }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
  const isLaptopOrDesktop = useMediaQuery({ minWidth: 1024, maxWidth: 1440 });
  return (
    <>
      <div
        className={`tp-page-title-area  position-relative fix `}
        style={{
          backgroundColor: bannerBg ? bannerBg : "#0b702a",
          // backgroundImage: `url(${bgImg})`,
          // backgroundRepeat: "no-repeat",
          // backgroundSize: "contain",
          marginTop: isMobile ? "75px" : "110px",
        }}
      >
        <img
          src={bgImg}
          alt=""
          style={{
            height: isMobile ? "150px" : "",
            width: "100%",
          }}
        />

        <div
          className={`tp-custom-container position-absolute  bottom-0 start-50 translate-middle-x ${
            isMobile || isTablet ? "ps-5 pb-1" : " pb-5"
          }`}
        >
          <div className="row">
            <div className="col-12">
              <div className="tp-page-title z-index">
                <h2
                  className="breadcrumb-title text-white"
                  style={{
                    fontSize:
                      isMobile || isTablet
                        ? "20px"
                        : isLaptopOrDesktop
                        ? "35px"
                        : "",
                  }}
                >
                  {title}{" "}
                  <span className="text-white">{subTitle && subTitle}</span>
                </h2>
                <div className="breadcrumb-menu">
                  <nav className="breadcrumb-trail breadcrumbs">
                    <ul className="trail-items">
                      <li className="trail-item trail-begin text-white">
                        <Link to="/">Home</Link>
                      </li>
                      <li className="trail-item trail-end text-white">
                        <span>{smallText && smallText}</span>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Breadcrumb;
