import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FaPaperPlane } from "react-icons/fa";
import instance from "../../instance/api_instance";

const NewsLaterForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const [showContactInfo, setShowContactInfo] = useState(false);
  const [isAnonymous, setIsAnonymous] = useState(true);
  const [reportType, setReportType] = useState("subscription");

  const onSubmit = async (data) => {
    const postData = {
      form_type: reportType, // paid_a_bribe
      form_data: {},
      applicant: {
        contactEmail: data.contactEmail,
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
                <h3 className="tp-footer-subscribe-title">For latest update</h3>
              </div>
            </div>
            <div className="col-xl-7 col-lg-8">
              <div className="d-flex justify-content-end">
                <form onSubmit={handleSubmit(onSubmit)} className="w-100">
                  <div className="row align-items-center custom-mar-20">
                    <div className="col-lg-8 custom-pad-20">
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

                    <div className="col-12 col-md-6 col-lg-4 custom-pad-20">
                      <div
                        className="tp-appoint text-end wow fadeInUp"
                        data-wow-delay=".9s"
                      >
                        <button type="submit" className="theme-btn text-white">
                          <i className="flaticon-enter"></i> Subscribe
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

export default NewsLaterForm;
