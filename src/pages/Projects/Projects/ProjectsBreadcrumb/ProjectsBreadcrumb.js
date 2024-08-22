import React from "react";
import Breadcrumb from "../../../../components/Breadcrumb/Breadcrumb";

const ProjectsBreadcrumb = () => {
  const title = "Our";
  const SubTitle = "Partners";
  const smallText = "Partners";
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

export default ProjectsBreadcrumb;
