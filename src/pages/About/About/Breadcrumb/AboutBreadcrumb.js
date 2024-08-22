import React from "react";
import Breadcrumb from "../../../../components/Breadcrumb/Breadcrumb";

const AboutBreadcrumb = ({ title, SubTitle,smallText,bannerBg }) => {
  return (
    <>
      <Breadcrumb title={title} subTitle={SubTitle}smallText={smallText}bannerBg={bannerBg}></Breadcrumb>
    </>
  );
};

export default AboutBreadcrumb;
