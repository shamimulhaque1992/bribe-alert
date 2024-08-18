import React from "react";
import AboutBreadcrumb from "../About/About/Breadcrumb/AboutBreadcrumb";
import Footer from "../../components/shared/Footer/Footer";
import Navigation from "../../components/shared/Navigation/Navigation";
import CtaArea from "../Home/Home/CtaArea/CtaArea";

const IAmABribeFighter = () => {
  const reportType = "bribe_fighter";
  return (
    <div>
      <Navigation />
      <AboutBreadcrumb />
      <CtaArea reportType={reportType}></CtaArea>
      <Footer />
    </div>
  );
};

export default IAmABribeFighter;
