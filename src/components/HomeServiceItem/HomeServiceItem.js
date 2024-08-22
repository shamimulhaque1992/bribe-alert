import React from "react";

const HomeServiceItem = ({
  icon_name,
  title,
  onClick,
  isActive,
  description,
  serial,
  isReversed = false // New prop to control layout direction
}) => {
  return (
    <div className="col-xl-4 col-md-6 mb-5">
      <div
        className={`tp-services white-bg mb-30 wow fadeInUp pb-0 ${isActive ? "active" : ""} h-100 ${isReversed ? "reversed" : ""}`}
        data-wow-delay=".2s"
        onClick={onClick}
        style={{ cursor: "pointer", display: "flex",  alignItems: "center", gap: 5,justifyContent:"center" }}
      >
        <div className="tp-services-icon yellow-circle-shape">
          <i className={`flaticon-${icon_name}`} ></i>
          {/* <img src={icon_name} alt=" "  style={{width:'px'}}/> */}
        </div>
        <div className="tp-services-text fix">
          <h1 className="hover-theme-color">{serial}</h1>
          <h4 className="tp-services-text-title hover-theme-color">{title}</h4>
          <p className="mb-20 " style={{fontSize:"14px"}}>{description}</p>
        
        </div>
        
      </div>
     
    </div>
  );
};

export default HomeServiceItem;
