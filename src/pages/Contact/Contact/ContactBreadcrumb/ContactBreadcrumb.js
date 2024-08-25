import React from "react";
import Breadcrumb from "../../../../components/Breadcrumb/Breadcrumb";

const ContactBreadcrumb = () => {
  const title = "Contact";
  const SubTitle = "Contact";
  const smallText = "Contact";
  const bannerBg = "#0b702a";
  const bgImg = "/assets/img/bribe-img/contact-us-background.jpg";
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
        bgImg={bgImg}
      ></Breadcrumb>
    </>
  );
};

export default ContactBreadcrumb;
