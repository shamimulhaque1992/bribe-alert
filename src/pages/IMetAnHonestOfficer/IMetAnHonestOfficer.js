import React from "react";
import AboutBreadcrumb from "../About/About/Breadcrumb/AboutBreadcrumb";
import Footer from "../../components/shared/Footer/Footer";
import Navigation from "../../components/shared/Navigation/Navigation";
import CtaArea from "../Home/Home/CtaArea/CtaArea";

const IMetAnHonestOfficer = () => {
  const reportType = "honest_officer";
  const title = "Appreciate an";
  const SubTitle = "Honest Officer";
  return (
    <div>
      <Navigation />
      <AboutBreadcrumb title={title} SubTitle={SubTitle} />
      <CtaArea reportType={reportType}></CtaArea>
      <Footer />
    </div>
  );
};

export default IMetAnHonestOfficer;
