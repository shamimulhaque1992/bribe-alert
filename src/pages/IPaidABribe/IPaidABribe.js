import React from "react";
import AboutBreadcrumb from "../About/About/Breadcrumb/AboutBreadcrumb";
import Footer from "../../components/shared/Footer/Footer";
import Navigation from "../../components/shared/Navigation/Navigation";
import CtaArea from "../Home/Home/CtaArea/CtaArea";

const IPaidABribe = () => {
  const reportType = "paid_a_bribe";
  const title = "Are you a";
  const SubTitle = "Victim of Bribery?";
  const smallText = "I Paid a Bribe";
  const bannerBg = "#e50000";

  return (
    <div>
      <Navigation />
      <AboutBreadcrumb title={title} SubTitle={SubTitle}smallText={smallText}bannerBg={bannerBg} />
      <CtaArea reportType={reportType}textColor={bannerBg}></CtaArea>
      <Footer />
    </div>
  );
};

export default IPaidABribe;
