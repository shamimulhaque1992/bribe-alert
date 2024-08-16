import React, { useEffect, useState } from "react";
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
import MapComponent from "../../../../components/MapComponent/MapComponent";
import instance from "../../../../instance/api_instance";

// install Swiper modules
SwiperCore.use([Pagination, Autoplay, A11y, EffectFade, EffectCards]);

const HeroMapSection = () => {
  const [isOpen, setOpen] = useState(false);
  const [hoveredDivision, setHoveredDivision] = useState("Dhaka");
  const [showRdBtn, setShowRdBtn] = useState(false);
  const [allReports, setAllReports] = useState([]);
  const [allReportsByDivision, setAllReportsByDivision] = useState([]);
  const [sidebarContent, setSidebarContent] = useState({});
  const [loading, setLoading] = useState(false);
  const divisionData = {
    divisionName: "Dhaka",
    totalReports: 120,
    totalAmount: 500000,
    bribesPaid: 50,
    bribeFighters: 30,
    honestOfficers: 20,
    bribeHotline: "1234",
  };

  useEffect(() => {
    const getAllReports = () => {
      try {
        setLoading(true);
        const req = instance.get("/bribeformdata?approval_status=Approved", {
          method: "get",
          headers: {
            Accept: "application/json",
          },
        });
        req
          .then((response) => {
            console.log("your log output", response);
            setAllReports(response.data);
            setLoading(false);
          })
          .catch((error) => {
            console.error("Error:", error);
            setLoading(false);
          });
      } catch (error) {
        setLoading(false);
      }
    };
    getAllReports();
  }, []);

  useEffect(() => {
    const getAllReportsByDivision = () => {
      try {
        if (hoveredDivision) {
          setLoading(true);
          const req = instance.get(
            `/bribeformdata?division=${hoveredDivision}`,
            {
              method: "get",
              headers: {
                Accept: "application/json",
              },
            }
          );
          req
            .then((response) => {
              setAllReportsByDivision(response.data);
              setLoading(false);
            })
            .catch((error) => {
              console.error("Error:", error);
              setLoading(false);
            });
        }
      } catch (error) {
        setLoading(false);
      }
    };
    getAllReportsByDivision();
  }, [hoveredDivision]);
  console.log("your log output", allReportsByDivision);
  const divisions = [
    { id: "division1", name: "Rangpur" },
    { id: "division2", name: "Khulna" },
    { id: "division3", name: "Barishal" },
    { id: "division4", name: "Rajshahi" },
    { id: "division5", name: "Mymensingh" },
    { id: "division6", name: "Dhaka" },
    { id: "division7", name: "Chittagong" },
    { id: "division8", name: "Sylhet" },
  ];

  return (
    <>
      <section
        className="tp-slider-area fix pt-5  wow fadeInUp"
        style={{ backgroundColor: "#edf3f1" }}
      >
        <div className="container tp-slider-active home_hero_slide swiper-container common-dots ">
          <div style={{  fontFamily: "Arial, sans-serif" }}>
            {/* Top Section */}
            <div
              style={{
                width: "80%",
                margin: "0 auto",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                backgroundColor: "#232323",
                padding: "20px 0 0 0",
              }}
            >
              <div style={{ textAlign: "center", flex: 1 }}>
                <h3 style={{ color: "#ffffff" }}>Cities</h3>
                <p style={{ color: "#ffffff" }}>{allReports?.total_cities}</p>
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
                <p style={{ color: "#ffffff" }}>
                  {allReports?.total_submission}
                </p>
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
                <p style={{ color: "#ffffff" }}>{allReports?.total_amount}</p>
              </div>
            </div>

            {/* Bottom Section */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "40px",
              }}
              className="d-flex flex-column flex-lg-row justify-content-between"
            >
              {/* Left Section: Statistics */}
              <div
                style={{
                  width: "100%",
                  paddingRight: "20px",
                }}
                className="d-flex justify-content-center pr-5"
              >
                <div className="d-inline-block pr-5">
                  <div>
                    <h2>{hoveredDivision}</h2>
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
                      {allReportsByDivision?.total_submission}
                    </p>
                  </div>
                  <div>
                    <h4 style={{ fontWeight: "400" }}>Total Amount</h4>
                    <p style={{ fontWeight: "900" }}>
                      {allReportsByDivision?.total_amount} Taka
                    </p>
                  </div>
                  <div>
                    <h4 style={{ fontWeight: "400" }}>Bribes Paid</h4>
                    <p style={{ fontWeight: "900" }}>
                      {allReportsByDivision?.total_submission}
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
              <MapComponent
                setHoveredDivision={setHoveredDivision}
              ></MapComponent>
            </div>
          </div>
          <div className="swiper-paginations slide-dots"></div>
        </div>
      </section>
    </>
  );
};

export default HeroMapSection;
