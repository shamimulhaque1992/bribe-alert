import React from "react";
import Breadcrumb from "../../../../components/Breadcrumb/Breadcrumb";

const BlogDetailsBreadcrumb = () => {
  const title = "Our";
  const SubTitle = "Blog";
  const smallText = "Blog";
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

export default BlogDetailsBreadcrumb;
