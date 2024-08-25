import React from "react";
import Footer from "../../../components/shared/Footer/Footer";
import Navigation from "../../../components/shared/Navigation/Navigation";
import AboutArea from "../../Home/Home/AboutArea/AboutArea";
import AboutBanner from "./AboutBanner/AboutBanner";
import AboutFaq from "./AboutFaq/AboutFaq";
import AboutServices from "./AboutServices/AboutServices";
import AboutTestimonial from "./AboutTestimonial/AboutTestimonial";
import AboutBreadcrumb from "./Breadcrumb/AboutBreadcrumb";
// import Breadcrumb from './Breadcrumb/AboutBreadcrumb';
import WorkingProcess from "./WorkingProcess/WorkingProcess";

const About = () => {
  const title = "About";
  const SubTitle = "Bribery Alert";
  const smallText = "About Us";
  const bgImg = "/assets/img/bribe-img/About-Us-Bribe-Alert-1920X500.jpg";
  return (
    <>
      <Navigation />
      <AboutBreadcrumb title={title} SubTitle={SubTitle}smallText={smallText} bgImg={bgImg}/>
      <AboutArea />
      {/* <WorkingProcess /> */}
      <AboutFaq />
      {/* <AboutServices /> */}
      {/* <AboutTestimonial /> */}
      {/* <AboutBanner /> */}
      <Footer />
    </>
  );
};

export default About;
