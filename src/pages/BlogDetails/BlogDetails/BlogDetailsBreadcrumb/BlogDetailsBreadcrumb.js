import React from "react";
import Breadcrumb from "../../../../components/Breadcrumb/Breadcrumb";

const BlogDetailsBreadcrumb = () => {
  const title = "Our";
  const SubTitle = "Blog";
  const smallText = "Blog";
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

export default BlogDetailsBreadcrumb;
