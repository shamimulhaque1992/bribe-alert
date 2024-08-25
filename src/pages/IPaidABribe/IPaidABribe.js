import React from "react";
import AboutBreadcrumb from "../About/About/Breadcrumb/AboutBreadcrumb";
import Footer from "../../components/shared/Footer/Footer";
import Navigation from "../../components/shared/Navigation/Navigation";
import CtaArea from "../Home/Home/CtaArea/CtaArea";
// import paid_a_bribe from "/assets/img/bribe-img/Pade-a-bribe_1920X500.jpg";

const IPaidABribe = () => {
  const reportType = "paid_a_bribe";
  const title = "Are you a";
  const SubTitle = "Victim of Bribery?";
  const smallText = "I Paid a Bribe";
  const bannerBg = "#e50000";
  const placeHolderColor = "#e66e6e";
  const bgImg = "/assets/img/bribe-img/Pade-a-bribe_1920X500.jpg";

  return (
    <div>
      <Navigation />
      <AboutBreadcrumb
        title={title}
        SubTitle={SubTitle}
        smallText={smallText}
        bannerBg={bannerBg}
        bgImg={bgImg}
        placeHolderColor={placeHolderColor}
      />
      <CtaArea reportType={reportType} textColor={bannerBg}></CtaArea>
      <Footer />
    </div>
  );
};

export default IPaidABribe;
