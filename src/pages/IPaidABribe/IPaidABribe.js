import React from "react";
import AboutBreadcrumb from "../About/About/Breadcrumb/AboutBreadcrumb";
import Footer from "../../components/shared/Footer/Footer";
import Navigation from "../../components/shared/Navigation/Navigation";
import CtaArea from "../Home/Home/CtaArea/CtaArea";

const IPaidABribe = () => {
  const reportType = "paid_a_bribe";

  return (
    <div>
      <Navigation />
      <AboutBreadcrumb />

      <CtaArea reportType={reportType}></CtaArea>
      <Footer />
    </div>
  );
};

export default IPaidABribe;
