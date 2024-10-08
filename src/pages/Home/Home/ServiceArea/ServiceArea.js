import React, { useState } from "react";
import HomeServiceItem from "../../../../components/HomeServiceItem/HomeServiceItem";
import MegaDropDown from "../../../../components/MegaDropDown/MegaDropDown";
import { useMediaQuery } from "react-responsive";

const ServiceArea = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  // Media queries to detect device types
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
  const isLaptopOrDesktop = useMediaQuery({ minWidth: 1024 });

  // Determine number of items per row based on device type
  const itemsPerRow = isMobile ? 1 : isTablet ? 2 : 3;

  const handleItemClick = (itemIndex) => {
    setSelectedItem(selectedItem === itemIndex ? null : itemIndex);
  };

  const handleCloseDropdown = () => {
    setSelectedItem(null);
  };

  const services = [
    {
      icon_name: "pot",
      title: "Stand Up Against Corruption",
      description:
        "Refuse to pay bribes for essential services like certificates, passports, or driving licenses. Your stand matters.",
    },
    {
      icon_name: "vacuum-cleaner",
      title: "Share Your Story",
      description:
        "Report your experience to raise awareness and encourage others to join the fight against corruption.",
    },
    {
      icon_name: "house-cleaning",
      title: "Drive Change",
      description:
        "Your report will be shared with media and government bodies, helping to push for systemic changes.",
    },
    // { icon_name: "desk", title: "Office Cleaning" },
    // { icon_name: "cleaning", title: "Road Cleaning" },
    // { icon_name: "window", title: "Window Cleaning" },
  ];

  const rows = [];
  for (let i = 0; i < services.length; i += itemsPerRow) {
    rows.push(services.slice(i, i + itemsPerRow));
  }

  return (
    <section className="tp-services-area theme-dark-bg pb-5 pt-5">
      <div className="tp-custom-container">
        <div className="tp-services-bg grey-bg pt-60 pb-90 z-index">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div
                  className="tp-section-title-wrapper text-center mb-55 wow fadeInUp"
                  data-wow-delay=".1s"
                >
                  <h5 className="tp-section-subtitle common-yellow-shape mb-20 section__sm__title">
                    Have you faced or resisted paying a bribe? Take action now.
                  </h5>
                  <h2 className="tp-section-title">How it works?</h2>
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
                      description={service.description}
                      onClick={() =>
                        handleItemClick(rowIndex * itemsPerRow + index)
                      }
                      isActive={selectedItem === rowIndex * itemsPerRow + index}
                    />
                  ))}
                </div>
                {/* MegaDropDown Positioning Logic */}
                {selectedItem !== null &&
                  ((isMobile &&
                    selectedItem >= rowIndex * itemsPerRow &&
                    selectedItem < (rowIndex + 1) * itemsPerRow) ||
                    ((isTablet || isLaptopOrDesktop) &&
                      Math.floor(selectedItem / itemsPerRow) === rowIndex)) && (
                    <MegaDropDown
                      services={services}
                      selectedItem={selectedItem}
                      handleCloseDropdown={handleCloseDropdown}
                    />
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
