import React from "react";
import Breadcrumb from "../../../../components/Breadcrumb/Breadcrumb";

const ContactBreadcrumb = () => {
  const title = "Contact";
  const SubTitle = "Contact";
  const smallText = "Contact";
  const bannerBg = "#0b702a";
  return (
    <>
      <Breadcrumb
        //   title=""
        //   subTitle="Contact"
        //   smText="Free Contact"
        title={title}
        SubTitle={SubTitle}
        smallText={smallText}
        bannerBg={bannerBg}
      ></Breadcrumb>
    </>
  );
};

export default ContactBreadcrumb;
