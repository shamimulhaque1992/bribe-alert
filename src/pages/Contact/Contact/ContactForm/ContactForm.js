import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelopeOpen,
  FaPaperPlane,
} from "react-icons/fa";
import instance from "../../../../instance/api_instance";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const postData = {
      form_type: "contact_us",
      form_data: {
        message: data.message,
      },
      applicant: {
        contactName: data.contactName,
        contactEmail: data.contactEmail,
        contactNumber: data.contactNumber,
      },
      applicant_visibility: 1, // 1= Visible, 0 = Hide
      approval_status: "Pending", // Pending, Processing, Approved, Canceled
      status: 1,
    };
    try {
      toast.promise(
        instance.post("/bribeformdata", postData, {
          headers: { "Content-Type": "application/json" },
        }),
        {
          loading: "Sending message...",
          success: (response) => `Message sent successfully!`,
          error: (error) => {
            return "Failed to send message. Please try again.";
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

  return (
    <>
      <section className="tp-contact-area pb-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-10">
              <div
                className="section-title-wrapper-two mb-50 wow fadeInUp"
                data-wow-delay=".2s"
              >
                {/* <h5 className="tp-section-subtitle section__sm__title common-yellow-shape mb-20 heading-color-black">
                  Get Free Estimate
                </h5> */}
                <h2 className="tp-section-title heading-color-black">
                  {/* If you Have Any Query, Don’t Hesitate <br />
                  Contact with us{" "} */}
                  Would you like to reach us?
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div className="row custom-mar-20">
                <div className="col-lg-12 col-md-4 col-sm-6 custom-pad-20">
                  {/* <div
                    className="tp-contact-info mb-40 wow fadeInUp"
                    data-wow-delay=".4s"
                  >
                    <div className="tp-contact-info-icon">
                      <i>
                        {" "}
                        <FaMapMarkerAlt className="contact_icon" />{" "}
                      </i>
                    </div>
                    <div className="tp-contact-info-text">
                      <h4 className="tp-contact-info-title mb-15">Address</h4>
                      <p>
                        5/A 5suvastu arcade, 3rd Floor <br />
                        palace road, London.
                      </p>
                    </div>
                  </div> */}
                </div>
                {/* <div className="col-lg-12 col-md-4 col-sm-6 custom-pad-20">
                  <div
                    className="tp-contact-info mb-40 wow fadeInUp"
                    data-wow-delay=".6s"
                  >
                    <div className="tp-contact-info-icon">
                      <i>
                        {" "}
                        <FaPhoneAlt className="contact_icon" />{" "}
                      </i>
                    </div>
                    <div className="tp-contact-info-text">
                      <h4 className="tp-contact-info-title mb-15">Phone</h4>
                      <a href="tel:333888200-55">333888200-55</a>
                      <a href="tel:444555300-25">444555300-25</a>
                    </div>
                  </div>
                </div> */}
                <div className="col-lg-12 col-md-4 col-sm-6 custom-pad-20">
                  <div
                    className="tp-contact-info mb-40 wow fadeInUp"
                    data-wow-delay=".8s"
                  >
                    <div className="tp-contact-info-icon">
                      <i>
                        {" "}
                        <FaEnvelopeOpen className="contact_icon" />{" "}
                      </i>
                    </div>
                    <div className="tp-contact-info-text">
                      <h4 className="tp-contact-info-title mb-15">Email</h4>
                      <a href="mailto:info@themepure.com">info@themepure.com</a>
                      <a href="mailto:info@themepure.com">info@themepure.com</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="tp-contact-form">
                <div className="row custom-mar-20">
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row align-items-center custom-mar-20">
                      <div className="col-lg-12 custom-pad-20">
                        <div
                          className="tp-appoint wow fadeInUp d-flex justify-content-start"
                          data-wow-delay=".3s"
                        ></div>
                      </div>

                      <div className="col-md-6 custom-pad-20">
                        <div
                          className="tp-contact-form-field mb-20"
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
                      <div className="col-md-6 custom-pad-20">
                        <div
                          className="tp-contact-form-field mb-20"
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
                          <p style={{ color: "red" }}>
                            {errors.contactEmail?.message}
                          </p>
                        </div>
                      </div>
                      <div className="col-md-12 custom-pad-20">
                        <div
                          className="tp-contact-form-field mb-20"
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
                      <div className="col-md-12 custom-pad-20">
                        <div
                          className="tp-contact-form-field mb-20"
                          data-wow-delay=".7s"
                        >
                          <textarea
                            type="text"
                            {...register("message", {
                              required: {
                                value: true,
                                message: "Please Enter your message",
                              },
                            })}
                            placeholder="Enter you message"
                            className="form-control"
                          />
                          <p style={{ color: "red" }}>
                            {errors.message?.message}
                          </p>
                        </div>
                      </div>

                      <div className="col-md-12 custom-pad-20">
                        <div className="tp-contact-form-field">
                          <button
                            type="submit"
                            className="theme-btn text-white"
                          >
                            <i className="flaticon-enter"></i> Send Message
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                  {/* <div className="col-md-6 custom-pad-20">
                    <div className="tp-contact-form-field mb-20">
                      <input type="text" placeholder="Full name" />
                    </div>
                  </div>
                  <div className="col-md-6 custom-pad-20">
                    <div className="tp-contact-form-field mb-20">
                      <input type="email" placeholder="Email Address" />
                    </div>
                  </div>
                  <div className="col-md-6 custom-pad-20">
                    <div className="tp-contact-form-field mb-20">
                      <input type="text" placeholder="Phone" />
                    </div>
                  </div>
                  <div className="col-md-6 custom-pad-20">
                    <div className="tp-contact-form-field select-field-arrow mb-20">
                      <select>
                        <option defaultValue="">Choose Subject</option>
                        <option defaultValue="">House Cleaning</option>
                        <option defaultValue="">Office Cleaning</option>
                        <option defaultValue="">Kitchen Cleaning</option>
                        <option defaultValue="">Club Cleaning</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-12 custom-pad-20">
                    <div className="tp-contact-form-field mb-20">
                      <textarea placeholder="Your Message"></textarea>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactForm;
