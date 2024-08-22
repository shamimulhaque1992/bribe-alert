import React from "react";
import Footer from "../../../components/shared/Footer/Footer";
import Navigation from "../../../components/shared/Navigation/Navigation";
import ServicesArea from "./ServicesArea/ServicesArea";
import ServicesBrandLogos from "./ServicesBrandLogo/ServicesBrandLogos";
import ServicesBreadcrumb from "./ServicesBreadcrumb/ServicesBreadcrumb";
import ServicesPricing from "./ServicesPricing/ServicesPricing";
import ServicesTestimonials from "./ServicesTestimonial/ServicesTestimonials";
import ComingSoon from "../../../components/ComingSoon/ComingSoon";

const Services = () => {
  const title = "Our";
  const SubTitle = "Resources";
  const smallText = "Resources";
  return (
    <>
      <Navigation />
      <ServicesBreadcrumb
        title={title}
        SubTitle={SubTitle}
        smallText={smallText}
      />
      {/* <ServicesArea />
            <ServicesTestimonials />
            <ServicesBrandLogos />
            <ServicesPricing /> */}
      <ComingSoon></ComingSoon>
      <Footer />
    </>
  );
};

export default Services;
