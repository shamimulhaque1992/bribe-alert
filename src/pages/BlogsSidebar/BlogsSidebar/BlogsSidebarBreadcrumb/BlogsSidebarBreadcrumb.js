import React from "react";
import Breadcrumb from "../../../../components/Breadcrumb/Breadcrumb";

const BlogsSidebarBreadcrumb = () => {
  const title = "All";
  const SubTitle = "Blogs";
  const smallText = "Blogs";
  const bgImg = "/assets/img/bribe-img/Bribe-Alert-Blog_1920X500.jpg";
  return (
    <>
      <Breadcrumb
        title={title}
        subTitle={SubTitle}
        smallText={smallText}
        bgImg={bgImg}
      ></Breadcrumb>
    </>
  );
};

export default BlogsSidebarBreadcrumb;
