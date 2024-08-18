import React from "react";

const MegaDropDown = ({ services, selectedItem, handleCloseDropdown }) => {
  return (
    <div className="row mb-4">
      <div className="col-12">
        <div className="dropdown-content">
          <div className="dropdown-header d-flex justify-content-between">
            <h4>{services[selectedItem].title}</h4>
            <div
              className="close-button btn border"
              onClick={handleCloseDropdown}
            >
              <img
                style={{ width: "20px" }}
                src="/assets/img/icon/close-black-circle.png"
                alt=""
              />
            </div>
          </div>
          <p>
            {services[selectedItem].description}.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MegaDropDown;
