import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import divisions from "../../../../data/district-division-bangladesh.json";
import governmentAreas from "../../../../data/bribe-area.json";
import instance from "../../../../instance/api_instance";
import toast, { Toaster } from "react-hot-toast";
import { useMediaQuery } from "react-responsive";
const CtaArea = ({ reportType, textColor }) => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const [showContactInfo, setShowContactInfo] = useState(false);
  const [isAnonymous, setIsAnonymous] = useState(true);
  const [showTooltip, setShowTooltip] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1399 });
  const isLaptopOrDesktop = useMediaQuery({ minWidth: 1024 });

  const onSubmit = async (data) => {
    console.log("amar data", data);
    const postData = {
      form_type: reportType, // paid_a_bribe
      form_data: {
        governmentArea: data.governmentArea,
        bribeReason: data.bribeReason,
        division: data.division,
        district: data.district,
        date: data.date,
        amount: data.amount,
        reportTitle: data.reportTitle,
        reportDetails: data.reportDetails,
        officerDetails: data.officerDetails,
        shareStory: data.shareStory,
        privacyPolicy: data.privacyPolicy,
        keepUpdated: data.keepUpdated,
      },
      applicant: {
        contactName: data.contactName,
        contactEmail: data.contactEmail,
        contactNumber: data.contactNumber,
      },
      applicant_visibility: 1, // 1= Visible, 0 = Hide
      approval_status: "Pending", // Pending, Processing, Approved, Canceled
      amount: data.amount,
      status: 1,
    };
    try {
      toast.promise(
        instance.post("/bribeformdata", postData, {
          headers: { "Content-Type": "application/json" },
        }),
        {
          loading: "Sending report...",
          success: (response) => `Report sent successfully!`,
          error: (error) => {
            return "Failed to send report. Please try again.";
          },
        },
        {
          style: {
            minWidth: "250px",
          },
          success: {
            duration: 5000,
          },
        }
      );
      reset();
    } catch (error) {}
  };

  const selectedGovernmentArea = watch("governmentArea");
  const selectedDivision = watch("division");
  const isAnonymousRadio = watch("shareStory") === "anonymous";

  useEffect(() => {
    setIsAnonymous(isAnonymousRadio);
  }, [isAnonymousRadio]);

  // Find the reasons for the selected government area
  const getReasons = (area) => {
    const category = governmentAreas.find(
      (cat) => Object.keys(cat)[0] === area
    );
    return category ? category[area] : [];
  };

  return (
    <section className="tp-appoint-cta-area -bg pt-80 pb-65">
      <div className="container">
        <div className="row align-items-center custom-mar-20 justify-content-center">
          <div className="col-8 custom-pad-20 mb-2">
            <div className="tp-appoint wow fadeInUp" data-wow-delay=".1s">
              <h4
                className="fs-1 tp-appoint-title text-left mb-5"
                style={{ color: textColor }}
              >
                Add a report
              </h4>
            </div>
          </div>
        </div>
        <div className="row align-items-center custom-mar-20 justify-content-center">
          <div
            className="col-xl-8 col-lg-9 custom-pad-20 px-3 py-4"
            style={{ backgroundColor: "#f2f2f2" }}
          >
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="row align-items-center custom-mar-20">
                <div className="col-lg-6 custom-pad-20">
                  <div className="tp-appoint wow fadeInUp" data-wow-delay=".3s">
                    <select
                      {...register("governmentArea", {
                        required: {
                          value: true,
                          message: "Please select an option!",
                        },
                      })}
                      className="form-control"
                    >
                      <option disabled value="">
                        Which area of government?
                      </option>
                      {governmentAreas.map((areaObject, index) => {
                        const area = Object.keys(areaObject)[0];
                        return (
                          <option key={index} value={area}>
                            {area}
                          </option>
                        );
                      })}
                    </select>
                    <p style={{ color: "red" }}>
                      {errors.governmentArea?.message}
                    </p>
                  </div>
                </div>

                <div className="col-lg-6 custom-pad-20">
                  <div className="tp-appoint wow fadeInUp" data-wow-delay=".5s">
                    <select
                      {...register("bribeReason", {
                        required: {
                          value: true,
                          message: "Please select an option!",
                        },
                      })}
                      className="form-control"
                    >
                      <option disabled value="">
                        Why were you asked for the bribe?
                      </option>
                      {getReasons(selectedGovernmentArea).map(
                        (reason, index) => (
                          <option key={index} value={reason}>
                            {reason}
                          </option>
                        )
                      )}
                    </select>
                    <p style={{ color: "red" }}>
                      {errors.bribeReason?.message}
                    </p>
                  </div>
                </div>

                <div className="col-lg-6 custom-pad-20">
                  <div className="tp-appoint wow fadeInUp" data-wow-delay=".7s">
                    <select
                      {...register("division", {
                        required: {
                          value: true,
                          message: "Please select an option!",
                        },
                      })}
                      className="form-control"
                    >
                      <option disabled value="">
                        Select division
                      </option>
                      {divisions.map((division) => (
                        <option key={division.id} value={division.name}>
                          {division.name}
                        </option>
                      ))}
                    </select>
                    <p style={{ color: "red" }}>{errors.division?.message}</p>
                  </div>
                </div>

                <div className="col-lg-6 custom-pad-20">
                  <div className="tp-appoint wow fadeInUp" data-wow-delay=".7s">
                    <select
                      {...register("district", {
                        required: {
                          value: true,
                          message: "Please select an option!",
                        },
                      })}
                      className="form-control"
                    >
                      <option disabled value="">
                        Select district
                      </option>
                      {divisions
                        .find((d) => d.name === selectedDivision)
                        ?.districts.map((district) => (
                          <option key={district.id} value={district.name}>
                            {district.name}
                          </option>
                        ))}
                    </select>
                    <p style={{ color: "red" }}>{errors.district?.message}</p>
                  </div>
                </div>

                <div
                  className={`${
                    reportType === "paid_a_bribe" ? "col-lg-6" : "col-lg-12"
                  } custom-pad-20`}
                >
                  <div className="tp-appoint wow fadeInUp" data-wow-delay=".3s">
                    <input
                      type="date"
                      {...register("date", {
                        required: {
                          value: true,
                          message: "Please select date!",
                        },
                      })}
                      placeholder="Date"
                      className="form-control"
                    />
                    <p style={{ color: "red" }}>{errors.date?.message}</p>
                  </div>
                </div>
                {reportType === "paid_a_bribe" ? (
                  <div className="col-lg-6 custom-pad-20">
                    <div
                      className="tp-appoint wow fadeInUp"
                      data-wow-delay=".3s"
                    >
                      <input
                        type="number"
                        {...register("amount", {
                          required: {
                            value: reportType === "paid_a_bribe",
                            message: "Please enter a amount!",
                          },
                        })}
                        placeholder="Amount"
                        className="form-control"
                      />
                      <p style={{ color: "red" }}>{errors.amount?.message}</p>
                    </div>
                  </div>
                ) : (
                  ""
                )}

                <div className="col-lg-12 custom-pad-20">
                  <div className="tp-appoint wow fadeInUp" data-wow-delay=".3s">
                    <input
                      type="text"
                      {...register("reportTitle", {
                        required: {
                          value: true,
                          message: "Please enter title of your report!",
                        },
                      })}
                      placeholder="Enter title of your report"
                      className="form-control"
                    />
                    <p style={{ color: "red" }}>
                      {errors.reportTitle?.message}
                    </p>
                  </div>
                </div>
                <div className="col-lg-12 custom-pad-20">
                  <div
                    className="tp-appoint wow fadeInUp position-relative w-100"
                    data-wow-delay=".3s"
                    onMouseEnter={() => setShowTooltip(true)}
                    onMouseLeave={() => setShowTooltip(false)}
                  >
                    <textarea
                      {...register("reportDetails", {
                        required: {
                          value: true,
                          message: "Please enter report details!",
                        },
                      })}
                      placeholder="Enter report details along with Date, Time & Location of the incident; Name & Designation of the officer"
                      className="form-control px-4 pt-4"
                    ></textarea>

                    {showTooltip /* true */ && (
                      <div
                        className="position-absolute text-white p-4 rounded"
                        style={{
                          top: isMobile || isTablet ? "280%" : "50%",
                          left: isMobile || isTablet ? "10%" : "80%",
                          width: isMobile || isTablet ? "80%" : "43%",
                          transform: "translateY(-50%)",
                          zIndex: 1000,
                          fontSize: "0.875rem",
                          whiteSpace: "nowrap",
                          backgroundColor: "#fff",
                          border: "1px solid gray",
                          boxShadow: "0 5px 10px rgba(0, 0, 0, 0.2)",
                        }}
                      >
                        <div className="d-flex flex-column align-items-start justify-content-center">
                          <p className="text-wrap text-black">
                            By entering more relevant details in your bribe
                            report, you are increasing the chances of action
                            being taken against the bribe taker,
                          </p>
                          <ul
                            className="mb-2 text-wrap ps-4"
                            style={{ color: textColor }}
                          >
                            <li>Name of the officer</li>
                            <li>Date of the incident</li>
                            <li>Time of the incident</li>
                            <li>
                              Location of the incident and / the office where
                              the incident took place.{" "}
                            </li>
                            <li>Designation of the officer</li>
                          </ul>
                          <div className="w-100 text-center">
                            <button
                              style={{
                                height: "40px",
                                lineHeight: "0px",
                              }}
                              type="button"
                              class="btn btn-outline-dark btn-sm w-50 rounded-pill"
                            >
                              View an ideal report
                            </button>
                          </div>
                        </div>
                        {isMobile || isTablet ? (
                          <div
                            className="position-absolute"
                            style={{
                              top: "-2.5%",
                              left: "50%",
                              transform: "translateX(-50%)",
                              width: "0",
                              height: "0",
                              borderLeft: "6px solid transparent",
                              borderRight: "6px solid transparent",
                              borderBottom: "6px solid #343a40", // Tooltip arrow color matching background
                            }}
                          ></div>
                        ) : (
                          <div
                            className="position-absolute"
                            style={{
                              top: "50%",
                              left: "-6px",
                              transform: "translateY(-50%)",
                              width: "0",
                              height: "0",
                              borderTop: "6px solid transparent",
                              borderBottom: "6px solid transparent",
                              borderRight: "6px solid #343a40", // Tooltip arrow color matching background
                            }}
                          ></div>
                        )}
                      </div>
                    )}
                    <p style={{ color: "red" }}>
                      {errors.reportDetails?.message}
                    </p>
                  </div>
                </div>
                <div className="col-lg-12 custom-pad-20">
                  <div className="tp-appoint wow fadeInUp" data-wow-delay=".3s">
                    <textarea
                      {...register("officerDetails", {
                        required: {
                          value: true,
                          message:
                            "Please enter name & Description of the officer!",
                        },
                      })}
                      placeholder="Name & Description of the officer/ Name will be kept anonymous until verified"
                      className="form-control px-4 pt-4"
                    ></textarea>

                    <p style={{ color: "red" }}>
                      {errors.officerDetails?.message}
                    </p>
                  </div>
                </div>
                <div className="col-lg-12 custom-pad-20 mb-4">
                  <div
                    className="tp-appoint wow fadeInUp d-flex justify-content-start gap-5 align-items-start"
                    data-wow-delay=".3s"
                  >
                    <div className="form-check d-flex align-items-center justify-content-between ps-0">
                      <input
                        type="radio"
                        {...register("shareStory")}
                        value="anonymous"
                        id="anonymous"
                        style={{ width: "20px", marginRight: "10px" }}
                        defaultChecked
                      />
                      <label htmlFor="anonymous" className="form-check-label">
                        I want to stay anonymous
                      </label>
                    </div>
                    <div className="d-flex flex-column align-items-start">
                      <div className="form-check d-flex align-items-center justify-content-between ps-0">
                        <input
                          type="radio"
                          {...register("shareStory")}
                          value="share"
                          id="share"
                          style={{ width: "20px", marginRight: "10px" }}
                        />
                        <label htmlFor="share" className="form-check-label">
                          I want to share my story
                        </label>
                      </div>

                      {!isAnonymousRadio && (
                        <>
                          <div className="form-check d-flex align-items-center justify-content-start ps-0">
                            <input
                              type="checkbox"
                              defaultChecked={true}
                              {...register("senior-officials", {
                                required: {
                                  value: false,
                                  message:
                                    "Please read the privacy policy and check the checkbox!",
                                },
                              })}
                              id="senior-officials"
                              style={{
                                width: "20px",
                                marginRight: "10px",
                                height: "30px",
                              }}
                            />

                            <label
                              htmlFor="senior-officials"
                              className="form-check-label"
                            >
                              Senior officials of the department
                            </label>
                          </div>
                          <div className="form-check d-flex align-items-center justify-content-start ps-0">
                            <input
                              type="checkbox"
                              defaultChecked={true}
                              {...register("state-vigilance", {
                                required: {
                                  value: true,
                                  message:
                                    "Please read the privacy policy and check the checkbox!",
                                },
                              })}
                              id="state-vigilance"
                              style={{
                                width: "20px",
                                marginRight: "10px",
                                height: "30px",
                              }}
                            />

                            <label
                              htmlFor="state-vigilance"
                              className="form-check-label"
                            >
                              State Vigilance Officer
                            </label>
                          </div>
                          <div className="form-check d-flex align-items-center justify-content-start ps-0">
                            <input
                              type="checkbox"
                              defaultChecked={true}
                              {...register("media-news-television", {
                                required: {
                                  value: true,
                                  message:
                                    "Please read the privacy policy and check the checkbox!",
                                },
                              })}
                              id="media-news-television"
                              style={{
                                width: "20px",
                                marginRight: "10px",
                                height: "30px",
                              }}
                            />

                            <label
                              htmlFor="media-news-television"
                              className="form-check-label"
                            >
                              Media - Newspapers & Television
                            </label>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </div>
                <div className="col-lg-12 custom-pad-20">
                  <div className="tp-appoint wow fadeInUp" data-wow-delay=".3s">
                    <button
                      type="button"
                      className="theme-btn text-white rounded-pill w-50"
                      onClick={() => setShowContactInfo(!showContactInfo)}
                    >
                      <i className="flaticon-enter"></i> Add Contact Info
                    </button>
                  </div>
                </div>
                {(showContactInfo || !isAnonymous) && (
                  <>
                    <div className="col-lg-12 custom-pad-20">
                      <div
                        className="tp-appoint wow fadeInUp"
                        data-wow-delay=".3s"
                      >
                        <input
                          type="text"
                          {...register("contactName", {
                            required: {
                              value: !isAnonymous,
                              message: "Please Enter you full name",
                            },
                          })}
                          placeholder="Enter your full name"
                          className="form-control"
                        />
                        <p style={{ color: "red" }}>
                          {errors.contactName?.message}
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-6 custom-pad-20">
                      <div
                        className="tp-appoint wow fadeInUp"
                        data-wow-delay=".5s"
                      >
                        <input
                          type="email"
                          {...register("contactEmail", {
                            required: {
                              value: !isAnonymous,
                              message: "Please Enter your email",
                            },
                          })}
                          placeholder="Enter your email"
                          className="form-control"
                        />
                        <p style={{ color: "red" }}>
                          {errors.contactEmail?.message}
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-6 custom-pad-20">
                      <div
                        className="tp-appoint wow fadeInUp"
                        data-wow-delay=".7s"
                      >
                        <input
                          type="text"
                          {...register("contactNumber", {
                            required: {
                              value: !isAnonymous,
                              message: "Please Enter your contact number",
                            },
                          })}
                          placeholder="Enter you contact number"
                          className="form-control"
                        />
                        <p style={{ color: "red" }}>
                          {errors.contactNumber?.message}
                        </p>
                      </div>
                    </div>
                  </>
                )}
                <div className="col-lg-12 custom-pad-20">
                  <div
                    className="tp-appoint wow fadeInUp d-flex justify-content-start flex-column"
                    data-wow-delay=".3s"
                  >
                    <div className="form-check d-flex align-items-center justify-content-start ps-0">
                      <input
                        type="checkbox"
                        {...register("privacyPolicy", {
                          required: {
                            value: true,
                            message:
                              "Please read the privacy policy and check the checkbox!",
                          },
                        })}
                        id="privacyPolicy"
                        style={{
                          width: "20px",
                          marginRight: "10px",
                          height: "30px",
                        }}
                      />

                      <label
                        htmlFor="privacyPolicy"
                        className="form-check-label"
                      >
                        I have read and agree with Privacy Policy
                      </label>
                    </div>
                    <p style={{ color: "red" }}>
                      {errors.privacyPolicy?.message}
                    </p>
                    <div className="form-check d-flex align-items-center justify-content-start ps-0">
                      <input
                        type="checkbox"
                        {...register("keepUpdated")}
                        id="keepUpdated"
                        style={{
                          width: "20px",
                          marginRight: "10px",
                          height: "30px",
                        }}
                      />
                      <label htmlFor="keepUpdated" className="form-check-label">
                        Keep me updated about responses to my report and other
                        news
                      </label>
                    </div>
                  </div>
                </div>
                <div className="col-12 custom-pad-20">
                  <div
                    className="tp-appoint text-end wow fadeInUp"
                    data-wow-delay=".9s"
                  >
                    <button type="submit" className="theme-btn text-white">
                      <i className="flaticon-enter"></i> Save My Report
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaArea;

// import React from 'react';

// const CtaArea = () => {
//    return (
//       <>
//          <section className="tp-appoint-cta-area yellow-dark-bg pt-80 pb-65">
//             <div className="container">
//                <div className="row align-items-center custom-mar-20">
//                   <div className="col-xl-2 col-lg-12 custom-pad-20">
//                      <div className="tp-appoint wow fadeInUp" data-wow-delay=".1s">
//                         <h4 className="tp-appoint-title">Online <br/> Appointment </h4>
//                      </div>
//                   </div>
//                   <div className="col-xl-8 col-lg-9 custom-pad-20">
//                      <div className="row align-items-center custom-mar-20">
//                         <div className="col-lg-4 custom-pad-20">
//                            <div className="tp-appoint wow fadeInUp" data-wow-delay=".3s">
//                               <input type="text" placeholder="Full Name"/>
//                            </div>
//                         </div>
//                         <div className="col-lg-4 custom-pad-20">
//                            <div className="tp-appoint wow fadeInUp" data-wow-delay=".5s">
//                               <input type="text" placeholder="Phone Number"/>
//                            </div>
//                         </div>
//                         <div className="col-lg-4 custom-pad-20">
//                            <div className="tp-appoint select-field-arrow wow fadeInUp" data-wow-delay=".7s">
//                               <select>
//                                  <option defaultValue="">Service Name</option>
//                                  <option defaultValue="">Commercial Service</option>
//                                  <option defaultValue="">Residential Service</option>
//                                  <option defaultValue="">Industrial Service</option>
//                                  <option defaultValue="">Commercial Service</option>
//                                  <option defaultValue="">Residential Service</option>
//                               </select>
//                            </div>
//                         </div>
//                      </div>
//                   </div>
//                   <div className="col-xl-2 col-lg-3 custom-pad-20">
//                      <div className="tp-appoint text-end wow fadeInUp" data-wow-delay=".9s">
//                         <button type="submit" className="theme-btn text-white">
//                            <i className="flaticon-enter"></i> Submit Now</button>
//                      </div>
//                   </div>
//                </div>
//             </div>
//          </section>
//       </>
//    );
// };

// export default CtaArea;
