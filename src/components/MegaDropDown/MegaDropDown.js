import React from "react";

const MegaDropDown = ({ services, selectedItem, handleCloseDropdown }) => {
  return (
    <div className="row mb-4">
      <div className="col-12">
        <div className="dropdown-content">
          <div className="dropdown-header d-flex justify-content-between text-wrap">
            <h4>{services[selectedItem].title}</h4>
            <div
              className="close-button btn border d-flex justify-content-center align-items-center"
              onClick={handleCloseDropdown}
              style={{ maxWidth: "40px", maxHeight: "40px" }}
            >
              <img
                style={{ maxWidth: "20px", maxHeight: "20px" }}
                src="/assets/img/icon/close-black-circle.png"
                alt=""
              />
            </div>
          </div>
          <p>{services[selectedItem].description}.</p>
        </div>
      </div>
    </div>
  );
};

export default MegaDropDown;
