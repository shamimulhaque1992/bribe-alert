import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import "react-modal-video/scss/modal-video.scss";
// import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import SwiperCore, {
  Pagination,
  Autoplay,
  A11y,
  EffectFade,
  EffectCards,
} from "swiper";
import { Carousel } from "react-bootstrap";
import HomeHeroSingleSlide from "../../../../components/HomeHeroSingleSlide/HomeHeroSingleSlide";

// install Swiper modules
SwiperCore.use([Pagination, Autoplay, A11y, EffectFade, EffectCards]);

const HeroMapSection = () => {
  const [isOpen, setOpen] = useState(false);
  const divisionData = {
    divisionName: "Dhaka",
    totalReports: 120,
    totalAmount: 500000,
    bribesPaid: 50,
    bribeFighters: 30,
    honestOfficers: 20,
    bribeHotline: "1234",
  };

  return (
    <>
      <section
        className="tp-slider-area fix pt-5 pb-5"
        style={{ backgroundColor: "#edf3f1" }}
      >
        <div className="container tp-slider-active home_hero_slide swiper-container common-dots pb-5">
          <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
            {/* Top Section */}
            <div
              style={{
                width: "80%",
                margin: "0 auto",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                backgroundColor: "#850d0d",
                padding: "20px 0 0 0",
              }}
            >
              <div style={{ textAlign: "center", flex: 1 }}>
                <h3 style={{ color: "#ffffff" }}>Cities</h3>
                <p style={{ color: "#ffffff" }}>10</p>
              </div>
              <div
                style={{
                  height: "50px",
                  width: "1px",
                  backgroundColor: "#ccc",
                  margin: "0 20px",
                }}
              ></div>
              <div style={{ textAlign: "center", flex: 1 }}>
                <h3 style={{ color: "#ffffff" }}>Reports</h3>
                <p style={{ color: "#ffffff" }}>120</p>
              </div>
              <div
                style={{
                  height: "50px",
                  width: "1px",
                  backgroundColor: "#ccc",
                  margin: "0 20px",
                }}
              ></div>
              <div style={{ textAlign: "center", flex: 1 }}>
                <h3 style={{ color: "#ffffff" }}>Taka</h3>
                <p style={{ color: "#ffffff" }}>500,000</p>
              </div>
            </div>

            {/* Bottom Section */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "40px",
              }}
            >
              {/* Left Section: Statistics */}
              <div
                style={{
                  width: "50%",
                  paddingRight: "20px",
                }}
                className="d-flex justify-content-center pr-5"
              >
                <div className="d-inline-block pr-5">
                  <div>
                    <h2>{divisionData.divisionName}</h2>
                    <hr
                      style={{
                        height: "10px",
                        width: "75%",
                        backgroundColor: "#ffc000",
                      }}
                    />
                  </div>

                  <div style={{ marginTop: "20px" }}>
                    <h4 style={{ fontWeight: "400" }}>Total Reports</h4>
                    <p style={{ fontWeight: "900" }}>
                      {divisionData.totalReports}
                    </p>
                  </div>
                  <div>
                    <h4 style={{ fontWeight: "400" }}>Total Amount</h4>
                    <p style={{ fontWeight: "900" }}>
                      {divisionData.totalAmount} Taka
                    </p>
                  </div>
                  <div>
                    <h4 style={{ fontWeight: "400" }}>Bribes Paid</h4>
                    <p style={{ fontWeight: "900" }}>
                      {divisionData.bribesPaid}
                    </p>
                  </div>
                  <div>
                    <h4 style={{ fontWeight: "400" }}>Bribe Fighters</h4>
                    <p style={{ fontWeight: "900" }}>
                      {divisionData.bribeFighters}
                    </p>
                  </div>
                  <div>
                    <h4 style={{ fontWeight: "400" }}>Honest Officers</h4>
                    <p style={{ fontWeight: "900" }}>
                      {divisionData.honestOfficers}
                    </p>
                  </div>
                  <div>
                    <h4 style={{ fontWeight: "400" }}>Bribe Hotline</h4>
                    <p style={{ fontWeight: "900" }}>
                      {divisionData.bribeHotline}
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Section: Map */}
              <div
                className="d-flex justify-content-center"
                style={{
                  width: "50%",
                  paddingLeft: "20px",
                  backgroundColor: "#f0f0f0",
                }}
              >
                <img
                  style={{ width: "80%" }}
                  src="assets/img/map/Bangladesh_divisions_english.svg"
                  alt=""
                />
              </div>
            </div>
          </div>
          {/* <Carousel interval={3000} fade={true} indicators={true}>
            <Carousel.Item>
              <HomeHeroSingleSlide setOpen={setOpen} />
            </Carousel.Item>

            <Carousel.Item>
              <HomeHeroSingleSlide setOpen={setOpen} />
            </Carousel.Item>

            <Carousel.Item>
              <HomeHeroSingleSlide setOpen={setOpen} />
            </Carousel.Item>
          </Carousel> */}

          <div className="swiper-paginations slide-dots"></div>
        </div>
      </section>
    </>
  );
};

export default HeroMapSection;
