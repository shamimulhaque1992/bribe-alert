import React from "react";
import Breadcrumb from "../../../../components/Breadcrumb/Breadcrumb";

const AboutBreadcrumb = ({ title, SubTitle }) => {
  return (
    <>
      <Breadcrumb title={title} subTitle={SubTitle}></Breadcrumb>
    </>
  );
};

export default AboutBreadcrumb;
