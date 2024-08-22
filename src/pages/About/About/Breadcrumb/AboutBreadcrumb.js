import React from "react";
import Breadcrumb from "../../../../components/Breadcrumb/Breadcrumb";

const AboutBreadcrumb = ({ title, SubTitle,smallText }) => {
  return (
    <>
      <Breadcrumb title={title} subTitle={SubTitle}smallText={smallText}></Breadcrumb>
    </>
  );
};

export default AboutBreadcrumb;
