import React from "react";
import Breadcrumb from "../../../../components/Breadcrumb/Breadcrumb";

const BlogsSidebarBreadcrumb = () => {
  const title = "All";
  const SubTitle = "Blogs";
  const smallText = "Blogs";
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

export default BlogsSidebarBreadcrumb;
