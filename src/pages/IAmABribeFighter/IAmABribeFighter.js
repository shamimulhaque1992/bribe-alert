import React from "react";
import AboutBreadcrumb from "../About/About/Breadcrumb/AboutBreadcrumb";
import Footer from "../../components/shared/Footer/Footer";
import Navigation from "../../components/shared/Navigation/Navigation";
import CtaArea from "../Home/Home/CtaArea/CtaArea";

const IAmABribeFighter = () => {
  const reportType = "bribe_fighter";
  const title = "Are You";
  const SubTitle = "A Bribe Fighter?";
  const smallText = "Bribe Fighter";
  const bannerBg = "#0b702a";
  const placeHolderColor = "#0b702ab3";
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

export default IAmABribeFighter;
