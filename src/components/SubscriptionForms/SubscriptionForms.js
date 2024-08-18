import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FaPaperPlane } from "react-icons/fa";
import instance from "../../instance/api_instance";

const SubscriptionForms = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const [showContactInfo, setShowContactInfo] = useState(false);
  const [isAnonymous, setIsAnonymous] = useState(true);
  const [reportType, setReportType] = useState("partner");

  const onSubmit = async (data) => {
    console.log("amar data", data);
    const postData = {
      form_type: reportType, // paid_a_bribe
      form_data: {
        shareStory: data.shareStory,
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
          loading: "Sending request...",
          success: (response) => `Request sent successfully!`,
          error: (error) => {
            return "Failed to send request. Please try again.";
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

  const isAnonymousRadio = watch("shareStory") === "anonymous";

  useEffect(() => {
    setIsAnonymous(isAnonymousRadio);
  }, [isAnonymousRadio]);

  return (
    <div className="tp-footer-subscribe-area-two position-relative pt-100 pb-5">
      <div className="container">
        <div className="tp-footer-subscribe-bg-two theme-yellow-bg pt-30 pb-20 z-index pl-60 pr-60">
          <div className="row align-items-center">
            <div className="col-xl-5 col-lg-4">
              <div className="tp-footer-subscribe">
                <h3 className="tp-footer-subscribe-title">
                  Would you like to contribute to our mission?
                </h3>
              </div>
            </div>
            <div className="col-xl-7 col-lg-8">
              <ul
                class="nav nav-tabs d-flex justify-content-between mb-5"
                id="myTab"
                role="tablist"
              >
                <li class="nav-item" role="presentation">
                  <button
                    className={`theme-btn text-white border-0 ${
                      reportType !== "partner" ? "bg-transparent" : ""
                    }`}
                    id="home-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#home"
                    type="button"
                    role="tab"
                    aria-controls="home"
                    aria-selected="true"
                    onClick={() => setReportType("partner")}
                  >
                    <div className="wow fadeInUp" data-wow-delay=".1s">
                      <h4 className="fs-6 text-uppercase tp-appoint-title text-center text-white">
                        Partner
                      </h4>
                    </div>
                  </button>
                </li>
                <li class="nav-item" role="presentation">
                  <button
                    // className="theme-btn text-white border-0"
                    className={`theme-btn text-white border-0 ${
                      reportType !== "support" ? "bg-transparent" : ""
                    }`}
                    id="profile-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#profile"
                    type="button"
                    role="tab"
                    aria-controls="profile"
                    aria-selected="false"
                    onClick={() => setReportType("support")}
                  >
                    <div className="wow fadeInUp" data-wow-delay=".1s">
                      <h4 className="fs-6 text-uppercase tp-appoint-title text-center text-white">
                        Support
                      </h4>
                    </div>
                  </button>
                </li>
                <li class="nav-item" role="presentation">
                  <button
                    className={`theme-btn text-white border-0 ${
                      reportType !== "contributor" ? "bg-transparent" : ""
                    }`}
                    id="contact-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#contact"
                    type="button"
                    role="tab"
                    aria-controls="contact"
                    aria-selected="false"
                    onClick={() => setReportType("contributor")}
                  >
                    <div className="wow fadeInUp" data-wow-delay=".1s">
                      <h4 className="fs-6 text-uppercase tp-appoint-title text-center text-white">
                        Contributor
                      </h4>
                    </div>
                  </button>
                </li>
              </ul>
              <div className="d-flex justify-content-end">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="row align-items-center custom-mar-20">
                    <div className="col-lg-12 custom-pad-20">
                      <div
                        className="tp-appoint wow fadeInUp d-flex justify-content-start"
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
                          <label
                            htmlFor="anonymous"
                            className="form-check-label"
                          >
                            I want to stay anonymous
                          </label>
                        </div>
                        <div className="form-check d-flex align-items-center justify-content-between">
                          <input
                            type="radio"
                            {...register("shareStory")}
                            value="share"
                            id="share"
                            style={{ width: "20px", marginRight: "10px" }}
                          />
                          <label htmlFor="share" className="form-check-label">
                            I am willing to be identified
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-12 custom-pad-20">
                      <div
                        className="tp-appoint wow fadeInUp"
                        data-wow-delay=".3s"
                      >
                        <input
                          type="text"
                          {...register("contactName", {
                            required: {
                              value: true,
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
                        className="tp-appoint wow fadeInUp position-relative"
                        data-wow-delay=".5s"
                      >
                        <input
                          type="email"
                          {...register("contactEmail", {
                            required: {
                              value: true,
                              message: "Please Enter your email",
                            },
                          })}
                          placeholder="Enter your email"
                          className="form-control"
                        />
                        <i className="position-absolute top-50 end-0 translate-middle">
                          <FaPaperPlane />
                        </i>
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
                              value: true,
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

                    <div className="col-12 custom-pad-20">
                      <div
                        className="tp-appoint text-end wow fadeInUp"
                        data-wow-delay=".9s"
                      >
                        <button type="submit" className="theme-btn text-white">
                          <i className="flaticon-enter"></i> Join Us
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
                {/* <form action="#" className="p-0">
                  <div className="tp-footer-subscribe-form-field mb-10 w-100">
                    <input  type="text" placeholder="Email Address" />
                    <i>
                      <FaPaperPlane />
                    </i>
                  </div>
                  <div className="tp-footer-subscribe-form-btn mb-10">
                    <button type="submit" className="theme-btn text-white">
                      <i className="flaticon-enter"></i> Join Us
                    </button>
                  </div>
                </form> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionForms;
