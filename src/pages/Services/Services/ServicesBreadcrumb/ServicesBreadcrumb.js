import React from "react";
import Breadcrumb from "../../../../components/Breadcrumb/Breadcrumb";

const ServicesBreadcrumb = ({ title, SubTitle, smallText }) => {
  return (
    <>
      <Breadcrumb
        title={title}
        subTitle={SubTitle}
        smallText={smallText}
      ></Breadcrumb>
    </>
  );
};

export default ServicesBreadcrumb;
