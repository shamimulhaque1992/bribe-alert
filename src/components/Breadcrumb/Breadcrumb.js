import React from "react";
import { Link } from "react-router-dom";

const Breadcrumb = ({ title, subTitle, smallText, bannerBg }) => {
  return (
    <>
      <div
        className={`tp-page-title-area pt-180 pb-185 position-relative fix`}
        style={{ backgroundColor: bannerBg }}
      >
        <div className="tp-custom-container">
          <div className="row">
            <div className="col-12">
              <div className="tp-page-title z-index">
                <h2 className="breadcrumb-title text-white">
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
