import React from "react";
import AboutBreadcrumb from "../About/About/Breadcrumb/AboutBreadcrumb";
import Footer from "../../components/shared/Footer/Footer";
import Navigation from "../../components/shared/Navigation/Navigation";
import CtaArea from "../Home/Home/CtaArea/CtaArea";

const IMetAnHonestOfficer = () => {
  const reportType = "honest_officer";
  const title = "Appreciate";
  const SubTitle = "An Honest Officer";
  const smallText = "Honest Officer";
  const bannerBg = "#e5b10a";
  const placeHolderColor = "#ffc200e8";
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
        placeHolderColor={placeHolderColor}
      />
      <CtaArea reportType={reportType} textColor={bannerBg}placeHolderColor={placeHolderColor}></CtaArea>
      <Footer />
    </div>
  );
};

export default IMetAnHonestOfficer;
