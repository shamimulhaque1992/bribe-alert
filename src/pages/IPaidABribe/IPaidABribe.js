import React from "react";
import AboutBreadcrumb from "../About/About/Breadcrumb/AboutBreadcrumb";
import Footer from "../../components/shared/Footer/Footer";
import Navigation from "../../components/shared/Navigation/Navigation";
import CtaArea from "../Home/Home/CtaArea/CtaArea";
// import paid_a_bribe from "/assets/img/bribe-img/Pade-a-bribe_1920X500.jpg";

const IPaidABribe = () => {
  const reportType = "paid_a_bribe";
  const title = "Are You";
  const SubTitle = "A Victim of Bribery?";
  const smallText = "I Paid a Bribe";
  const bannerBg = "#e50000";
  const placeHolderColor = "#f46767a6";
  const bgImg = "";

  return (
    <div>
      <Navigation />
      <AboutBreadcrumb
        title={title}
        SubTitle={SubTitle}
        smallText={smallText}
        bannerBg={bannerBg}
        bgImg={bgImg}
      />
      <CtaArea
        reportType={reportType}
        textColor={bannerBg}
        placeHolderColor={placeHolderColor}
      ></CtaArea>
      <Footer />
    </div>
  );
};

export default IPaidABribe;
