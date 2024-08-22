import React from "react";
import faqs from "../../../../data/faq-eng.json";

const AboutFaq = () => {
  return (
    <section className="tp-faq-area">
      <div className="container">
        <div className="row align-items-start">
          {/* <div className="col-lg-6 order-2 order-lg-1">
            <div className="tp-about-faq-img pt-130">
              <img
                src="/assets/img/feature/faq-img-2.png"
                alt="img not found"
              />
            </div>
          </div> */}
          <div className="col-lg-12 order-1 order-lg-2">
            <div className="tp-faq-text tp-about-faq-text pt-130 pb-120">
              <div className="section-title-wrapper-two mb-45">
                <h5 className="tp-section-subtitle section__sm__title common-yellow-shape mb-20 heading-color-black">
                  Essential Questions
                </h5>
                <h2 className="tp-section-title heading-color-black">
                  Your Questions on Combating Corruption, <br />
                  Answered
                </h2>
              </div>
              <div className="accordion" id="accordionExample">
                {faqs.map((faq, index) => (
                  <div className="accordion-item" key={index}>
                    <h2 className="accordion-header" id={`headingOne${index}`}>
                      <button
                        className={`accordion-button ${
                          index === 0 ? "" : "collapsed"
                        }`}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#collapseOne${index}`}
                        aria-expanded={index === 0 ? "true" : "false"}
                        aria-controls={`collapseOne${index}`}
                        style={{ textAlign: "justify" }}
                      >
                        <span style={{ paddingRight: "15px" }}>
                          {faq.question}
                        </span>
                      </button>
                    </h2>
                    <div
                      id={`collapseOne${index}`}
                      className={`accordion-collapse collapse ${
                        index === 0 ? "show" : ""
                      }`}
                      aria-labelledby={`headingOne${index}`}
                      data-bs-parent="#accordionExample"
                    >
                      <div
                        className="accordion-body"
                        style={{ textAlign: "justify" }}
                        dangerouslySetInnerHTML={{ __html: faq.answer }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutFaq;
