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
import { useMediaQuery } from "react-responsive";

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
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
  const isLaptopOrDesktop = useMediaQuery({ minWidth: 1024 });

  useEffect(() => {
    const getAllReports = () => {
      try {
        setLoading(true);
        const req = instance.get("/bribe_stats?approval_status=Approved", {
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
    const delay = 1000; // 1 second delay
    let timeoutId;
    const getAllReportsByDivision = () => {
      try {
        if (hoveredDivision) {
          setLoading(true);
          const req = instance.get(
            `/bribe_stats?division=${hoveredDivision}&approval_status=Approved`,
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
    if (hoveredDivision) {
      timeoutId = setTimeout(() => {
        getAllReportsByDivision();
      }, delay);
    }

    // Cleanup timeout if hoveredDivision changes before the delay is over
    return () => clearTimeout(timeoutId);
    // getAllReportsByDivision();
  }, [hoveredDivision]);
  console.log("sdfs", allReportsByDivision);
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
        className={"tp-slider-area fix pt-5  wow fadeInUp "}
        //   className={`tp-slider-area fix pt-5  wow fadeInUp
        //     ${
        //     isMobile ? "mt-75" : "mt-100"
        //   }`
        // }
        style={{ backgroundColor: "#edf3f1" }}
      >
        <div className="container tp-slider-active home_hero_slide swiper-container common-dots mx-auto">
          <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
            {/* Top Section */}
            <div
              style={{
                maxWidth: "100%",
                margin: "0 auto",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                backgroundColor: "#232323",
                padding: "20px 0 0 0",
              }}
            >
              <div style={{ textAlign: "center", flex: 1 }}>
                <p
                  style={{
                    color: "#ffffff",
                    fontWeight: "700",
                    fontSize: "32px",
                  }}
                >
                  {allReports?.top_total_cities}
                </p>
                <h3
                  style={{
                    color: "#ffffff",
                    fontSize: "16px",
                    fontWeight: "400",
                  }}
                >
                  Division
                </h3>
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
                <p
                  style={{
                    color: "#ffffff",
                    fontWeight: "700",
                    fontSize: "32px",
                  }}
                >
                  {allReports?.top_total_reports}
                </p>
                <h3
                  style={{
                    color: "#ffffff",
                    fontSize: "16px",
                    fontWeight: "400",
                  }}
                >
                  Reports
                </h3>
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
                <p
                  style={{
                    color: "#ffffff",
                    fontWeight: "700",
                    fontSize: "32px",
                  }}
                >
                  {allReports?.top_total_amount}
                </p>
                <h3
                  style={{
                    color: "#ffffff",
                    fontSize: "16px",
                    fontWeight: "400",
                  }}
                >
                  Taka
                </h3>
              </div>
            </div>

            {/* Bottom Section */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "40px",
              }}
              className="d-flex flex-column flex-lg-row justify-content-between w-100"
            >
              {/* Left Section: Statistics */}
              <div
                style={{
                  width: "100%",
                }}
                className="d-flex justify-content-center w-100 "
              >
                <div
                  className="d-inline-block w-100 d-flex flex-column align-items-start"
                  style={{ width: "fit-content" }}
                >
                  <div
                    className={`${
                      isMobile ? "w-100" : isTablet ? "w-75" : "w-50"
                    }`}
                  >
                    <h2 style={{ fontSize: "24px", color: "#0b702a" }}>
                      {hoveredDivision}
                    </h2>
                    <div
                      style={{
                        height: "5px",
                        width: "20%",
                        backgroundColor: "#e5b10a",
                        marginBottom: "15px",
                      }}
                    />
                  </div>
                  <div
                    className={`d-flex flex-rwo flex-lg-column justify-content-between align-items-start ${
                      isMobile ? "w-100" : isTablet ? "w-75" : "w-50"
                    }`}
                    // style={{ width: "fit-content" }}
                  >
                    <div>
                      <div className="mb-4">
                        <h4
                          className="mb-0"
                          style={{
                            fontWeight: "700",
                            fontSize: "18px",
                            color: "#232323",
                          }}
                        >
                          Total Reports
                        </h4>
                        <p
                          style={{
                            fontWeight: "400",
                            fontSize: "24px",
                            color: "#232323",
                          }}
                        >
                          {allReportsByDivision?.sub_total_reports
                            ? allReportsByDivision?.sub_total_reports
                            : 0}
                        </p>
                      </div>
                      <div className="mb-4">
                        <h4
                          className="mb-0"
                          style={{
                            fontWeight: "700",
                            fontSize: "18px",
                            color: "#232323",
                          }}
                        >
                          Total Amount
                        </h4>
                        <p
                          style={{
                            fontWeight: "400",
                            fontSize: "24px",
                            color: "#232323",
                          }}
                        >
                          {allReportsByDivision?.sub_total_amount
                            ? allReportsByDivision?.sub_total_amount
                            : 0}{" "}
                          Taka
                        </p>
                      </div>
                      <div className="mb-4">
                        <h4
                          className="mb-0"
                          style={{
                            fontWeight: "700",
                            fontSize: "18px",
                            color: "#e50000",
                          }}
                        >
                          Bribes Paid
                        </h4>
                        <p
                          style={{
                            fontWeight: "400",
                            fontSize: "24px",
                            color: "#e50000",
                          }}
                        >
                          {allReportsByDivision?.sub_bribes_paid_count
                            ? allReportsByDivision?.sub_bribes_paid_count
                            : 0}
                        </p>
                      </div>
                    </div>

                    <div className="">
                      <div className="mb-4">
                        <h4
                          className="mb-0"
                          style={{
                            fontWeight: "700",
                            fontSize: "18px",
                            color: "#0b702a",
                          }}
                        >
                          Bribe Fighters
                        </h4>
                        <p
                          style={{
                            fontWeight: "400",
                            fontSize: "24px",
                            color: "#0b702a",
                          }}
                        >
                          {allReportsByDivision.sub_bribe_fighter_count
                            ? allReportsByDivision.sub_bribe_fighter_count
                            : 0}
                        </p>
                      </div>
                      <div className="mb-4">
                        <h4
                          className="mb-0"
                          style={{
                            fontWeight: "700",
                            fontSize: "18px",
                            color: "#e5b10a",
                          }}
                        >
                          Honest Officers
                        </h4>
                        <p
                          style={{
                            fontWeight: "400",
                            fontSize: "24px",
                            color: "#e5b10a",
                          }}
                        >
                          {allReportsByDivision.sub_honest_officer_count
                            ? allReportsByDivision.sub_honest_officer_count
                            : 0}
                        </p>
                      </div>
                      {/* <div className="mb-4">
                        <h4
                          className="mb-0"
                          style={{ fontWeight: "400", fontSize: "18px" }}
                        >
                          Bribe Hotline
                        </h4>
                        <p style={{ fontWeight: "400", fontSize: "24px" }}>
                          {allReportsByDivision.bribeHotline
                            ? allReportsByDivision.bribeHotline
                            : 0}
                        </p>
                      </div> */}
                    </div>
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
