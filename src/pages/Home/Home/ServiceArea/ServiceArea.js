import React, { useState } from "react";
import HomeServiceItem from "../../../../components/HomeServiceItem/HomeServiceItem";
import MegaDropDown from "../../../../components/MegaDropDown/MegaDropDown";

const ServiceArea = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (itemIndex) => {
    setSelectedItem(selectedItem === itemIndex ? null : itemIndex);
  };

  const handleCloseDropdown = () => {
    setSelectedItem(null);
  };

  const services = [
    { icon_name: "pot", title: "Kitchen Cleaning" },
    { icon_name: "vacuum-cleaner", title: "Carpet Cleaning" },
    { icon_name: "house-cleaning", title: "House Cleaning" },
    { icon_name: "desk", title: "Office Cleaning" },
    { icon_name: "cleaning", title: "Road Cleaning" },
    { icon_name: "window", title: "Window Cleaning" },
  ];

  const rows = [];
  for (let i = 0; i < services.length; i += 3) {
    rows.push(services.slice(i, i + 3));
  }

  return (
    <section className="tp-services-area theme-dark-bg">
      <div className="tp-custom-container">
        <div className="tp-services-bg grey-bg pt-120 pb-90 z-index">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div
                  className="tp-section-title-wrapper text-center mb-55 wow fadeInUp"
                  data-wow-delay=".1s"
                >
                  <h2 className="tp-section-title">How to</h2>
                </div>
              </div>
            </div>
            {rows.map((row, rowIndex) => (
              <React.Fragment key={rowIndex}>
                <div className="row">
                  {row.map((service, index) => (
                    <HomeServiceItem
                      key={index}
                      icon_name={service.icon_name}
                      title={service.title}
                      onClick={() => handleItemClick(rowIndex * 3 + index)}
                      isActive={selectedItem === rowIndex * 3 + index}
                    />
                  ))}
                </div>
                {selectedItem !== null &&
                  Math.floor(selectedItem / 3) === rowIndex && (
                    <MegaDropDown
                      services={services}
                      selectedItem={selectedItem}
                      handleCloseDropdown={handleCloseDropdown}
                    ></MegaDropDown>
                  )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceArea;
