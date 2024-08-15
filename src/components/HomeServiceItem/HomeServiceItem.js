import React from 'react';
import { Link } from 'react-router-dom';

const HomeServiceItem = ({ icon_name, title, onClick, isActive }) => {
  return (
    <div className="col-xl-4 col-sm-6">
      <div
        className={`tp-services white-bg mb-30 wow fadeInUp ${isActive ? 'active' : ''}`}
        data-wow-delay=".2s"
        onClick={onClick}
        style={{ cursor: 'pointer' }}
      >
        <div className="tp-services-icon yellow-circle-shape">
          <i className={`flaticon-${icon_name}`}></i>
        </div>
        <div className="tp-services-text fix">
          <h4 className="tp-services-text-title mb-15 hover-theme-color">
            <Link to="/servicesDetails">{title}</Link>
          </h4>
          <p className="mb-20">Brief description about {title.toLowerCase()}.</p>
        </div>
      </div>
    </div>
  );
};

export default HomeServiceItem;
