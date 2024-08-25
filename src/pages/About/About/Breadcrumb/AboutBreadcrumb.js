import React from "react";
import Breadcrumb from "../../../../components/Breadcrumb/Breadcrumb";

const AboutBreadcrumb = ({ title, SubTitle,smallText,bannerBg,bgImg }) => {
  return (
    <>
      <Breadcrumb title={title} subTitle={SubTitle}smallText={smallText}bannerBg={bannerBg} bgImg={bgImg}></Breadcrumb>
    </>
  );
};

export default AboutBreadcrumb;
